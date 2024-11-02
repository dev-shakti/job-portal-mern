import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import {useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Job = ({ job }) => {
  const navigate = useNavigate();
 
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <Card className="shadow-lg mb-4 md:mb-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {daysAgoFunction(job?.createdAt) === 0
              ? "Today"
              : `${daysAgoFunction(job?.createdAt)} days ago`}
          </p>
          <Button variant="outline" className="rounded-full" size="icon">
            <Bookmark />
          </Button>
        </div>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={job?.company?.logo} className="h-10" />
          </Avatar>

          <div>
            <h4 className="text-lg font-medium ">{job?.company?.name}</h4>
            <p className="text-sm text-slate-500">India</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-lg text-slate-700">{job?.title}</p>
        <p className="text-sm text-slate-500">{job?.description}</p>
        <div className="mt-4">
          <Badge className={"text-[#4834d4] font-bold"} variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className={"text-[#8e44ad] font-bold"} variant="ghost">
            {job?.salary} LPA
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={"ghost"}
          onClick={() => navigate(`/jobdetails/${job?._id}`)}
        >
          Details
        </Button>
        <Button className="bg-[#8e44ad] ml-2">Save for later</Button>
      </CardFooter>
    </Card>
  );
};

export default Job;
