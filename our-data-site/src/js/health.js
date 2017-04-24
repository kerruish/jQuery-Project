
$(document).ready(function () {
        $.getJSON("bin/Health.json", function (data) {
            var html = "",
            el = document.getElementById("Data");
            el1 = document.getElementById("Data1");
            el2 = document.getElementById("Data2");
            el3 = document.getElementById("Data3");
            $.each(data, function (key, val) {
                html += "<tr><td>" + val["Statistic"] + "</td><td>"+  val["Current Health Care Expenditure (Euro Million)"]+ "</td><td>"+  val["Current Health Care Expenditure (%)"] + "</td></tr>";
            });
            el.innerHTML = html;
            el1.innerHTML = html;
            el2.innerHTML = html;
            el3.innerHTML = html;
            $('table.highchart').highchartTable();
        });

});
