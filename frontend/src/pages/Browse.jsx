import Job from "@/components/Job";
import { useGetAllJobs } from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((state) => state.job);

  return (
    <div className="px-4 my-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-medium text-2xl">
          Search results:{" "}
          <span className="text-[#8e44ad]">({allJobs.length})</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12 ">
          {allJobs.length <= 0 ? (
            <span>No Jobs Found.</span>
          ) : (
            allJobs.map((job) => <Job key={job._id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
