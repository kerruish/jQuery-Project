
$(document).ready(function () {
        $.getJSON("PEA01.json", function (data) {
            var html = "",
            el = document.getElementById("myData");
            $.each(data, function (key, val) {
                html += "<tr><td>" + val.Year + "</td><td>" + val["Both sexes"] + "</td></tr>";
            });
            el.innerHTML = html;
            $('table.highchart')
                .bind('highchartTable.beforeRender', function(event, highChartConfig) {
                    highChartConfig.colors = ['#104C4C', '#88CCCC', '#228E8E', '#CCFFFF', '#00CCCC', '#3399CC'];
                })
                .highchartTable();
        });

});



