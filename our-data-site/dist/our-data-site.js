$(document).ready(function () {
    contextCPA01 = {};  // global namespace variable
    contextCPA01.changePercentageAll = [];
    contextCPA01.changePercentageABT = [];
    contextCPA01.changePercentageCF = [];
    contextCPA01.changePercentageHWEGF = [];
    contextCPA01.changePercentageFH = [];
    contextCPA01.changePercentageH = [];
    contextCPA01.changePercentageT = [];
    contextCPA01.changePercentageC = [];
    contextCPA01.changePercentageRC = [];
    contextCPA01.changePercentageEd = [];
    contextCPA01.changePercentageRH = [];
    contextCPA01.changePercentageMiscGS = [];

    contextCPA01.changeYear = [];

    $.ajax({
        url: 'bin/CPA01.json',
        cache: false,
        dataType: 'json',
        context: contextCPA01,
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "All items"
                ) {
                    contextCPA01.changePercentageAll.push(data[i].value);
                    contextCPA01.changeYear.push(data[i].Year);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Alcoholic beverages and tobacco"
                ) {
                    contextCPA01.changePercentageABT.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Clothing and footwear"
                ) {
                    contextCPA01.changePercentageCF.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Housing, water, electricity, gas and other fuels"
                ) {
                    contextCPA01.changePercentageHWEGF.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Furnishings, household equipment and routine household maintenance"
                ) {
                    contextCPA01.changePercentageFH.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Health"
                ) {
                    contextCPA01.changePercentageH.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Transport"
                ) {
                    contextCPA01.changePercentageT.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Communications"
                ) {
                    contextCPA01.changePercentageC.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Recreation and culture"
                ) {
                    contextCPA01.changePercentageRC.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Education"
                ) {
                    contextCPA01.changePercentageEd.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Restaurants and hotels"
                ) {
                    contextCPA01.changePercentageRH.push(data[i].value);
                }
                if (   data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Miscellaneous goods and services"
                ) {
                    contextCPA01.changePercentageMiscGS.push(data[i].value);
                }

            }
            $("#cpa01").css({height : '800px'});
            var options = {
                chart: {
                    renderTo: 'cpa01',
                    type: 'line'
                },
                title: {
                    text: 'Consumer Price Index'
                },
                xAxis: {
                    categories: contextCPA01.changeYear
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: 0,
                    y: 0,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                series: [{
                    name: 'CPI Change % - All Items',
                    lineWidth: 5,
                    dashStyle: 'shortdash',
                    data: contextCPA01.changePercentageAll
                },{
                    name: 'CPI Change % - Alcohol, beverages and tobacco',
                    data: contextCPA01.changePercentageABT,
                    visible: false
                },{
                    name: 'CPI Change % - Clothing and Footware',
                    data: contextCPA01.changePercentageCF,
                    visible: false
                },{
                    name: 'CPI Change % - Housing, water, electricity, gas and other fuels',
                    data: contextCPA01.changePercentageHWEGF,
                    visible: false
                },{
                    name: 'CPI Change % - Furnishings, household equipment and routine household maintenance',
                    data: contextCPA01.changePercentageFH,
                    visible: false
                },{
                    name: 'CPI Change % - Health',
                    data: contextCPA01.changePercentageH,
                    visible: false
                },{
                    name: 'CPI Change % - Transport',
                    data: contextCPA01.changePercentageT,
                    visible: false
                },{
                    name: 'CPI Change % - Communications',
                    data: contextCPA01.changePercentageC,
                    visible: false
                },{
                    name: 'CPI Change % - Recreation and culture',
                    data: contextCPA01.changePercentageRC,
                    visible: false
                },{
                    name: 'CPI Change % - Education',
                    data: contextCPA01.changePercentageEd,
                    visible: false
                },{
                    name: 'CPI Change % - Restaurants and hotels',
                    data: contextCPA01.changePercentageRH,
                    visible: false
                },{
                    name: 'CPI Change % - Miscellaneous goods and services',
                    data: contextCPA01.changePercentageMiscGS,
                    visible: false
                }]
            };
            var chart = new Highcharts.Chart(options);
        }
    });
});
;$(document).ready(function () {
        contextEP001 = {};  // global namespace variable
        contextEP001.populationBothNumber = [];
        contextEP001.populationMaleNumber = [];
        contextEP001.populationFemaleNumber = [];
        contextEP001.stateCounty = [];

        $.ajax({
            url: 'bin/EP001.json',
            cache: false,
            dataType: 'json',
            context: contextEP001,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    if (   data[i].Statistic == "Population 2016  (Number)" && data[i].Sex == "Both sexes" && data[i]["Province County or City"] !== "State" && data[i]["Province County or City"] !== "Connacht" && data[i]["Province County or City"] !== "Ulster (part of)" && data[i]["Province County or City"] !== "Munster" && data[i]["Province County or City"] !== "Leinster"&& data[i]["Province County or City"] !== "Dublin"
                    ) {
                        contextEP001.populationBothNumber.push(data[i].value);
                        contextEP001.stateCounty.push(data[i]["Province County or City"]);
                    }
                    if (   data[i].Statistic == "Population 2016  (Number)" && data[i].Sex == "Male"&& data[i]["Province County or City"] !== "State" && data[i]["Province County or City"] !== "Connacht" && data[i]["Province County or City"] !== "Ulster (part of)" && data[i]["Province County or City"] !== "Munster" && data[i]["Province County or City"] !== "Leinster" && data[i]["Province County or City"] !== "Dublin"
                    ) {
                        contextEP001.populationMaleNumber.push(data[i].value);
                    }
                    if (   data[i].Statistic == "Population 2016  (Number)" && data[i].Sex == "Female" && data[i]["Province County or City"] !== "State" && data[i]["Province County or City"] !== "Connacht" && data[i]["Province County or City"] !== "Ulster (part of)" && data[i]["Province County or City"] !== "Munster" && data[i]["Province County or City"] !== "Leinster"&& data[i]["Province County or City"] !== "Dublin"
                    ) {
                        contextEP001.populationFemaleNumber.push(data[i].value);
                    }
                }
                $("#ep001").css({height : '1200px'});
                var options = {
                    chart: {
                        renderTo: 'ep001',
                        type: 'bar'
                    },
                    title: {
                        text: '2016 Population Statistics'
                    },
                    xAxis: {
                        categories: contextEP001.stateCounty
                    },
                    series: [{
                        name: 'Population Total',
                        data: contextEP001.populationBothNumber,
                        pointWidth: 10
                    },{
                        name: 'Men',
                        data: contextEP001.populationMaleNumber,
                        pointWidth: 10
                    },{
                        name: 'Women',
                        data: contextEP001.populationFemaleNumber,
                        pointWidth: 10
                    }]
                };
                var chart = new Highcharts.Chart(options);
            }
        });
    });
;
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
;$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");


  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
});
