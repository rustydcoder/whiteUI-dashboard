import ChartHeader from "./chartHeader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { tooltipLinePlugin } from "./utils/chartPlugins";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export const options: any = {
  responsive: true,
  tension: 0.4,
  interaction: {
    intersect: false,
    mode: "index",
  },
  elements: {
    point: {
      // backgroundColor: "rgb(59, 130, 246)",
      hoverBackgroundColor: "rgb(59, 130, 246)",
      radius: 0,
      hoverRadius: 8,
      hoverBorderColor: "rgb(191, 219, 254)",
      hoverBorderWidth: 4,
    },
  },
  plugins: {
    ...tooltipLinePlugin,
  },
  scales: {
    y: {
      display: false,
      beginAtZero: true,
      suggestedMin: 0,
      suggestedMax: 60,
    },
    x: {
      border: {
        dash: [2, 4],
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      data: [26.3, 18.5, 48.2, 32.3, 23.5, 28.2],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "#eff6ff",
      borderWidth: 2,
      fill: {
        target: "start",
      },
    },
  ],
};

const SalesChart = () => {
  return <Line options={options} data={data} />;
};

export default SalesChart;
