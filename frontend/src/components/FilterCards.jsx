import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setSearchQuery } from "@/store/jobSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const filterData = [
  {
    filterType: "Location",
    arrays: [
      "Mumbai",
      "Pune",
      "kolkata",
      "Hyderbad",
      "Bangalore",
    ],
  },
  {
    filterType: "Postion",
    arrays: [
      "Fullstack Developer",
      "ReactJs Developer",
      "Node.js Develpoer",
      "Data Scientist",
      "Backend Developer",
    ],
  },
  {
    filterType: "Salary",
    arrays: [
      "0-2 LPA",
      "2-4 LPA",
      "4.7.5 LPA",
      "7.5-10 LPA",
      "10-12 LPA",
    ],
  },
];
const FilterCards = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
 
  };

  useEffect(() => {
     dispatch(setSearchQuery(selectedValue))
  },[selectedValue,dispatch])

  return (
    <div className="w-full bg-slate-100 p-3 rounded-md">
      <h2 className="font-medium text-xl mb-4">Filter Jobs</h2>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg">{item.filterType}</h3>
            <hr className="my-2" />
            {item.arrays.map((arr, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div className="" key={itemId}>
                  <RadioGroupItem value={arr} id={itemId} />
                  <Label
                    htmlFor={itemId}
                    className="text-gray-700 font-normal ml-2"
                  >
                    {arr}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCards;
