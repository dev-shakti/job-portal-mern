import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

const LatestJobCard = () => {
  return (
    <Card className="shadow-lg mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>Company</CardTitle>
        <CardDescription className=" text-slate-500">India</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='font-medium text-lg text-slate-700'>Frontend development</p>
        <p className="text-sm text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          officiis!
        </p>
      </CardContent>
      <CardFooter>
        <Badge className={"text-[#4834d4] font-bold"} variant="ghost">
          10 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Fulltime
        </Badge>
        <Badge className={"text-[#8e44ad] font-bold"} variant="ghost">
          8 LPA
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default LatestJobCard;
