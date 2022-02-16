from typing import Any, Dict, List, Union
import pandas as pd
from mitosheet.api.graph.graph_parameter import GraphParameter
from mitosheet.transpiler.transpile_utils import column_header_list_to_transpiled_code, column_header_to_transpiled_code
from mitosheet.types import ColumnHeader
import plotly.express as px
import plotly.graph_objects as go
from mitosheet.api.graph.graph_utils import BAR, BOX, HISTOGRAM, SCATTER, filter_df_to_safe_size, get_barmode, get_graph_title

# TAB is used in place of \t in generated code because 
# Jupyter turns \t into a grey arrow, but converts four spaces into a tab.
TAB = '    '

def graph_filtering(graph_type: str, df: pd.DataFrame, column_headers: List[ColumnHeader]) -> pd.DataFrame:
    """
    Filters the dataframe about to be graphed so that we don't crash the browser
    """
    return filter_df_to_safe_size(graph_type, df, column_headers)


def graph_filtering_code(graph_type: str, df_name: str, df: pd.DataFrame, column_headers: List[ColumnHeader]) -> str:
    """
    Returns the code for filtering the dataframe so we don't crash the browser
    """
    # Check if we filter the graph
    _, filtered = filter_df_to_safe_size(graph_type, df, column_headers)
    
    # If we don't filter the graph, then return an empty string
    if not filtered: 
        return ''
    
    # If we do filter the graph, then return the code needed to filter the graph
    filtered_code = """from mitosheet import filter_df_to_safe_size

# Filter the dataframe so that it does not crash the browser
{df_name}_filtered, _ = filter_df_to_safe_size('{graph_type}', {df_name}, {column_headers})
""".format(
    graph_type=graph_type,
    df_name=df_name, 
    column_headers=column_headers
)
    return filtered_code


def graph_creation(
    graph_type: str, 
    df: pd.DataFrame, 
    x_axis_column_headers: List[ColumnHeader],
    y_axis_column_headers: List[ColumnHeader]
) -> go.Figure: 
    """
    Creates and returns the Plotly express graph figure
    """
    
    # Create the parameters that we use to construct the graph
    x_arg: Union[List[ColumnHeader], ColumnHeader, None] = None
    if len(x_axis_column_headers) == 1:
        # Note: In the new interface, x will always have a length of 0 or 1
        x_arg = x_axis_column_headers[0]
    if len(x_axis_column_headers) > 1:
        x_arg = x_axis_column_headers

    y_arg: Union[List[ColumnHeader], ColumnHeader, None] = None
    if len(y_axis_column_headers) == 1:
        y_arg = y_axis_column_headers[0]
    if len(y_axis_column_headers) > 1:
        y_arg = y_axis_column_headers
    
    if graph_type == BOX:
        return px.box(df, x=x_arg, y=y_arg)
    if graph_type == HISTOGRAM:
        return px.histogram(df, x=x_arg, y=y_arg)
    if graph_type == BAR:
        return px.bar(df, x=x_arg, y=y_arg)
    if graph_type == SCATTER:
        return px.scatter(df, x=x_arg, y=y_arg)

    
def graph_creation_code(
    graph_type: str, 
    df_name: str, 
    x_axis_column_headers: List[ColumnHeader],
    y_axis_column_headers: List[ColumnHeader]
) -> str:
    """
    Returns the code for creating the Plotly express graph
    """

    # Create the params used to construct the graph
    all_params: List[GraphParameter] = []

    if len(x_axis_column_headers) == 1:
        all_params.append(GraphParameter('x', column_header_to_transpiled_code(x_axis_column_headers[0]), False))
    elif len(x_axis_column_headers) >= 1:
        all_params.append(GraphParameter('x', column_header_list_to_transpiled_code(x_axis_column_headers), False))

    if len(y_axis_column_headers) == 1:
        all_params.append(GraphParameter('y', column_header_to_transpiled_code(y_axis_column_headers[0]), False))
    elif len(y_axis_column_headers) >= 1:
        all_params.append(GraphParameter('y', column_header_list_to_transpiled_code(y_axis_column_headers), False))

    params = f', '.join(gp.create_parameter_chord() for gp in all_params)

    if graph_type == BOX:
        return f"fig = px.box({df_name}, {params})"
    if graph_type == HISTOGRAM:
        return f"fig = px.histogram({df_name}, {params})"
    if graph_type == BAR:
        return f"fig = px.bar({df_name}, {params})"
    if graph_type == SCATTER:
        return f"fig = px.scatter({df_name}, {params})"
    return ''


