import ChartHeader from "./chartHeader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutLabel, doughnutTextHover } from "./utils/chartPlugins";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  cutout: "75%",
  rotation: 235,
  radius: "60%",
  aspectRatio: 1.2,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = [
  { name: "Marketing Channels", cost: "$22.0k", color: "border-blue-400" },
  {
    name: "Direct Sales",
    cost: "$8.4k",
    color: "border-green-400",
  },
  {
    name: "Offline Channels",
    cost: "$18.6k",
    color: "border-yellow-400",
  },
  {
    name: "Other Channels",
    cost: "$15.3k",
    color: "border-red-400",
  },
];

const chartColor = ["#60a5fa", "#4ade80", "#eab308", "#ef4444"];
export const data = {
  datasets: [
    {
      label: "#",
      data: [16, 19, 55, 10],
      backgroundColor: chartColor,
      hoverOffset: 20,
      borderWidth: 0,
      hoverBorderWidth: 10,
      hoverBorderColor: chartColor,
      hoverBackgroundColor: chartColor,
      borderRadius: 0,
    },
  ],
};

const IncomeBreakdown = () => {
  return (
    <div className="bg-white rounded-md py-4">
      <ChartHeader text="Income Breakdown" />
      <div className="px-3">
        <Doughnut
          options={options}
          data={data}
          plugins={[doughnutLabel, doughnutTextHover(data.datasets[0].data)]}
        />
        <div className="grid grid-cols-2 gap-x-5">
          {labels.map((label) => (
            <div key={label.name} className="flex justify-between">
              <div className="flex items-center space-x-1">
                <div
                  className={
                    "h-2 w-2 border-2 bg-white block rounded-full " +
                    label.color
                  }
                ></div>
                <p className="text-[10px] font-medium">{label.name}</p>
              </div>
              <p className="text-[10px] font-bold">{label.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeBreakdown;
