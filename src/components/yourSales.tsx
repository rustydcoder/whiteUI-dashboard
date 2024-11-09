import ChartHeader from "./chartHeader";
import SalesChart from "./salesChart";

const YourSales = () => {
  return (
    <div className="bg-white rounded-md py-4">
      <ChartHeader text="Your Sales" />
      <div className="px-4">
        <h2 className="text-lg font-bold mt-4">$142.000</h2>
        <p className="text-gray-400 text-xs mb-4">Total income</p>
      </div>
      <SalesChart />
    </div>
  );
};

export default YourSales;
