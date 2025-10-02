// Store references to the chart views
let symbolMapView = null;
let heatmapView = null;

var vg_1 = "choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
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