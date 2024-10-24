import FilterCards from "@/components/FilterCards";
import Job from "@/components/Job";
import { useSelector } from "react-redux";



const Jobs = () => {
  const {allJobs}=useSelector((state) => state.job);
  
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex gap-8">
        <div className=" w-[20%]">
          <FilterCards/>
        </div>
        {allJobs.length === 0 ? (
          <div>No Job Found !</div>
        ) : (   
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {allJobs.map((job) => (
                    <Job key={job._id} job={job}/>
                ))}
              </div>
            </div>      
        )}
      </div>
    </div>
  );
};

export default Jobs;
