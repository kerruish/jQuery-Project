console.log("LOADED: computerOwnership");
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
