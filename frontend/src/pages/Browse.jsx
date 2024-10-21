import Job from "@/components/Job";

const searchjobs=[1,2,3]

const Browse = () => {
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-medium text-2xl">
          Search results: <span className="text-[#8e44ad]">(3)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 ">
            {searchjobs.map((job,index) => (
                <Job key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
