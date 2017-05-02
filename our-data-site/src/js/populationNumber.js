$(document).ready(function() {
    $.getJSON("bin/EP001.json", function(data) {

        var tbl = "<div id='col1'><table style='display:none'  id='chart1' class='highchart' data-graph-type='column' data-graph-container-before='1' data-graph-height='00' data-graph-width='600' >";
        tbl += "<caption>Population in Ireland</caption><thead><tr><th>Region</th><th>Population</th></tr></thead><tbody>";

        for (i = 0; i < data.length; i++) {
            if (data[i]["Census Year"] == "2016" && data[i]["Sex"] == "Both sexes" && data[i]["Statistic"] == "Population 2016  (Number)" && data[i].value < 150000) {
                tbl += "<tr><td>" + data[i]["Province County or City"] + "</td><td>" + data[i].value + "</td></tr>";
            }
        }
        tbl += "</tbody></table></div>";
        //$('.row').append(tbl);
        $('#populationNumber').append(tbl);
        $('table#chart1').highchartTable();
    });
});
