import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CompanySetup = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-10">Company Setup</h1>
      <form className="max-w-4xl mx-auto my-10  p-8 border shadow-lg border-slate-200 rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-lg font-medium">Name</Label>
            <Input
              type="text"
              placeholder="Company name"
              name="name"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg font-medium">Description</Label>
            <Input
              type="text"
              placeholder="Description"
              name="description"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg font-medium">Website</Label>
            <Input
              type="text"
              placeholder="Website"
              name="website"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg font-medium">Location</Label>
            <Input
              type="text"
              placeholder="Location"
              name="location"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg font-medium ">Logo</Label>
            <Input type="file" accept="image/*" className="mt-2" />
          </div>
          
        </div>
        <Button className="w-full mt-10">Update</Button>
      </form>
    </div>
  );
};

export default CompanySetup;
