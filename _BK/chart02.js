$(document).ready(function () {

    var popBoth = [];
    var popMale = [];
    var popFemale = [];
    var popYear = [];


    $.getJSON("PEA01.json", function (data) {


        $.each(data, function (key, val) {
            popBoth.push(parseFloat(val["Both sexes"]));
            popMale.push(val.Male);
            popFemale.push(val.Female);
            popYear.push(parseFloat(val.Year));


        });
        console.log(popBoth);
        console.log(popMale);
        console.log(popFemale);
        console.log(popYear);

        $("#container").css({height : '600px'});

    });





    var myChart = Highcharts.chart('container', {

        title: {
            text: 'Irish Population by Year'
        },

        subtitle: {
            text: 'Source: cso.ie'
        },

        yAxis: {
            title: {
                text: 'Population'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 1950
            }
        },

        series: [{
            name: 'Both Sexes',
            data: popBoth
        }, {
            name: 'Male',
            data: popMale
        }, {
            name: 'Female',
            data: popFemale
        }]

    });


   console.log(myChart)
    var redrawChart = function(){
        var chart = $('#container').highcharts();
        console.log("REDRAWING")
        chart.redraw()
    };
    setTimeout(redrawChart, 5000);



});
