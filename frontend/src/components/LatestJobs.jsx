import { useSelector } from "react-redux";
import LatestJobCard from "./LatestJobCard";


const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.job);
  return (
    <div className="w-full my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium text-center">
          <span className="text-[#8e44ad]">Latest & Top</span> Job Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12 ">
          {allJobs.length >= 0 ? (
            allJobs.map((job) => <LatestJobCard key={job._id} job={job} />)
          ) : (
            <span>No Jobs Found</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
