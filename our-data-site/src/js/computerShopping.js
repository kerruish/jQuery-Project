//  Creates Highchart for Online Shopping  from ICA56
$(document).ready(function() {

    contextICA56 = {}; // global namespace variable
    contextICA56.onlinePurchaseFood = [];
    contextICA56.onlinePurchaseBooks = [];
    contextICA56.onlinePurchaseTickets = [];
    contextICA56.onlinePurchaseCloths = [];
    contextICA56.onlinePurchaseTravel = [];
    contextICA56.onlinePurchaseFilmMusic = [];
    contextICA56.onlinePurchaseYear = [];

    $.ajax({
        url: 'bin/ICA56.json',
        cache: false,
        dataType: 'json',
        context: contextICA56,
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["Purchases Made Online"] == "Food/groceries" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseFood.push(data[i].value);
                    contextICA56.onlinePurchaseYear.push(data[i].Year);
                }
                if (data[i]["Purchases Made Online"] == "Books/magazines/newspapers/e-learning material" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseBooks.push(data[i].value);
                }
                if (data[i]["Purchases Made Online"] == "Tickets for events" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseTickets.push(data[i].value);
                }
                if (data[i]["Purchases Made Online"] == "Clothes/sports goods" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseCloths.push(data[i].value);
                }
                if (data[i]["Purchases Made Online"] == "Other travel arrangements" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseTravel.push(data[i].value);
                }
                if (data[i]["Purchases Made Online"] == "Films/music" && data[i]["Age Group"] == "All ages") {
                    contextICA56.onlinePurchaseFilmMusic.push(data[i].value);
                }
            }
            drawChart();
        }
    });
});

function drawChart() {
    Highcharts.chart('computerShopping', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Online Shopping'
        },
        subtitle: {
            text: 'Percentage of the population\'s online purchases '
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 80,
            y: 20,
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
            pointFormat: '{series.name}: <b>{point.y:.0f}%</b>',
            style: {
                color: 'blue',
                fontSize: '16px',
            }
        },
        xAxis: {
            categories: contextICA56.onlinePurchaseYear,

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
            name: 'Food',
            color: '#D991AF',
            data: contextICA56.onlinePurchaseFood
        }, {
            name: 'Books',
            color: '#595594',
            data: contextICA56.onlinePurchaseBooks
        }, {
            name: 'Event Tickets',
            color: '#479030',
            data: contextICA56.onlinePurchaseTickets,
        }, {
            name: 'Cloths',
            color: '#D6680E',
            data: contextICA56.onlinePurchaseCloths,
        }, {
            name: 'Travel Arrangements',
            color: '#BBE728',
            data: contextICA56.onlinePurchaseTravel,
        }, {
            name: 'Film and Music',
            color: '#433090',
            data: contextICA56.onlinePurchaseFilmMusic,
        }]
    });
}
