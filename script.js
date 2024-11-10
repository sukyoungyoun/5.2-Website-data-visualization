const data = {
    labels: [
        1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899,
        1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919,
        1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
        1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
        1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
        1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023
    ],
    datasets: [
        {
            label: 'No Smoothing',
            data: [
                -0.18, -0.09, -0.11, -0.18, -0.28, -0.33, -0.31, -0.36, -0.17, -0.10, -0.35, -0.22, -0.27, -0.31, -0.30, -0.23, -0.11,
                -0.11, -0.28, -0.18, -0.08, -0.15, -0.28, -0.37, -0.47, -0.27, -0.23, -0.39, -0.43, -0.49, -0.44, -0.44, -0.36, -0.34,
                -0.15, -0.14, -0.36, -0.46, -0.30, -0.28, -0.27, -0.19, -0.28, -0.26, -0.27, -0.22, -0.11, -0.22, -0.22, -0.20, -0.36,
                -0.15, -0.09, -0.15, -0.28, -0.12, -0.19, -0.14, -0.03, 0.00, -0.02, 0.13, 0.19, 0.07, 0.09, 0.21, 0.09, -0.07, -0.03,
                -0.11, -0.11, -0.17, -0.07, 0.01, 0.08, -0.13, -0.14, -0.19, 0.05, 0.06, 0.03, -0.03, 0.06, 0.03, 0.05, -0.20, -0.11,
                -0.06, -0.02, -0.08, 0.05, 0.03, -0.08, 0.01, 0.16, -0.07, -0.01, -0.10, 0.18, 0.07, 0.16, 0.26, 0.32, 0.14, 0.31, 0.16,
                0.12, 0.18, 0.32, 0.39, 0.27, 0.45, 0.40, 0.22, 0.23, 0.31, 0.45, 0.33, 0.47, 0.61, 0.38, 0.39, 0.54, 0.63, 0.62, 0.53,
                0.68, 0.64, 0.66, 0.54, 0.66, 0.73, 0.61, 0.65, 0.68, 0.75, 0.90, 1.02, 0.92, 0.85, 0.98, 1.01, 0.85, 0.89, 1.17
            ]
        },
        {
            label: 'Lowess(5)',
            data: [
                -0.10, -0.14, -0.17, -0.21, -0.24, -0.26, -0.27, -0.27, -0.26, -0.25, -0.25, -0.25, -0.26, -0.26, -0.24, -0.22, -0.21,
                -0.18, -0.17, -0.17, -0.20, -0.23, -0.26, -0.28, -0.34, -0.36, -0.38, -0.40, -0.41, -0.41, -0.41, -0.39, -0.35, -0.32,
                -0.31, -0.30, -0.30, -0.30, -0.29, -0.28, -0.26, -0.25, -0.24, -0.22, -0.22, -0.21, -0.20, -0.19, -0.18, -0.17, -0.16,
                -0.15, -0.13, -0.10, -0.06, -0.01, 0.03, 0.07, 0.13, 0.18, 0.22, 0.24, 0.28, 0.31, 0.33, 0.35, 0.37, 0.39, 0.40, 0.42,
                0.44, 0.46, 0.47, 0.49, 0.50, 0.52, 0.53, 0.55, 0.56, 0.57, 0.58, 0.59, 0.60, 0.61, 0.62, 0.63, 0.63, 0.64, 0.65, 0.66,
                0.67, 0.68, 0.69, 0.69, 0.69, 0.70, 0.71, 0.71, 0.72, 0.73, 0.73, 0.73, 0.74, 0.74, 0.75, 0.75, 0.75, 0.75, 0.75
            ]
        }
    ]
};

// Set up the margins and dimensions
const margin = { top: 20, right: 30, bottom: 40, left: 40 };
const width = 900 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Set up scales
const x = d3.scaleLinear()
    .domain(d3.extent(data.labels))  // The x-axis will represent the years
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([d3.min(data.datasets[0].data.concat(data.datasets[1].data)), d3.max(data.datasets[0].data.concat(data.datasets[1].data))])
    .range([height, 0]);

// Create x-axis and y-axis
svg.append("g")
    .selectAll(".x-axis")
    .data([data.labels])
    .enter()
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));

// Create line generator functions
const lineNoSmoothing = d3.line()
    .x((d, i) => x(data.labels[i]))  // Use the labels for x position
    .y(d => y(d));  // Use the data values for y position

const lineLowess = d3.line()
    .x((d, i) => x(data.labels[i]))
    .y(d => y(d));

// Create the lines
svg.append("path")
    .datum(data.datasets[0].data)
    .attr("class", "line no-smoothing")
    .attr("d", lineNoSmoothing)
    .attr("fill", "none")
    .attr("stroke", "#FF5733")
    .attr("stroke-width", 2);

svg.append("path")
    .datum(data.datasets[1].data)
    .attr("class", "line lowess")
    .attr("d", lineLowess)
    .attr("fill", "none")
    .attr("stroke", "#33FF57")
    .attr("stroke-width", 2);

// Add x-axis label
svg.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 5})`)
    .style("text-anchor", "middle")
    .text("Year");

// Add y-axis label
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text("Temperature Anomaly (°C)");

// Add title for the graph
svg.append("text")
    .attr("x", width / 2)
    .attr("y", -margin.top / 2)
    .style("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Global Temperature Trends: 1880 - 2023");

// Add legends for each line
svg.append("rect")
    .attr("x", width - 180)
    .attr("y", 10)
    .attr("width", 20)
    .attr("height", 10)
    .style("fill", "#FF5733");
svg.append("text")
    .attr("x", width - 150)
    .attr("y", 20)
    .text("No Smoothing")
    .style("font-size", "12px")
    .style("alignment-baseline", "middle");

svg.append("rect")
    .attr("x", width - 180)
    .attr("y", 30)
    .attr("width", 20)
    .attr("height", 10)
    .style("fill", "#33FF57");
svg.append("text")
    .attr("x", width - 150)
    .attr("y", 40)
    .text("Lowess(5)")
    .style("font-size", "12px")
    .style("alignment-baseline", "middle");
