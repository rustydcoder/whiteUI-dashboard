import { TooltipItem } from "chart.js";
type TooltipData = {
  dataPoints: TooltipItem<"line">[];
};

const doughnutLabel = {
  id: "doughnutLabel",
  beforeDatasetDraw: (chart: any, args: any, plugins: any) => {
    const { ctx } = chart;
    // todo: sets the active arc in the doughnut chart
    // chart.setActiveElements([{ datasetIndex: 0, index: 0 }]);
    const centerX = chart.getDatasetMeta(0).data[0].x;
    const centerY = chart.getDatasetMeta(0).data[0].y;

    ctx.save();
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    (ctx.fillStyle = "black"), ctx.fillText("$85k", centerX, centerY);
  },
};

const doughnutTextHover = (data: number[]) => ({
  id: "doughnutTextHover",
  afterDatasetDraw: (chart: any, args: any, plugins: any) => {
    const { ctx } = chart;
    const generalData = chart.getDatasetMeta(0).data[0];
    const { x: xCenter, y: yCenter } = generalData;
    chart.getDatasetMeta(0).data.forEach((dataPoint: any, index: any) => {
      if (dataPoint.active) {
        const { startAngle, endAngle } = dataPoint;
        const radius = dataPoint.innerRadius + 17;
        const centerAngle = (startAngle + endAngle) / 2;
        const xPos = radius * Math.cos(centerAngle);
        const yPos = radius * Math.sin(centerAngle);
        ctx.save();

        ctx.translate(xCenter, yCenter);

        ctx.font = "bold 10px sans-serif";

        ctx.fillStyle = "white";
        ctx.fillText(data[index] + "%", xPos, yPos);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.restore();
      }
    });
  },
});

const afterDrawPlugin = {
  id: "uniqueid5", //typescript crashes without id
  afterDraw: function (chart: any, easing: any) {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const activePoint = chart.tooltip._active[0];
      const ctx = chart.ctx;
      const x = activePoint.element.x;
      const topY = activePoint.element.y;
      const bottomY = chart.scales.y.bottom;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 2;
      ctx.setLineDash([2, 4]);
      ctx.strokeStyle = "#bbf7d0";
      ctx.stroke();
      ctx.restore();
    }
  },
};

const tooltipLinePlugin = {
  legend: {
    display: false,
  },
  tooltip: {
    caretPadding: 12,
    callbacks: {
      label: (tooltipItems: TooltipData) => {
        return "";
      },
      title: (tooltipItems: TooltipData[]) => {
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let month;
        tooltipItems.map((item: any) => {
          month = months.find((m) => m.startsWith(item.label));
        });
        return month;
      },
      beforeBody: (tooltipItems: TooltipData[]) => {
        let tooltipBody = "";
        tooltipItems.map((item: any) => {
          tooltipBody = "$" + item.formattedValue + "00";
        });
        return tooltipBody;
      },
    },
    backgroundColor: "#fff",
    bodyColor: "#000",
    bodyFont: {
      weight: "bold",
      size: 16,
    },
    displayColors: false,
    titleColor: "rgb(107, 114, 118)",
    titleFont: {
      weight: "light",
      size: 16,
    },
  },
};
export { doughnutLabel, doughnutTextHover, afterDrawPlugin, tooltipLinePlugin };
