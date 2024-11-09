import ChartHeader from "./chartHeader";
import IncomeChart from "./incomeChart";

const incomeDets = [
  { amount: "$342.000", title: "Total sales" },
  { amount: "$200.000", title: "Spendings" },
  { amount: "$142.000", title: "Income" },
];

const IncomeDetails = () => {
  return (
    <div className="bg-white rounded-md pt-4 ">
      <ChartHeader text="Income Details" />
      <div className="px-4 my-4">
        <h2 className="text-lg flex items-center font-bold">
          $142.000{" "}
          <span className="ml-1 text-green-500 icon-[la--reply-all]"></span>
        </h2>
        <p className="text-gray-400 text-xs mb-6">Total income</p>
      </div>
      <IncomeChart />
      <div className="flex border-t justify-evenly border-gray-200">
        {incomeDets.map((details, i) => (
          <div
            key={details.amount}
            className={
              "p-4 text-center " +
              (i === 1 ? "border-r border-l border-gray-200" : "")
            }
          >
            <h3 className="font-bold text-sm">{details.amount}</h3>
            <p className="text-xs font-normal text-gray-500">{details.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomeDetails;
