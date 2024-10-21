import LatestJobCard from "./LatestJobCard";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="w-full my-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium text-center">
          <span className="text-[#8e44ad]">Latest & Top</span> Job Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {randomJobs.map((job, index) => (
            <LatestJobCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
