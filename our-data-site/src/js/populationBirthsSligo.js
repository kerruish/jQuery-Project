$(document).ready(function() {

    $.getJSON("bin/VSA16.json", function(data) {

        var tbl = "<div id='col3'><table style='display:none' id='chart3' class='highchart' data-graph-type='line' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
        tbl += "<caption>Births in Sligo</caption><thead><tr><th>Years</th><th>Births Numbers</th></tr></thead><tbody>";

        for (i = 0; i < data.length; i++) {
            if (data[i]["County"] == "Sligo" && data[i]["Statistic"] == "All Births (Number)") {
                tbl += "<tr><td>" + data[i].Year + "</td><td>" + data[i].value + "</td></tr>";
            }
        }
        tbl += "</tbody></table></div>";
        $('#populationBirthsSligo').append(tbl);
        $('table#chart3').highchartTable();
    });
});
