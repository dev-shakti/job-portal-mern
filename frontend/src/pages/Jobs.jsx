import Job from "@/components/Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto flex gap-8">
        <div className="bg-red-200 w-[20%]"></div>
        {jobsArray.length === 0 ? (
          <div>No Job Found !</div>
        ) : (   
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobsArray.map((job,index) => (
                    <Job key={index}/>
                ))}
              </div>
            </div>      
        )}
      </div>
    </div>
  );
};

export default Jobs;
