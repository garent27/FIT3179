var vg_1 = "choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
}).catch(console.error);

var vg_2 = "bar_chart.vg.json";
vegaEmbed('#bar_chart', vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "symbol_map.vg.json";
vegaEmbed('#symbol_map', vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "heatmap.vg.json";
vegaEmbed('#heatmap', vg_4).then(function(result) {
}).catch(console.error);