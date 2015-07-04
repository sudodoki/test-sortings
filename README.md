# Sort comparison
Something to prove @marshall-lee point regarding sortings & inline/imperative vs copy/FP styles

### Table with aggregated running time
Source is [this Excel file](Evaluation_length.xls).  
Ran this on Mac Pro, 2.2 GHz Intel Core i7, 16 GB 1600 MHz DDR3.

|Name                |IO 2.3.1, ms | Node 0.12.2, ms|
|:-------------------|--------:|-----------:|
|builtin10           | 1       |   1        |
|inline10            | 0       |   0        |
|naїve-fp10          | 0.4     |   0.2      |
|mori-naїve10        | 2.2     |   2.6      |
|mori-built-in10     | 0.8     |   0.4      |
|builtin100          | 0       |   0        |
|inline100           | 0.8     |   0.6      |
|naїve-fp100         | 1.8     |   2.6      |
|mori-naїve100       | 6       |   5.8      |
|mori-built-in100    | 1.2     |   1.8      |
|builtin1000         | 1       |   1.2      |
|inline1000          | 0       |   0.4      |
|naїve-fp1000        | 21.6    |   20       |
|mori-naїve1000      | 20.8    |   25.6     |
|mori-built-in1000   | 3       |   1.2      |
|builtin10000        | 4       |   3.4      |
|inline10000         | 1       |   1        |
|naїve-fp10000       | 252.8   |   258.2    |
|mori-naїve10000     | 144.4   |   140.6    |
|mori-built-in10000  | 28      |   11.2     |
|builtin100000       | 43.8    |   39.8     |
|inline100000        | 12.8    |   11.8     |
|naїve-fp100000      | 3055.8  |   3241.6   |
|mori-naїve100000    | 1794.8  |   1825.2   |
|mori-built-in100000 | 293.6   |   93       |
|builtin100000       | 37.6    |   40.8     |
|inline100000        | 13.6    |   12.6     |
|naїve-fp100000      | 3139.4  |   3207.8   |
|mori-naїve100000    | 1854.4  |   1916.8   |
|mori-built-in100000 | 299.2   |   84.8     |

### *Disclaimer
![Me at this moment](sudodoki.github.io/sudodoki-public-assets/random/idontknowwhatiamdoing.jpg)