function drawMap() {
    var options = {region: 'US', resolution: 'provinces'};
    var population = "population";
    $.ajax({
        url: "js/states.json",
        dataType: "JSON"
    }).done(function(data) {
        var Array = [["State",population]];
        $.each(data.states, function() {
            var stateitem = [this.abbrev, this[population]];
            Array.push(stateitem);
        });
        var Data = google.visualization.arrayToDataTable(Array);
        var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
        chart.draw(Data, options);
    });
}
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawMap);
$(window).resize(function(){
    drawMap();
});