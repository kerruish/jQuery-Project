console.log("LOADED: computerDailyUse");
$(document).ready(function() {

    contextICA18 = {}; // global namespace variable
    contextICA18.computerUsedEveryDayBoth = [];
    contextICA18.computerUsedEveryDayMale = [];
    contextICA18.computerUsedEveryDayFemale = [];
    contextICA18.computerUsedEveryDayYear = [];

    $.ajax({
        url: 'bin/ICA18.json',
        cache: false,
        dataType: 'json',
        context: contextICA18,
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["Frequency of Use"] == "Every day or almost every day" && data[i]["Sex"] == "Both sexes" && data[i].value != null) {
                    contextICA18.computerUsedEveryDayBoth.push(data[i].value);
                    contextICA18.computerUsedEveryDayYear.push(data[i].Year);
                }
                if (data[i]["Frequency of Use"] == "Every day or almost every day" && data[i]["Sex"] == "Male" && data[i].value != null) {
                    contextICA18.computerUsedEveryDayMale.push(data[i].value);

                }
                if (data[i]["Frequency of Use"] == "Every day or almost every day" && data[i]["Sex"] == "Female" && data[i].value != null) {
                    contextICA18.computerUsedEveryDayFemale.push(data[i].value);
                }
            }
            fixBadData();
            drawChart();
        }
    });

    //  Correct bad CSO data
    //  Removing duplicate 2007 entry
    function fixBadData() {
        delete contextICA18.computerUsedEveryDayYear[0];
        delete contextICA18.computerUsedEveryDayBoth[0];
        delete contextICA18.computerUsedEveryDayMale[0];
        delete contextICA18.computerUsedEveryDayFemale[0];

        contextICA18.computerUsedEveryDayYear = $.grep(contextICA18.computerUsedEveryDayYear, function(n) {
            return n == 0 || n;
        });
        contextICA18.computerUsedEveryDayBoth = $.grep(contextICA18.computerUsedEveryDayBoth, function(n) {
            return n == 0 || n;
        });
        contextICA18.computerUsedEveryDayMale = $.grep(contextICA18.computerUsedEveryDayMale, function(n) {
            return n == 0 || n;
        });
        contextICA18.computerUsedEveryDayFemale = $.grep(contextICA18.computerUsedEveryDayFemale, function(n) {
            return n == 0 || n;
        });
    }

    function drawChart() {
        Highcharts.chart('computerDailyUse', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'The percentage of people using a computer every day'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            credits: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            xAxis: {
                categories: contextICA18.computerUsedEveryDayYear,

            },
            yAxis: {
                title: {
                    text: 'Percentage of the population'
                }
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'Female',
                color: '#D991AF',
                data: contextICA18.computerUsedEveryDayFemale
            }, {
                name: 'Male',
                color: '#595594',
                data: contextICA18.computerUsedEveryDayMale
            }, {
                name: 'Both',
                color: '#479030',
                data: contextICA18.computerUsedEveryDayBoth,
                visible: false
            }]
        });
    }
});
