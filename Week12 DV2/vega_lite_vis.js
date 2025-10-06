// Store references to the chart views
let symbolMapView = null;
let heatmapView = null;
let choroplethView = null;
let top5FastestView = null;

var vg_1 = "choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    choroplethView = result.view;
    
    // Listen for clicked signal to update selected country
    choroplethView.addSignalListener('clicked', function(name, value) {
        if (value && value.datum && value.datum.properties && value.datum.properties.NAME) {
            const countryName = value.datum.properties.NAME;
            
            const selectedCountryDiv = document.getElementById('selected-country');
            selectedCountryDiv.textContent = `Selected Country = "${countryName}"`;
            
            // Update the top 5 fastest chart with the selected country
            if (top5FastestView) {
                // Map country names to match the dataset
                const countryMapping = {
                    "United States of America": "USA",
                    "United Kingdom": "United Kingdom",
                    "South Korea": "Republic of Korea",
                    "Russia": "Russia",
                    // Add more mappings as needed based on the data
                };
                
                const mappedCountry = countryMapping[countryName] || countryName;
                top5FastestView.signal('country_selection', mappedCountry);
                top5FastestView.runAsync();
            }
        }
    });
}).catch(console.error);

var vg_2 = "bar_chart.vg.json";
vegaEmbed('#bar_chart', vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "symbol_map.vg.json";
vegaEmbed('#symbol_map', vg_3).then(function(result) {
    symbolMapView = result.view;
}).catch(console.error);

var vg_4 = "heatmap_new.vg.json";
vegaEmbed('#heatmap', vg_4).then(function(result) {
    heatmapView = result.view;
    
    // Add click listener to the heatmap
    heatmapView.addEventListener('click', function(event, item) {
        if (item && item.datum) {
            const year = item.datum.year;
            const continent = item.datum.continent;
            
            if (symbolMapView && year && continent) {
                // Update the symbol map parameters
                symbolMapView.signal('Year_selection', year);
                symbolMapView.signal('center_to', continent);
                symbolMapView.runAsync();
            }
        }
    });
}).catch(console.error);

var vg_5 = "violin_plot.vg.json";
vegaEmbed('#violin_plot', vg_5).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_6 = "top5_fastest_bar.vg.json";
vegaEmbed('#top5_fastest', vg_6).then(function(result) {
    top5FastestView = result.view;
}).catch(console.error);

var vg_7 = "treemap.vg.json";
vegaEmbed('#treemap', vg_7).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_8 = "stacked_area_chart.vg.json";
vegaEmbed('#stacked_area', vg_8).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_9 = "cumulative_area_chart.vg.json";
vegaEmbed('#cumulative_area', vg_9).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_10 = "sunburst_new.vg.json";
vegaEmbed('#sunburst', vg_10).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

// Add reset button functionality
document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('reset-country');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const selectedCountryDiv = document.getElementById('selected-country');
            selectedCountryDiv.textContent = 'Selected Country = "World"';
            
            if (top5FastestView) {
                top5FastestView.signal('country_selection', 'World');
                top5FastestView.runAsync();
            }
        });
    }
});
