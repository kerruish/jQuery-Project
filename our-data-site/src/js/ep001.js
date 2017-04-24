$(document).ready(function () {
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
                $("#ep001").css({height : '600px'});
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
