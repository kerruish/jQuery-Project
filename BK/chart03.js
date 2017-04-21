$(document).ready(function () {

    localhost = {};  // global namespace variable
    localhost.populationBothNumber = [];
    localhost.populationMaleNumber = [];
    localhost.populationFemaleNumber = [];
    localhost.stateCounty = [];

    $.ajax({
        url: 'EP001.json',
        cache: false,
        dataType: 'json',
        context: localhost,
        success: function(data) {

            for (var i = 0; i < data.length; i++) {
                if (    data[i].Statistic == "Population 2016  (Number)"
                        && data[i].Sex == "Both sexes"
                        && data[i]["Province County or City"] !== "State"
                        && data[i]["Province County or City"] !== "Connacht"
                        && data[i]["Province County or City"] !== "Ulster (part of)"
                        && data[i]["Province County or City"] !== "Munster"
                        && data[i]["Province County or City"] !== "Leinster"
                        && data[i]["Province County or City"] !== "Dublin"
                ) {
                    localhost.populationBothNumber.push(data[i].value);
                    localhost.stateCounty.push(data[i]["Province County or City"]);
                }
                if (    data[i].Statistic == "Population 2016  (Number)"
                        && data[i].Sex == "Male"
                        && data[i]["Province County or City"] !== "State"
                        && data[i]["Province County or City"] !== "Connacht"
                        && data[i]["Province County or City"] !== "Ulster (part of)"
                        && data[i]["Province County or City"] !== "Munster"
                        && data[i]["Province County or City"] !== "Leinster"
                        && data[i]["Province County or City"] !== "Dublin"
                ) {
                    localhost.populationMaleNumber.push(data[i].value);
                }
                if (    data[i].Statistic == "Population 2016  (Number)"
                        && data[i].Sex == "Female"
                        && data[i]["Province County or City"] !== "State"
                        && data[i]["Province County or City"] !== "Connacht"
                        && data[i]["Province County or City"] !== "Ulster (part of)"
                        && data[i]["Province County or City"] !== "Munster"
                        && data[i]["Province County or City"] !== "Leinster"
                        && data[i]["Province County or City"] !== "Dublin"
                ) {
                    localhost.populationFemaleNumber.push(data[i].value);
                }
            }
            $("#container").css({height : '1200px'});
            $("#container").html(localhost.myHTML);


            var options = {
                chart: {
                    renderTo: 'container',
                    type: 'bar'
                },
                title: {
                    text: '2016 Population Statistics'
                },
                xAxis: {
                    categories: localhost.stateCounty
                },
                series: [{
                    name: 'Population Total',
                    data: localhost.populationBothNumber,
                    pointWidth: 10
                },{
                    name: 'Men',
                    data: localhost.populationMaleNumber,
                    pointWidth: 10
                },{
                    name: 'Women',
                    data: localhost.populationFemaleNumber,
                    pointWidth: 10
                }]
            };

            var chart = new Highcharts.Chart(options)
        }
    });


});
