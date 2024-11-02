import FilterCards from "@/components/FilterCards";
import Job from "@/components/Job";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Jobs = () => {

  const {allJobs,searchQuery}=useSelector((state) => state.job);
  const [filterJobs,setFilterJobs]=useState(allJobs);

  useEffect(() => {
    const filteredJobs = allJobs.length >= 0 && allJobs.filter((job) => {
        if (!searchQuery) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          job?.salary?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          job?.location?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    
    setFilterJobs(filteredJobs); 
}, [allJobs, searchQuery,filterJobs]);
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex gap-8">
        <div className=" w-[20%]">
          <FilterCards/>
        </div>
        {filterJobs.length === 0 ? (
          <div>No Job Found !</div>
        ) : (   
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
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
