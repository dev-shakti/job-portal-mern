import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDetails = () => {
  return (
    <div className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1>Frontend Developer</h1>
            <div>
              <Badge className={"text-[#4834d4] font-bold"} variant="ghost">
                10 Positions
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                Fulltime
              </Badge>
              <Badge className={"text-[#8e44ad] font-bold"} variant="ghost">
                8 LPA
              </Badge>
            </div>
          </div>
          <Button className="bg-[#7a3b96] hover:bg-[#8e44ad]">
            Apply Jobs
          </Button>
        </div>
        <h3>Job Description</h3>
        <hr />
        <div className="flex flex-col gap-4">
            <p><b>Role:</b>Frontend Deveolper</p>
            <p><b>Location:</b>Hyderbad</p>
            <p><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, adipisci.</p>
            <p><b>Experience:</b>2+ years</p>
            <p><b>Salary:</b>8 LPA</p>
            <p><b>Total Applicants:</b>4</p>
            <p><b>Posted Date:</b>15.10.2024</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
