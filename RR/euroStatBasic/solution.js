
$(document).ready(function () {
        $.getJSON("eurostat.json", function (data) {
            var html = "",
            el = document.getElementById("Data");
            $.each(data, function (key, val) {
                html += "<tr><td>" + val.time + "</td><td>"+  val.geo + "</td><td>"+  val.value + "</td></tr>";
            });
            el.innerHTML = html;
            $('table.highchart').highchartTable();
        });

});