def graph_styling(fig: go.Figure, graph_type: str, column_headers: List[ColumnHeader], filtered: bool) -> go.Figure:
    """
    Styles the Plotly express graph figure
    """

    # Create the parameters that we use to style the graph
    graph_title = get_graph_title(column_headers, [], filtered, graph_type)
    barmode = get_barmode(graph_type)

    # Actually update the style of the graph
    fig.update_layout(
        title = graph_title,
        barmode=barmode,
        xaxis=dict(
            rangeslider=dict(
                visible=True,
                thickness=.05
            )
        )
    )
    return fig 


def graph_styling_code(graph_type: str, column_headers: List[ColumnHeader], filtered: bool) -> str:
    """
    Returns the code for styling the Plotly express graph
    """

    # Create the params used to style the graph
    all_params: List[GraphParameter] = []
    
    graph_title = get_graph_title(column_headers, [], filtered, graph_type)
    all_params.append(GraphParameter('title', graph_title, True))

    barmode = get_barmode(graph_type)
    if barmode is not None:
        all_params.append(GraphParameter('barmode', barmode, True))

    RANGE_SLIDER = """dict(
        rangeslider=dict(
            visible=True,
            thickness=.05
        )
    )"""
    all_params.append(GraphParameter('xaxis', RANGE_SLIDER, False))

    params = f'\n{TAB}'
    params += f',\n{TAB}'.join(gp.create_parameter_chord() for gp in all_params)
    params += '\n'

    return f"fig.update_layout({params})"

def get_plotly_express_graph(
    graph_type: str, 
    df: pd.DataFrame, 
    x_axis_column_headers: List[ColumnHeader],
    y_axis_column_headers: List[ColumnHeader]
) -> go.Figure: 
    """
    Generates and returns a Plotly express graph in 3 steps
    1) filtering -- make sure that dataframe is a safe size to graph
    2) graph creation -- actually construct the graph
    3) graph styling -- style the graph 
    """
    all_column_headers = x_axis_column_headers + y_axis_column_headers

    # Step 1: Filtering
    df, filtered = graph_filtering(graph_type, df, all_column_headers)

    # Step 2: Graph Creation
    fig = graph_creation(graph_type, df, x_axis_column_headers, y_axis_column_headers)

    # Step 3: Graph Styling
    fig = graph_styling(fig, graph_type, all_column_headers, filtered)
    
    return fig

def get_plotly_express_graph_code(
        graph_type: str,
        df: pd.DataFrame, 
        df_name: str,
        x_axis_column_headers: List[ColumnHeader],
        y_axis_column_headers: List[ColumnHeader]
    ) -> str:
    """
    Generates the code for a Plotly express graph in 3 steps
    1) filtering -- make sure that dataframe is a safe size to graph
    2) graph creation -- actually construct the graph
    3) graph styling -- style the graph 
    """

    code = [] 
    code.append('import plotly.express as px')

    # Step 1: Filtering
    all_column_headers = x_axis_column_headers + y_axis_column_headers

    # TODO: Make a function that just checks if we're going to filter instead of actually doing the filter!
    _, filtered = filter_df_to_safe_size(graph_type, df, all_column_headers)
    code.append(graph_filtering_code(graph_type, df_name, df, all_column_headers))
    df_name = f"{df_name}_filtered" if filtered else df_name

    # Step 2: Graph Creation
    code.append('# Construct the graph and style it. Further customize your graph by editing this code.')
    code.append('# See Plotly Documentation for help: https://plotly.com/python/plotly-express/')
    code.append(graph_creation_code(graph_type, df_name, x_axis_column_headers, y_axis_column_headers))

    # Step 3: Graph Styling
    code.append(graph_styling_code(graph_type, all_column_headers, filtered))

    # We use fig.show(renderer="iframe") which works in both JLab 2 & 3
    # and renders in line, 
    code.append('fig.show(renderer="iframe")')
    
    return "\n".join(code)
