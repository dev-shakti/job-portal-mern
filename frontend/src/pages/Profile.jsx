import AppliedJobTable from "@/components/AppliedJobTable";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Contact, Mail, Pen } from "lucide-react";
const skills = ["HTML", "CSS", "JavaScript", "ReactJs", "Mongo DB", "Node.JS"];
const isResume = true;

const Profile = () => {
  return (
    <div className="px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 shadow-xl bg-white border border-slate-200 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-2xl">John Doe</h3>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <Button className="cursor-pointer" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex item-center gap-4">
            <Mail /> <span>John@gmail.com</span>
          </div>
          <div className="flex item-center gap-4">
            <Contact /> <span>9326856937</span>
          </div>
        </div>
        <div>
          <p>
            <strong>Skills: </strong>
          </p>
          <div className="flex gap-4 items-center mt-4">
            {skills.length >= 0 ? (
              skills.map((skill, index) => (
                <Badge key={index} className="p-2 cursor-pointer bg-slate-500">
                  {skill}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="http://www.google.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              John Doe
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        <div className="w-full  rounded-2xl">
           <h2 className='font-bold text-lg my-5'>Applied Jobs</h2>
           <AppliedJobTable/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
