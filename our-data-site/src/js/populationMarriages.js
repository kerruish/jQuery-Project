$(document).ready(function() {
    $.getJSON("bin/VSA49.json", function(data) {
        var tbl = "<div id='col2'><table style='display:none' id='chart2' class='highchart' data-graph-type='column'  data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
        tbl += "<caption>Marriages in 2016</caption><thead><tr><th>Age</th><th>Groom</th><th>Bride</th></tr></thead><tbody>";
        var sortedData = {};
        sortedData.NumbersGroom = [];
        sortedData.NumbersBride = [];
        sortedData.Ages = [];
        for (i = 0; i < data.length; i++) {
            if (data[i].Year == "2016") {
                if (data[i].Statistic == "Marriages per 1000 Males (%)") {
                    sortedData.NumbersGroom.push(data[i].value);
                    sortedData.Ages.push(data[i].Age);
                }
                if (data[i].Statistic == "Marriages per 1000 Females (%)") {
                    sortedData.NumbersBride.push(data[i].value);
                }
            }
        }
        for (var i = 0; i < sortedData.Ages.length; i++) {
            tbl += "<tr><td>" + sortedData.Ages[i] + "</td><td>" + sortedData.NumbersGroom[i] + "</td><td data-graph-item-color='#df0101'>" + sortedData.NumbersBride[i] + "</td></tr>";
        }
        tbl += "</tbody></table></div>";
        $('#populationMarriages').append(tbl);
        $('table#chart2').highchartTable();

    });
});
