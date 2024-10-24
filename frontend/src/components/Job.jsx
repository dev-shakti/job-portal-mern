import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Link,useParams } from "react-router-dom";

const Job = () => {
  const { id } = useParams(); 
  const jobId = id;
  return (
    <Card className="shadow-lg mb-4 md:mb-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">2 days ago</p>
          <Button variant="outline" className="rounded-full" size="icon">
            <Bookmark />
          </Button>
        </div>
        <div className="flex gap-4">
          <p>Logo</p>
          <div>
            <h4 className="text-lg font-medium ">Company</h4>
            <p className="text-sm text-slate-500">India</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-lg text-slate-700">
          Frontend development
        </p>
        <p className="text-sm text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          officiis!
        </p>
        <div className="mt-4">
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
      </CardContent>
      <CardFooter>
        <Link to={`/description/${jobId}`}></Link>
        <Button variant={"ghost"}>Details</Button>
        <Button className="bg-[#8e44ad] ml-2">Details</Button>
      </CardFooter>
    </Card>
  );
};

export default Job;
