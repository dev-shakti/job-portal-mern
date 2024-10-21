import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    arrays: [
      "Delhi Ncr",
      "Mumbai",
      "Pune",
      "kolkata",
      "Hyderbad",
      "Bangalore",
      "Gandhi Nagar",
      "Ranchi",
    ],
  },
  {
    filterType: "Postion",
    arrays: [
      "Fullstack Developer",
      "ReactJs Developer",
      "Node.js Develpoer",
      "Data Scientist",
      "Phython Fullstack Engineer",
      "Data Entry Jobs",
      "Tellcaller",
      "Sales Maneger",
    ],
  },
  {
    filterType: "Salary",
    arrays: [
      "0-3 LPA",
      "2-4 LPA",
      "0.7.5 LPA",
      "4-5 LPA",
      "10-12 LPA",
      "6-9LPA",
      "1.5-3.5 LPA",
      "15 LPA Above",
    ],
  },
];
const FilterCards = () => {
  return (
    <div className="w-full bg-slate-100 p-3 rounded-md">
      <h2 className="font-medium text-xl mb-4">Filter Jobs</h2>
      <RadioGroup>
        {filterData.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg">{item.filterType}</h3>
            <hr className="my-2"/>
            {item.arrays.map((arr, index) => (
              <div className="" key={index}>
                <RadioGroupItem value={arr} />
                <Label className="text-gray-700 font-normal ml-2">{arr}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCards;
