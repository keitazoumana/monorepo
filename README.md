# ![Mito Logo](https://www.trymito.io/_next/image?url=%2FMito.svg&w=128&q=75) Mito Monorepo 

Mito is a spreadsheet that lives inside your JupyterLab notebooks. It allows you to edit Pandas dataframes like an Excel file, and generates Python code that corresponds to each of your edits. 

<p align="center">
  <img src="https://www.trymito.io/short-demo.gif">
</p>

Mito aims to be the _first_ tool in your data science toolkit and supports:
- Point-and-click CSV and XLSX import
- Excel-style pivot tables
- Graph generation
- Filtering and sorting
- Merge (lookups)
- Excel-Style formulas
- Column summary statistics
- And much more!

Mito is an open source tool (look around...), and will always be built by and for our community. See our [plans page](https://www.trymito.io/plans) for more detail about our features, and consider purchasing Mito Pro to help fund development. 

## ⚡️ Quick start

To get started, follow the install instructions [here](https://docs.trymito.io/getting-started/installing-mito). 

If you're interested in Mito Pro, see our [plans page](https://www.trymito.io/plans).

## Documentation

You can find all Mito documentation available [here](https://docs.trymito.io).

## Getting Help

To get support, [join our Discord](https://discord.com/invite/XdJSZyejJU).

## Docker Quick Start

Coming soon!

## MyBinder

MyBinder link for the main branch: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/mito-ds/monorepo/HEAD?labpath=%2Fbinder%2Fmito-starter-notebook.ipynb)

# Contributing

This repo is the monorepo for the Mito project, and so contains the `mitosheet` package, the `trymito.io` website, and our documentation as well.

## Mitosheet

To see the code for the `mitosheet` package, see the `mitosheet` folder. 

### Testing

To test the current version of `mitosheet` that is deployed on Test PyPi, create an empty venv, and run the command
```
python3 -m pip install mitoinstaller
python3 -m mitoinstaller install --test-pypi
```

Then, launch JLab to test the current version of the `mitosheet` package on Test PyPi.

## Mitoinstaller

To see the `mitoinstaller` package, see the `mitoinstaller` folder.

## Trymito.io

To see the code for our website, see the `trymito.io` folder. 

## Docs

Our docs are hosted on Gitbooks [here](https://docs.trymito.io). You can see and edit the docs in the `/docs` folder, PRs greatly appreciated!  
An introduction article to Mito is hosted on Towards Data Science [here](https://towardsdatascience.com/introduction-to-mito-spreadsheet-for-data-scientists-that-also-generates-python-codes-642b4c2d7dfc)
