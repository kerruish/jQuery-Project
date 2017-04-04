
$(document).ready(function () {
        $.getJSON("PEA01.json", function (data) {
            var html = "",
            el = document.getElementById("myData");
            $.each(data, function (key, val) {
                html += "<tr><td>" + val.Year + "</td><td>" + val["Both sexes"] + "</td></tr>";
            });
            el.innerHTML = html;
            $('table.highchart').highchartTable();
        });

});