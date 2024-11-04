import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utilis/const";
import { toast } from "sonner";
import { setLoading } from "@/store/jobSlice";

const PostJobs = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: ".",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });

  const { isLoading } = useSelector((state) => state.job);
  const { companies } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInputs({ ...inputs, companyId: selectedCompany._id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${JOB_API_END_POINT}/postjob`,
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      navigate("/admin/jobs")
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }

    setInputs({
      title: "",
      description: ".",
      requirements: "",
      salary: "",
      location: "",
      jobType: "",
      experience: "",
      position: "",
      companyId: "",
    });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">Post A New Job</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto my-10  p-8 border shadow-lg border-slate-200 rounded-md"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-md font-medium">Job Title</Label>
            <Input
              type="text"
              placeholder="Title"
              name="title"
              className="mt-2"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Description</Label>
            <Input
              type="text"
              placeholder="Description"
              name="description"
              className="mt-2"
              value={inputs.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Requirements</Label>
            <Input
              type="text"
              placeholder="Requirements"
              name="requirements"
              className="mt-2"
              value={inputs.requirements}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Location</Label>
            <Input
              type="text"
              placeholder="Location"
              name="location"
              className="mt-2"
              value={inputs.location}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Salary</Label>
            <Input
              type="text"
              placeholder="Salary"
              name="salary"
              className="mt-2"
              value={inputs.salary}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Job Type</Label>
            <Input
              type="text"
              placeholder="Job Type"
              name="jobType"
              className="mt-2"
              value={inputs.jobType}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Experience</Label>
            <Input
              type="text"
              placeholder="Experience"
              name="experience"
              className="mt-2"
              value={inputs.experience}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-md font-medium">Position</Label>
            <Input
              type="number"
              placeholder="Position"
              name="position"
              className="mt-2"
              value={inputs.position}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-4">
          {companies.length >= 0 && (
            <Select onValueChange={selectChangeHandler}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent>
                {companies.length > 0 &&
                  companies.map((company) => (
                    <SelectItem
                      key={company._id}
                      value={company?.name?.toLowerCase()}
                    >
                      {company.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <Button className="w-full mt-8" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="ml-2">Please wait while posting...</span>
            </>
          ) : (
            <span className="ml-2">Post Job</span>
          )}
        </Button>
        {companies.length === 0 && (
          <p className="text-sm mt-4 font-medium text-center text-red-500">
            **Please register a company first, before posting a jobs
          </p>
        )}
      </form>
    </div>
  );
};

export default PostJobs;
