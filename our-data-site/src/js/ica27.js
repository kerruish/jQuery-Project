$(document).ready(function () {
        contextICA27 = {};  // global namespace variable
        contextICA27.householdsWithInternetComputerPercentage = [];
        contextICA27.householdsWithInternetComputerPercentageYear = [];

        $.ajax({
            url: 'bin/ICA27.json',
            cache: false,
            dataType: 'json',
            context: contextICA27,
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    if (   data[i].Statistic == "Households with Computer connected to the Internet (%)" && data[i]["Type of Internet Connection"] == "All internet connections")
                    {
                        contextICA27.householdsWithInternetComputerPercentage.push(data[i].value);
                        contextICA27.householdsWithInternetComputerPercentageYear.push(data[i]["Year"]);
                    }
                }
                $("#ica27").css({height : '600px'});
                var options = {
                    chart: {
                        renderTo: 'ica27',
                        type: 'bar'
                    },
                    title: {
                        text: 'Households with a computer'
                    },
                    xAxis: {
                        categories: contextICA27.householdsWithInternetComputerPercentageYear
                    },
                    series: [{
                        name: 'Households with a computer',
                        data: contextICA27.householdsWithInternetComputerPercentage,
                        pointWidth: 10
                    }]
                };
                var chart = new Highcharts.Chart(options);
            }
        });
    });
