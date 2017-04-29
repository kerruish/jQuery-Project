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
;console.log("LOADED: computerOwnership");
// Global colour style variables
var pieColourBackground = 'white';
var pieColourPrimary = '#9C27B0';
var pieColourSeconary = '#212121';
var pieColourText = 'grey';
var buttonClass = 'btn btn-default ';
var chart = null;

$(document).ready(function() {

    contextICA27 = {}; // global namespace variable
    contextICA27.householdsWithInternetComputerPercentage = [];
    contextICA27.householdsWithInternetComputerPercentageYear = [];
    contextICA27.householdsWithInternetNoComputerPercentage = [];
    $.ajax({
        url: 'bin/ICA27.json',
        cache: false,
        dataType: 'json',
        context: contextICA27,
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Statistic == "Households with Computer connected to the Internet (%)" && data[i]["Type of Internet Connection"] == "All internet connections" && data[i].value != null) {
                    contextICA27.householdsWithInternetComputerPercentage.push(data[i].value);
                    contextICA27.householdsWithInternetComputerPercentageYear.push(data[i]["Year"]);
                }
            }
            for (var j = 0; j < contextICA27.householdsWithInternetComputerPercentage.length; j++) {
                contextICA27.householdsWithInternetNoComputerPercentage.push(100 - contextICA27.householdsWithInternetComputerPercentage[j]);
            }
            Highcharts.chart('computerOwnership', {
                title: {
                    text: 'Households with a Computer'
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                xAxis: {
                    categories: contextICA27.householdsWithInternetComputerPercentageYear
                },

                series: [{
                    type: 'column',
                    name: 'Computer',
                    data: contextICA27.householdsWithInternetComputerPercentage,
                    color: 'rgb(99, 207, 61)'
                }, {
                    type: 'column',
                    name: 'No Computer',
                    data: contextICA27.householdsWithInternetNoComputerPercentage,
                    color: 'rgb(134, 9, 9)'
                }, {
                    type: 'pie',
                    name: 'Current Ownership',
                    data: [{
                        name: 'Current - Computer',
                        y: contextICA27.householdsWithInternetComputerPercentage[9],
                        color: 'rgb(99, 207, 61)'
                    }, {
                        name: 'Current - No Computer',
                        y: contextICA27.householdsWithInternetNoComputerPercentage[9],
                        color: 'rgb(134, 9, 9)'
                    }],
                    center: ['10%', 20],
                    size: 80,
                    showInLegend: false,
                    dataLabels: {
                        enabled: false
                    }
                }]
            });

        }
    });




});









//
//
//
// function drawChart() {
//     var options = {
//         chart: {
//             plotBackgroundColor: pieColourBackground,
//             plotBorderWidth: null,
//             plotShadow: true,
//             renderTo: 'computerOwnership',
//             type: 'pie',
//             options3d: {
//                 enabled: true,
//                 alpha: 45,
//                 beta: 0
//             }
//         },
//         title: {
//             text: 'Computer Ownership',
//             style: {
//                 color: pieColourText,
//                 fontSize: '25px'
//             }
//         },
//         subtitle: {
//             text: 'Who have one and who don\'t.'
//         },
//         credits: {
//             enabled: false
//         },
//         exporting: {
//             enabled: false
//         },
//         tooltip: {
//             enabled: false
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 innerSize: 100,
//                 depth: 15,
//                 dataLabels: {
//                     enabled: false,
//                     format: '{point.name}',
//                     style: {
//                         color: pieColourText,
//                     }
//                 }
//             }
//         },
//         series: [{
//             name: 'Computers',
//             colorByPoint: true,
//             data: [{
//                 name: 'With a computer',
//                 color: pieColourPrimary,
//                 y: contextICA27.householdsWithInternetComputerPercentage[9]
//             }, {
//                 name: 'No Computer',
//                 color: pieColourSeconary,
//                 y: 100 - contextICA27.householdsWithInternetComputerPercentage[9],
//                 sliced: true,
//                 selected: true
//             }]
//         }]
//     };
//     chart = new Highcharts.Chart(options);
//
//
//     console.log("Buttons");
//     for (i = 1; i <= 10; i++) {
//         console.log("Buttons");
//
//         newButton = $('<button/>', {
//             text: i, //set text 1 to 10
//             id: 'btn_' + i,
//             click: function() {
//                 alert('hi');
//             }
//         });
//
//         $("#computerOwnership").append(newButton);
//     }
// $("#computerOwnership").append($('<div/>', {
//     id: 'computerOwnershipButtons',
//     class: "btn-group",
// }));
// for (var i = 0; i < 10; i++) {
//     console.log("Buttons");
//     $("#computerOwnership").append($('<button/>', {
//         text: contextICA27.householdsWithInternetComputerPercentageYear[i],
//         id: 'btn_' + i,
//         class: buttonClass,
//         click: function() {
//             alert('hi');
//         }
//     });)
// }



