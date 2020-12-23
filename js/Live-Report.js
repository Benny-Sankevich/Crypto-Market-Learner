///<reference path="jquery-3.5.1.js"/>

// live report function
function showGraphReport() {

    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Coin Live Report!"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "EURO",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "USD",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2020, 0, 1), y: 120 },
                { x: new Date(2020, 1, 1), y: 135 },
                { x: new Date(2020, 2, 1), y: 144 },
                { x: new Date(2020, 3, 1), y: 103 },
                { x: new Date(2020, 4, 1), y: 93 },
                { x: new Date(2020, 5, 1), y: 129 },
                { x: new Date(2020, 6, 1), y: 143 },
                { x: new Date(2020, 7, 1), y: 156 },
                { x: new Date(2020, 8, 1), y: 122 },
                { x: new Date(2020, 9, 1), y: 106 },
                { x: new Date(2020, 10, 1), y: 137 },
                { x: new Date(2020, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Profit",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2020, 0, 1), y: 19034.5 },
                { x: new Date(2020, 1, 1), y: 20015 },
                { x: new Date(2020, 2, 1), y: 27342 },
                { x: new Date(2020, 3, 1), y: 20088 },
                { x: new Date(2020, 4, 1), y: 20234 },
                { x: new Date(2020, 5, 1), y: 29034 },
                { x: new Date(2020, 6, 1), y: 30487 },
                { x: new Date(2020, 7, 1), y: 32523 },
                { x: new Date(2020, 8, 1), y: 20234 },
                { x: new Date(2020, 9, 1), y: 27234 },
                { x: new Date(2020, 10, 1), y: 33548 },
                { x: new Date(2020, 11, 1), y: 32534 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}