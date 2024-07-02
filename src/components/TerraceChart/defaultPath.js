/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
const defaultPath = [
    {
        path: '<path xmlns="http://www.w3.org/2000/svg" d="M63.8171889,65.6153792 C44.6416907,71.0005775 25.6482308,85.1182266 22.3318225,109.230891 C16.2996345,140.031513 -16.3623335,150.360176 10.3836064,200.831596 C24.946773,224.974795 64.6714467,231.041464 74.9954139,267.846453 C80.6505412,288.007008 94.2056674,277.349488 101.473231,286.501129 C121.667044,311.930082 158.607855,331.39045 187.142031,309.518667 C215.845382,287.516567 227.910928,300.446821 248.941896,292.757764 C267.651016,285.917591 272.179439,275.403051 273.96886,246.499966 C272.839317,221.098728 286.684758,217.384037 289.833256,215.554431 C312.634439,204.675896 318.02536,181.077172 328.886195,170.186151 C345.162919,153.947375 350.851121,133.852999 326.828155,118.870796 C323.891442,117.03928 322.962624,115.560876 320.153666,113.787273 C281.422833,97.3048596 275.822118,75.4534679 268.266806,62.8671877 C256.256978,42.8601963 265.599874,57.7429771 222.966403,37.4153185 C211.671398,32.219598 194.28542,11.2222559 171.962216,3.13674881 C136.164063,-8.35473213 120.530147,14.3729197 109.291271,28.6728735 C86.0345198,53.0911314 82.9926871,60.2301808 63.8171889,65.6153792 Z" id="Stroke-5" fill-opacity="0.1" fill="url(#TerraceChart-linearGradient-1)"/>'
    },
    {
        path: '<path xmlns="http://www.w3.org/2000/svg" d="M62.6954865,78.6870339 C45.4488844,84.5719785 28.7646119,98.4228385 26.8337849,120.611443 C22.7292544,149.044889 -6.59473245,160.124524 20.0920694,204.870115 C34.4715329,226.185145 79.0208221,231.999509 90.108086,265.091918 C96.1813219,283.218843 108.199932,271.185011 115.244366,279.17652 C134.818188,301.381902 169.396974,317.291992 194.431952,295.878478 C219.615328,274.33742 229.253656,290.903479 247.310155,280.409324 C262.941312,271.324739 262.225158,266.668035 266.372003,236.556582 C270.671892,214.402033 286.50606,208.250925 289.294943,206.421256 C309.599433,195.336605 313.608432,175.846313 323.020934,165.352273 C337.13087,149.701223 336.887554,130.498755 318.37191,116.597037 C315.882873,114.728244 314.321809,114.109112 311.358886,113.033208 C275.282467,99.9330488 269.98028,78.4500161 262.51751,67.3362594 C250.654784,49.6699728 252.050409,62.2141226 212.239689,45.7989773 C201.701134,41.6233537 184.348781,17.800409 163.619683,11.5416523 C130.444807,2.85170502 113.58317,33.3006221 102.438714,43.0061803 C78.0734945,67.0382687 79.9420886,72.8020894 62.6954865,78.6870339 Z" id="Stroke-4" fill-opacity="0.1" fill="url(#TerraceChart-linearGradient-2)"/>'
    },
    {
        path: '<path xmlns="http://www.w3.org/2000/svg" d="M73.6069028,91.684608 C58.2485569,97.5496983 43.6342531,110.561763 42.5568789,130.585117 C39.7079032,156.29793 13.6264901,167.235945 38.9974216,206.601942 C52.5845143,225.299119 92.8830161,229.053395 103.856079,258.453787 C109.866759,274.558348 120.145545,261.607975 126.728719,268.563216 C145.020871,287.889204 176.64011,301.055246 198.550281,280.963661 C220.590309,260.752429 227.165419,276.152229 243.115777,266.114169 C256.923689,257.424417 261.003354,254.114112 263.840401,226.890475 C267.052582,206.819267 281.130825,200.761548 283.58818,199.023303 C301.545672,188.379596 306.507371,169.275328 314.672168,159.52375 C326.914108,144.977644 324.227942,124.410052 303.507161,113.939927 C300.974126,112.659995 298.638085,111.058459 295.937323,110.18881 C263.052978,99.6000108 255.355358,82.9900549 248.302283,73.2401074 C237.090803,57.7417145 240.878318,69.6833073 204.531665,56.2362871 C194.915168,52.8293223 178.575632,31.9746853 159.71849,27.0314905 C129.579056,20.3136935 115.299985,48.2621371 105.551719,57.3618292 C84.3228838,79.7867199 88.9652487,85.8195177 73.6069028,91.684608 Z" id="Stroke-3" fill-opacity="0.1" fill="url(#TerraceChart-linearGradient-3)"/>'
    },
    {
        path: '<path xmlns="http://www.w3.org/2000/svg" d="M84.8843469,101.093769 C71.117805,106.648383 58.1292718,118.648362 57.4567255,136.75858 C55.2711284,160.039002 31.9075224,170.355454 55.3821861,205.503543 C67.9181071,222.17186 104.326065,224.894599 114.663957,251.277349 C120.326713,265.728945 129.028336,252.309923 135.07075,258.485041 C151.860337,275.643361 180.579732,287.014393 200.043779,268.49643 C219.623178,249.8682 223.520472,264.763153 237.758668,255.428171 C250.084395,247.34706 252.69144,244.738894 254.843692,220.093549 C257.441256,201.904626 270.050184,196.197227 272.240892,194.585793 C288.280598,184.670228 291.451287,166.5215 298.670689,157.574715 C309.496267,144.228047 306.765723,125.688601 287.917736,116.572438 C285.613644,115.458023 283.482444,114.049746 281.033184,113.308834 C251.211107,104.287515 244.01907,89.4072884 237.510997,80.7147896 C227.165849,66.8973037 232.804035,77.9780971 199.816009,66.431721 C191.090383,63.5130793 176.039331,44.9410929 158.955085,40.7878884 C131.66696,35.2186548 119.2041,60.7089931 110.546563,69.0930665 C91.732003,89.7079945 98.6508887,95.5391549 84.8843469,101.093769 Z" id="Stroke-2" fill-opacity="0.1" fill="url(#TerraceChart-linearGradient-4)"/>'
    },
    {
        path: '<path xmlns="http://www.w3.org/2000/svg" d="M98.377136,109.092962 C86.1663099,114.011066 74.6455721,124.635954 74.0490282,140.670901 C72.1104189,161.283592 51.3870641,170.417869 72.2089263,201.538297 C83.3282003,216.296572 115.621804,218.707309 124.791442,242.066829 C129.814266,254.8624 136.81132,241.253779 142.170899,246.721283 C157.063145,261.913411 182.537046,271.981423 199.80152,255.585455 C217.168309,239.091856 218.178756,254.007278 230.807936,245.742003 C241.740769,238.586917 242.939555,237.009681 244.848588,215.188475 C247.152609,199.083842 258.336639,194.030461 260.279783,192.603683 C274.506889,183.824354 275.982386,167.023253 282.385946,159.10169 C291.988157,147.284433 289.566184,130.869443 272.848152,122.797912 C270.804438,121.811199 268.914078,120.564299 266.741602,119.908288 C240.289629,111.920733 233.910342,98.7456491 228.137728,91.049234 C218.961653,78.81511 226.413211,88.6261422 197.153063,78.402879 C189.413494,75.8186879 176.063317,59.3748872 160.90971,55.6976033 C136.705334,50.7665548 125.650865,73.3359252 117.971691,80.7592578 C101.283308,99.0118969 110.587962,104.174858 98.377136,109.092962 Z" id="Stroke-1" fill-opacity="0.1" fill="url(#TerraceChart-linearGradient-5)"/>'
    },
];

export default defaultPath;