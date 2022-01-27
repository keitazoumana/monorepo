// Copyright (c) Mito

import React from 'react';

const BlueMitoFolk = (props: {margin?: string, bounce?: boolean, loops?: string}): JSX.Element => {
    return (
        <svg style={{'margin': props.margin || '75px 50px', animation: props.bounce ? 'bounce 2s' : '', animationIterationCount: props.loops || ''}} width="200" height="200" viewBox="0 0 158 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-2.5" x2="54.2678" y2="-2.5" transform="matrix(0.811352 0.584558 -0.631109 0.775694 0.380859 47.0977)" stroke="black" strokeWidth="5"/>
            <path d="M39.6259 118.674C38.1276 115.896 36.9729 112.507 36.1479 108.675C34.5996 101.484 34.2317 92.8194 34.8757 83.9285C35.5195 75.0396 37.1733 65.9431 39.6563 57.8912C42.1417 49.8313 45.4468 42.8542 49.3715 38.176L49.4266 38.1103L49.4556 38.0314C52.7875 28.9703 60.0837 22.3426 68.5729 18.4805C77.0676 14.6158 86.7154 13.54 94.6991 15.5424C98.5964 16.5198 102.094 18.2283 104.874 20.7049C100.844 18.8266 96.401 17.6258 91.8538 17.0517C82.1689 15.829 71.948 17.4397 64.1023 21.4607C56.3017 25.4587 50.7979 31.8745 50.6166 40.2794C42.2863 50.3146 36.9502 68.7764 35.6902 86.2006C35.0565 94.9632 35.4505 103.5 37.0292 110.616C37.683 113.563 38.5431 116.28 39.6259 118.674ZM44.8772 124.695C41.6758 121.603 39.4099 116.598 38.0358 110.405C36.4815 103.398 36.0869 94.9543 36.7161 86.2535C37.9762 68.8273 43.33 50.5175 51.5292 40.7441L51.6397 40.6123L51.6419 40.4453C51.7475 32.413 56.9589 26.2201 64.5833 22.3125C72.2143 18.4016 82.2103 16.8154 91.7038 18.014C97.1622 18.7031 102.434 20.3098 106.986 22.9085C108.808 25.1425 110.153 27.8385 110.876 31.0136C112.801 39.4697 110.337 51.423 100.497 67.2383L100.434 67.3402L100.426 67.4575C100.102 72.5592 100.154 77.4677 100.228 82.1668C100.234 82.5208 100.24 82.8737 100.246 83.2253C100.316 87.5461 100.383 91.682 100.172 95.6484C99.7165 104.208 97.9657 111.911 92.1966 118.801C79.0053 131.12 60.2726 131.716 44.8772 124.695ZM79.7899 130.109C68.1036 132.408 56.1046 131.843 48.0868 127.078C63.0296 132.569 80.3975 131.194 92.9377 119.465L92.9601 119.444L92.9797 119.421C98.9569 112.296 100.738 104.349 101.199 95.6838C101.412 91.6842 101.344 87.5171 101.274 83.2042C101.268 82.8501 101.262 82.495 101.257 82.1389C101.183 77.4762 101.132 72.6392 101.445 67.6194C111.293 51.7565 113.88 39.5757 111.882 30.7972C111.33 28.3747 110.431 26.2188 109.247 24.3227C111.687 25.9938 113.865 27.9899 115.683 30.3245C121.23 37.4485 123.483 47.8046 119.474 61.9027C118.07 65.8323 117.575 70.2112 117.421 74.7692C117.326 77.5827 117.361 80.4939 117.396 83.4184C117.418 85.2234 117.44 87.0334 117.431 88.8286C117.385 98.2988 116.493 107.507 110.491 114.662C104.473 121.835 92.4154 127.624 79.7899 130.109Z" fill="#00090F"/>
            <path d="M39.6259 118.674C38.1276 115.896 36.9729 112.507 36.1479 108.675C34.5996 101.484 34.2317 92.8194 34.8757 83.9285C35.5195 75.0396 37.1733 65.9431 39.6563 57.8912C42.1417 49.8313 45.4468 42.8542 49.3715 38.176L49.4266 38.1103L49.4556 38.0314C52.7875 28.9703 60.0837 22.3426 68.5729 18.4805C77.0676 14.6158 86.7154 13.54 94.6991 15.5424C98.5964 16.5198 102.094 18.2283 104.874 20.7049C100.844 18.8266 96.401 17.6258 91.8538 17.0517C82.1689 15.829 71.948 17.4397 64.1023 21.4607C56.3017 25.4587 50.7979 31.8745 50.6166 40.2794C42.2863 50.3146 36.9502 68.7764 35.6902 86.2006C35.0565 94.9632 35.4505 103.5 37.0292 110.616C37.683 113.563 38.5431 116.28 39.6259 118.674ZM44.8772 124.695C41.6758 121.603 39.4099 116.598 38.0358 110.405C36.4815 103.398 36.0869 94.9543 36.7161 86.2535C37.9762 68.8273 43.33 50.5175 51.5292 40.7441L51.6397 40.6123L51.6419 40.4453C51.7475 32.413 56.9589 26.2201 64.5833 22.3125C72.2143 18.4016 82.2103 16.8154 91.7038 18.014C97.1622 18.7031 102.434 20.3098 106.986 22.9085C108.808 25.1425 110.153 27.8385 110.876 31.0136C112.801 39.4697 110.337 51.423 100.497 67.2383L100.434 67.3402L100.426 67.4575C100.102 72.5592 100.154 77.4677 100.228 82.1668C100.234 82.5208 100.24 82.8737 100.246 83.2253C100.316 87.5461 100.383 91.682 100.172 95.6484C99.7165 104.208 97.9657 111.911 92.1966 118.801C79.0053 131.12 60.2726 131.716 44.8772 124.695ZM79.7899 130.109C68.1036 132.408 56.1046 131.843 48.0868 127.078C63.0296 132.569 80.3975 131.194 92.9377 119.465L92.9601 119.444L92.9797 119.421C98.9569 112.296 100.738 104.349 101.199 95.6838C101.412 91.6842 101.344 87.5171 101.274 83.2042C101.268 82.8501 101.262 82.495 101.257 82.1389C101.183 77.4762 101.132 72.6392 101.445 67.6194C111.293 51.7565 113.88 39.5757 111.882 30.7972C111.33 28.3747 110.431 26.2188 109.247 24.3227C111.687 25.9938 113.865 27.9899 115.683 30.3245C121.23 37.4485 123.483 47.8046 119.474 61.9027C118.07 65.8323 117.575 70.2112 117.421 74.7692C117.326 77.5827 117.361 80.4939 117.396 83.4184C117.418 85.2234 117.44 87.0334 117.431 88.8286C117.385 98.2988 116.493 107.507 110.491 114.662C104.473 121.835 92.4154 127.624 79.7899 130.109Z" fill="url(#paint0_linear)"/>
            <path d="M39.6259 118.674C38.1276 115.896 36.9729 112.507 36.1479 108.675C34.5996 101.484 34.2317 92.8194 34.8757 83.9285C35.5195 75.0396 37.1733 65.9431 39.6563 57.8912C42.1417 49.8313 45.4468 42.8542 49.3715 38.176L49.4266 38.1103L49.4556 38.0314C52.7875 28.9703 60.0837 22.3426 68.5729 18.4805C77.0676 14.6158 86.7154 13.54 94.6991 15.5424C98.5964 16.5198 102.094 18.2283 104.874 20.7049C100.844 18.8266 96.401 17.6258 91.8538 17.0517C82.1689 15.829 71.948 17.4397 64.1023 21.4607C56.3017 25.4587 50.7979 31.8745 50.6166 40.2794C42.2863 50.3146 36.9502 68.7764 35.6902 86.2006C35.0565 94.9632 35.4505 103.5 37.0292 110.616C37.683 113.563 38.5431 116.28 39.6259 118.674ZM44.8772 124.695C41.6758 121.603 39.4099 116.598 38.0358 110.405C36.4815 103.398 36.0869 94.9543 36.7161 86.2535C37.9762 68.8273 43.33 50.5175 51.5292 40.7441L51.6397 40.6123L51.6419 40.4453C51.7475 32.413 56.9589 26.2201 64.5833 22.3125C72.2143 18.4016 82.2103 16.8154 91.7038 18.014C97.1622 18.7031 102.434 20.3098 106.986 22.9085C108.808 25.1425 110.153 27.8385 110.876 31.0136C112.801 39.4697 110.337 51.423 100.497 67.2383L100.434 67.3402L100.426 67.4575C100.102 72.5592 100.154 77.4677 100.228 82.1668C100.234 82.5208 100.24 82.8737 100.246 83.2253C100.316 87.5461 100.383 91.682 100.172 95.6484C99.7165 104.208 97.9657 111.911 92.1966 118.801C79.0053 131.12 60.2726 131.716 44.8772 124.695ZM79.7899 130.109C68.1036 132.408 56.1046 131.843 48.0868 127.078C63.0296 132.569 80.3975 131.194 92.9377 119.465L92.9601 119.444L92.9797 119.421C98.9569 112.296 100.738 104.349 101.199 95.6838C101.412 91.6842 101.344 87.5171 101.274 83.2042C101.268 82.8501 101.262 82.495 101.257 82.1389C101.183 77.4762 101.132 72.6392 101.445 67.6194C111.293 51.7565 113.88 39.5757 111.882 30.7972C111.33 28.3747 110.431 26.2188 109.247 24.3227C111.687 25.9938 113.865 27.9899 115.683 30.3245C121.23 37.4485 123.483 47.8046 119.474 61.9027C118.07 65.8323 117.575 70.2112 117.421 74.7692C117.326 77.5827 117.361 80.4939 117.396 83.4184C117.418 85.2234 117.44 87.0334 117.431 88.8286C117.385 98.2988 116.493 107.507 110.491 114.662C104.473 121.835 92.4154 127.624 79.7899 130.109Z" stroke="black"/>
            <g filter="url(#filter0_d)">
                <path d="M100.94 67.4799C99.6487 87.8068 104.34 105.102 92.5783 119.122C79.0281 131.796 59.7325 132.235 44.0805 124.869C27.5844 112.614 33.0327 56.8753 48.9701 37.8778C62.5115 1.05196 140.418 4.02381 100.94 67.4799Z" fill="#0081DE"/>
                <path d="M100.497 67.2383L100.434 67.3402L100.426 67.4575C100.102 72.5592 100.154 77.4677 100.228 82.1668C100.234 82.5208 100.24 82.8736 100.246 83.2251C100.316 87.546 100.383 91.682 100.172 95.6484C99.7165 104.208 97.9657 111.911 92.1966 118.801C78.8577 131.257 59.8527 131.728 44.3616 124.456C40.4027 121.491 37.6953 115.863 36.1479 108.675C34.5996 101.484 34.2317 92.8194 34.8757 83.9285C35.5195 75.0396 37.1733 65.9431 39.6563 57.8912C42.1417 49.8313 45.4468 42.8542 49.3715 38.176L49.4266 38.1103L49.4556 38.0314C52.7875 28.9703 60.0837 22.3426 68.5729 18.4805C77.0676 14.6158 86.7154 13.54 94.6991 15.5424C102.664 17.5402 108.959 22.5915 110.876 31.0136C112.801 39.4697 110.337 51.423 100.497 67.2383Z" stroke="black"/>
            </g>
            <g filter="url(#filter1_d)">
                <line y1="-0.5" x2="36.787" y2="-0.5" transform="matrix(1.0248 -0.0935645 0.0994853 0.964918 47.4977 106.026)" stroke="#3B6787"/>
            </g>
            <g filter="url(#filter2_d)">
                <line y1="-0.5" x2="32.5461" y2="-0.5" transform="matrix(1.02562 -0.0835623 0.0888761 0.965976 48.882 92.2036)" stroke="#3B6787"/>
            </g>
            <g filter="url(#filter3_d)">
                <line y1="-0.5" x2="32.5461" y2="-0.5" transform="matrix(1.02562 -0.0835623 0.0888761 0.965976 52.8851 78.5801)" stroke="#3B6787"/>
            </g>
            <g filter="url(#filter4_d)">
                <line y1="-0.5" x2="32.5461" y2="-0.5" transform="matrix(1.02562 -0.0835623 0.0888761 0.965976 56.3763 65.012)" stroke="#3B6787"/>
            </g>
            <g filter="url(#filter5_d)">
                <line y1="-0.5" x2="62.3041" y2="-0.5" transform="matrix(0.273904 -0.939234 0.988353 0.255235 52.2688 113.064)" stroke="#3B6787"/>
            </g>
            <g filter="url(#filter6_d)">
                <line y1="-0.5" x2="62.3041" y2="-0.5" transform="matrix(0.273904 -0.939234 0.988353 0.255235 65.6624 116.463)" stroke="#3B6787"/>
            </g>
            <line y1="-2.5" x2="49.6247" y2="-2.5" transform="matrix(-0.304997 0.952353 -0.96206 -0.272837 50.6028 127.691)" stroke="black" strokeWidth="5"/>
            <line y1="-2.5" x2="55.0876" y2="-2.5" transform="matrix(0.399639 0.916673 -0.932893 0.360154 80.1855 130.28)" stroke="black" strokeWidth="5"/>
            <line y1="-2.5" x2="54.2678" y2="-2.5" transform="matrix(0.811352 0.584558 -0.631109 0.775694 99.449 68.4619)" stroke="black" strokeWidth="5"/>
            <path d="M77.7499 23.7553C74.9977 22.4497 72.9924 23.4317 71.5454 24.2919C72.0014 25.2816 73.3852 27.4848 75.2724 28.38C77.1596 29.2753 80.0927 29.5067 81.3746 28.9548C81.3315 27.1943 80.3436 24.9857 77.7499 23.7553Z" stroke="black"/>
            <mask id="path-15-inside-1" fill="white">
                <ellipse rx="1.3599" ry="1.31165" transform="matrix(0.903493 0.428603 -0.472216 0.881483 75.1156 25.3106)"/>
            </mask>
            <path d="M74.989 25.2505C75.0219 25.1891 75.0763 25.1544 75.1154 25.1423C75.1531 25.1306 75.1857 25.1356 75.2045 25.1446L73.7879 27.789C75.1683 28.4439 76.9423 27.9498 77.6995 26.5363L74.989 25.2505ZM75.2045 25.1446C75.2233 25.1535 75.247 25.1751 75.2595 25.2106C75.2723 25.2474 75.2751 25.3091 75.2421 25.3706L72.5317 24.0848C71.7745 25.4982 72.4074 27.1341 73.7879 27.789L75.2045 25.1446ZM75.2421 25.3706C75.2092 25.4321 75.1548 25.4668 75.1158 25.4789C75.078 25.4906 75.0454 25.4855 75.0266 25.4766L76.4433 22.8322C75.0628 22.1773 73.2888 22.6714 72.5317 24.0848L75.2421 25.3706ZM75.0266 25.4766C75.0078 25.4677 74.9841 25.446 74.9717 25.4105C74.9588 25.3738 74.956 25.312 74.989 25.2505L77.6995 26.5363C78.4566 25.1229 77.8238 23.487 76.4433 22.8322L75.0266 25.4766Z" fill="black" mask="url(#path-15-inside-1)"/>
            <path d="M94.261 29.5822C91.5088 28.2766 89.5035 29.2586 88.0565 30.1188C88.5125 31.1085 89.8963 33.3117 91.7835 34.2069C93.6707 35.1022 96.6039 35.3336 97.8857 34.7817C97.8426 33.0212 96.8547 30.8126 94.261 29.5822Z" stroke="black"/>
            <mask id="path-18-inside-2" fill="white">
                <ellipse rx="1.3599" ry="1.31165" transform="matrix(0.903493 0.428603 -0.472216 0.881483 91.627 31.1368)"/>
            </mask>
            <path d="M91.5005 31.0767C91.5334 31.0152 91.5878 30.9806 91.6268 30.9685C91.6646 30.9567 91.6972 30.9618 91.716 30.9707L90.2993 33.6152C91.6798 34.2701 93.4538 33.7759 94.2109 32.3625L91.5005 31.0767ZM91.716 30.9707C91.7348 30.9797 91.7585 31.0013 91.7709 31.0368C91.7838 31.0735 91.7866 31.1353 91.7536 31.1968L89.0431 29.911C88.286 31.3244 88.9188 32.9603 90.2993 33.6152L91.716 30.9707ZM91.7536 31.1968C91.7207 31.2583 91.6663 31.293 91.6272 31.3051C91.5895 31.3168 91.5569 31.3117 91.5381 31.3028L92.9547 28.6583C91.5743 28.0035 89.8003 28.4976 89.0431 29.911L91.7536 31.1968ZM91.5381 31.3028C91.5193 31.2939 91.4956 31.2722 91.4831 31.2367C91.4703 31.2 91.4675 31.1382 91.5005 31.0767L94.2109 32.3625C94.9681 30.9491 94.3352 29.3132 92.9547 28.6583L91.5381 31.3028Z" fill="black" mask="url(#path-18-inside-2)"/>
            <path d="M83.8279 31.49L78.1218 33.4941L76.2602 36.6692" stroke="black"/>
            <ellipse rx="4.3931" ry="4.93491" transform="matrix(0.875968 0.48237 -0.528077 0.849197 72.1924 43.3645)" fill="#0B0B0B"/>
            <defs>
                <filter id="filter0_d" x="30.0594" y="14.0698" width="85.9356" height="123.622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_d" x="43.3983" y="101.619" width="45.7988" height="12.4069" filterUnits="userSpaceOnUse"    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter2_d" x="44.7931" y="88.5181" width="41.4689" height="11.6856" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter3_d" x="48.7962" y="74.8945" width="41.4689" height="11.6856" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter4_d" x="52.2874" y="61.3264" width="41.4689" height="11.6856" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter5_d" x="47.2805" y="54.2913" width="26.0537" height="66.7733" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter6_d" x="60.6741" y="57.6897" width="26.0537" height="66.7733" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="127.645" y1="76.1452" x2="80.0138" y2="63.2444" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0064AD"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default BlueMitoFolk;

