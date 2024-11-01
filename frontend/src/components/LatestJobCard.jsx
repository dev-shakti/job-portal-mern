import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  return (
    <Link to={`/jobdetails/${job._id}`}>
      <Card className="shadow-lg mb-4 md:mb-0">
        <CardHeader>
          <CardTitle>{job?.company?.name}</CardTitle>
          <CardDescription className=" text-slate-500">India</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-lg text-slate-700">{job?.title}</p>
          <p className="text-sm text-slate-500">{job?.description}</p>
        </CardContent>
        <CardFooter>
          <Badge className={"text-[#4834d4] font-bold"} variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className={"text-[#8e44ad] font-bold"} variant="ghost">
            {job?.salary} LPA
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default LatestJobCard;