// for (var i = 0; i < $('.buttonClass').length; i++) {
//     console.log("Buttons");
//     $('#btn_' + i).click(function() {
//         chart.series[0].update({
//             data: [{
//                 name: 'With a computer',
//                 y: contextICA27.householdsWithInternetComputerPercentage[i]
//             }, {
//                 name: 'No Computer',
//                 y: 100 - contextICA27.householdsWithInternetComputerPercentage[i],
//             }]
//         });
//     });
// }

// $('#btn_' + 0).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[0]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[0],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 1).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[1]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[1],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 2).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[2]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[2],
//         }]
//     });
// });
// $('#btn_' + 3).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[3]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[3],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 4).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[4]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[4],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 5).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[5]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[5],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 6).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[6]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[6],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 7).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[7]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[7],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 8).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[8]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[8],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
// $('#btn_' + 9).click(function() {
//     chart.series[0].update({
//         data: [{
//             name: 'With a computer',
//             color: pieColourPrimary,
//             y: contextICA27.householdsWithInternetComputerPercentage[9]
//         }, {
//             name: 'No Computer',
//             color: pieColourSeconary,
//             y: 100 - contextICA27.householdsWithInternetComputerPercentage[9],
//             sliced: true,
//             selected: true
//         }]
//     });
// });
;console.log("LOADED: computerShopping");
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
;$(document).ready(function() {
    contextCPA01 = {}; // global namespace variable
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
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "All items") {
                    contextCPA01.changePercentageAll.push(data[i].value);
                    contextCPA01.changeYear.push(data[i].Year);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Alcoholic beverages and tobacco") {
                    contextCPA01.changePercentageABT.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Clothing and footwear") {
                    contextCPA01.changePercentageCF.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Housing, water, electricity, gas and other fuels") {
                    contextCPA01.changePercentageHWEGF.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Furnishings, household equipment and routine household maintenance") {
                    contextCPA01.changePercentageFH.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Health") {
                    contextCPA01.changePercentageH.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Transport") {
                    contextCPA01.changePercentageT.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Communications") {
                    contextCPA01.changePercentageC.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Recreation and culture") {
                    contextCPA01.changePercentageRC.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Education") {
                    contextCPA01.changePercentageEd.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Restaurants and hotels") {
                    contextCPA01.changePercentageRH.push(data[i].value);
                }
                if (data[i].Statistic == "Annual Average Percentage Change in Consumer Price Index (%)" && data[i]["Commodity Group"] == "Miscellaneous goods and services") {
                    contextCPA01.changePercentageMiscGS.push(data[i].value);
                }

            }
            $("#cpa01").css({
                height: '400px'
            });
            var options = {
                chart: {
                    renderTo: 'consumerPriceIndex',
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
                }, {
                    name: 'CPI Change % - Alcohol, beverages and tobacco',
                    data: contextCPA01.changePercentageABT,
                    visible: false
                }, {
                    name: 'CPI Change % - Clothing and Footware',
                    data: contextCPA01.changePercentageCF,
                    visible: false
                }, {
                    name: 'CPI Change % - Housing, water, electricity, gas and other fuels',
                    data: contextCPA01.changePercentageHWEGF,
                    visible: false
                }, {
                    name: 'CPI Change % - Furnishings, household equipment and routine household maintenance',
                    data: contextCPA01.changePercentageFH,
                    visible: false
                }, {
                    name: 'CPI Change % - Health',
                    data: contextCPA01.changePercentageH,
                    visible: false
                }, {
                    name: 'CPI Change % - Transport',
                    data: contextCPA01.changePercentageT,
                    visible: false
                }, {
                    name: 'CPI Change % - Communications',
                    data: contextCPA01.changePercentageC,
                    visible: false
                }, {
                    name: 'CPI Change % - Recreation and culture',
                    data: contextCPA01.changePercentageRC,
                    visible: false
                }, {
                    name: 'CPI Change % - Education',
                    data: contextCPA01.changePercentageEd,
                    visible: false
                }, {
                    name: 'CPI Change % - Restaurants and hotels',
                    data: contextCPA01.changePercentageRH,
                    visible: false
                }, {
                    name: 'CPI Change % - Miscellaneous goods and services',
                    data: contextCPA01.changePercentageMiscGS,
                    visible: false
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
;$(document).ready(function() {

    $.getJSON("bin/VSA16.json", function(data) {

        var tbl = "<div id='col3'><table style='display:none' id='chart3' class='highchart' data-graph-type='line' data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
        tbl += "<caption>Births in Sligo</caption><thead><tr><th>Years</th><th>Births Numbers</th></tr></thead><tbody>";

        for (i = 0; i < data.length; i++) {
            if (data[i]["County"] == "Sligo" && data[i]["Statistic"] == "All Births (Number)") {
                tbl += "<tr><td>" + data[i].Year + "</td><td>" + data[i].value + "</td></tr>";
            }
        }
        tbl += "</tbody></table></div>";
        $('#populationBirthsSligo').append(tbl);
        $('table#chart3').highchartTable();
    });
});
;$(document).ready(function() {
    $.getJSON("bin/VSA49.json", function(data) {
        var tbl = "<div id='col2'><table style='display:none' id='chart2' class='highchart' data-graph-type='column'  data-graph-container-before='1' data-graph-height='400' data-graph-width='400' >";
        tbl += "<caption>Marriages in 2016</caption><thead><tr><th>Age</th><th>Groom</th><th>Bride</th></tr></thead><tbody>";
        var sortedData = {};
        sortedData.NumbersGroom = [];
        sortedData.NumbersBride = [];
        sortedData.Ages = [];
        for (i = 0; i < data.length; i++) {
            if (data[i].Year == "2016") {
                if (data[i].Statistic == "Marriages per 1000 Males (%)") {
                    sortedData.NumbersGroom.push(data[i].value);
                    sortedData.Ages.push(data[i].Age);
                }
                if (data[i].Statistic == "Marriages per 1000 Females (%)") {
                    sortedData.NumbersBride.push(data[i].value);
                }
            }
        }
        for (var i = 0; i < sortedData.Ages.length; i++) {
            tbl += "<tr><td>" + sortedData.Ages[i] + "</td><td>" + sortedData.NumbersGroom[i] + "</td><td data-graph-item-color='#df0101'>" + sortedData.NumbersBride[i] + "</td></tr>";
        }
        tbl += "</tbody></table></div>";
        $('#populationMarriages').append(tbl);
        $('table#chart2').highchartTable();

    });
});
;$(document).ready(function() {

    $.getJSON("bin/EP001.json", function(data) {

        var tbl = "<div id='col1'><table style='display:none'  id='chart1' class='highchart' data-graph-type='column' data-graph-container-before='1' data-graph-height='00' data-graph-width='600' >";
        tbl += "<caption>Population in Ireland</caption><thead><tr><th>Region</th><th>Population</th></tr></thead><tbody>";

        for (i = 0; i < data.length; i++) {
            if (data[i]["Census Year"] == "2016" && data[i]["Sex"] == "Both sexes" && data[i]["Statistic"] == "Population 2016  (Number)" && data[i].value < 150000) {
                tbl += "<tr><td>" + data[i]["Province County or City"] + "</td><td>" + data[i].value + "</td></tr>";
            }
        }
        tbl += "</tbody></table></div>";
        //$('.row').append(tbl);
        $('#populationNumber').append(tbl);
        $('table#chart1').highchartTable();
    });
});
;console.log("Loaded: scroll");
$(function() {

    var scrollMagicController = new ScrollMagic.Controller();



    //  loop trhough each .graph element
    $('.graph').each(function() {
        //  build scene
        var sceneComputerDailyUse = new ScrollMagic.Scene({
                triggerElement: this,
                duration: '90%',
                triggerHook: 0.9
            })
            .setClassToggle(this, 'fade-in')
            .addIndicators({
                name: 'fade scene',
                colorTrigger: 'black',
                indent: 200,
                colorStart: 'rgb(228, 32, 185)',
                colorEnd: 'rgb(65, 228, 32)'
            })
            .addTo(scrollMagicController);
    });
});
