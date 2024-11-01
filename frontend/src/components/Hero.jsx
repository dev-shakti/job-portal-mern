import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/jobSlice";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    dispatch(setSearchQuery(input));
  }, [input, dispatch]);

  return (
    <div className="flex flex-col items-center py-16 px-4 bg-gray-50">
      <span className="text-medium md:text-lg font-medium bg-slate-200 text-[#F83002] px-4 py-2 rounded-md ">
        No.1 Job Hunt Website
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-center">
        Search, Apply & <br />
        Get Your<span className="text-[#8e44ad]"> Dream Jobs.</span>
      </h1>
      <p className="sm:text-lg md:text-xl my-6 text-slate-500 max-w-3xl mx-auto text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi
        cupiditate voluptas soluta, suscipit nihil voluptatem obcaecati iste in
        quos?
      </p>
      <div className="mt-6 shadow-lg rounded-full md:w-[40%] p-3 pl-5 border border-slate-200  flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full border-none outline-none text-gray-500 text-lg"
          placeholder="Find your dream jobs"
        />
        <Button className="bg-[#8e44ad] rounded-full" onClick={() => navigate("/browse")}>
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
