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
import { afterDrawPlugin, tooltipLinePlugin } from "./utils/chartPlugins";

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
      hoverBackgroundColor: "#4ade80",
      radius: 0,
      hoverRadius: 8,
      hoverBorderColor: "#bbf7d0",
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
      display: false,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      data: [26.3, 18.5, 48.2, 32.3, 23.5, 28.2],
      borderColor: "#86efac",
      backgroundColor: "#f0fdfa",
      borderWidth: 2,
      fill: true,
    },
  ],
};

const IncomeChart = () => {
  return <Line plugins={[afterDrawPlugin]} options={options} data={data} />;
};

export default IncomeChart;
