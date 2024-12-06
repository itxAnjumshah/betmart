import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LineChart = () => {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    chart.get("colors").set("step", 3);

    // Add cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.3,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    let series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueX}: {valueY}\n{previousDate}: {value2}",
        }),
      })
    );

    series1.strokes.template.setAll({ strokeWidth: 2 });
    series1.get("tooltip").get("background").set("fillOpacity", 0.5);

    let series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series 2",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        valueXField: "date",
      })
    );

    series2.strokes.template.setAll({
      strokeDasharray: [2, 2],
      strokeWidth: 2,
    });

    // Set date fields
    root.dateFormatter.setAll({
      dateFormat: "yyyy-MM-dd",
      dateFields: ["valueX"],
    });

    // Set data
    let data = [
      {
        date: new Date(2019, 5, 12).getTime(),
        value1: 50,
        value2: 48,
        previousDate: new Date(2019, 5, 5),
      },
      {
        date: new Date(2019, 5, 13).getTime(),
        value1: 53,
        value2: 51,
        previousDate: "2019-05-06",
      },
      {
        date: new Date(2019, 5, 14).getTime(),
        value1: 56,
        value2: 58,
        previousDate: "2019-05-07",
      },
      {
        date: new Date(2019, 5, 15).getTime(),
        value1: 52,
        value2: 53,
        previousDate: "2019-05-08",
      },
      {
        date: new Date(2019, 5, 16).getTime(),
        value1: 48,
        value2: 44,
        previousDate: "2019-05-09",
      },
      {
        date: new Date(2019, 5, 17).getTime(),
        value1: 47,
        value2: 42,
        previousDate: "2019-05-10",
      },
      {
        date: new Date(2019, 5, 18).getTime(),
        value1: 59,
        value2: 55,
        previousDate: "2019-05-11",
      },
    ];

    series1.data.setAll(data);
    series2.data.setAll(data);

    // Animate on load
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

    // Cleanup on unmount
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default LineChart;
