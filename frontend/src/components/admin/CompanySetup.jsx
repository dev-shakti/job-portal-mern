import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utilis/const";
import { toast } from "sonner";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useGetSingleCompany } from "@/hooks/useGetSingleCompany";

const CompanySetup = () => {
  const params = useParams();
  useGetSingleCompany({ companyId: params.id });
  const [inputs, setInputs] = useState({
    name: "",
    website: "",
    location: "",
    description: "",
    file: null,
  });
  const { singleCompany } = useSelector((state) => state.company);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (singleCompany) {
      setInputs({
        name: singleCompany.name || "",
        description: singleCompany.description || "",
        website: singleCompany.website || "",
        location: singleCompany.location || "",
        file: singleCompany.file || null,
      });
    }
  }, [singleCompany]);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setInputs({ ...inputs, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("website", inputs.website);
    formData.append("description", inputs.description);
    formData.append("location", inputs.location);
    if (inputs.file) {
      formData.append("file", inputs.file);
    }
    try {
      setIsLoading(true);
      const response = await axios.put(
        `${COMPANY_API_END_POINT}/updateCompany/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Error updating company");
    } finally {
      setIsLoading(false);
    }
  };

  if (!singleCompany || isLoading) {
    return <div>Loading company details...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-10">Company Setup</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto my-10  p-8 border shadow-lg border-slate-200 rounded-md"
      >
        <Link to="/admin/companies">
          <Button className="mb-4" variant="outline">
            <ArrowLeft />
            <span className="ml-1">Back</span>
          </Button>
        </Link>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-lg font-medium">Name</Label>
            <Input
              type="text"
              placeholder="Company name"
              name="name"
              className="mt-2"
              value={inputs.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-lg font-medium">Description</Label>
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
            <Label className="text-lg font-medium">Website</Label>
            <Input
              type="text"
              placeholder="Website"
              name="website"
              className="mt-2"
              value={inputs.website}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label className="text-lg font-medium">Location</Label>
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
            <Label className="text-lg font-medium ">Logo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2"
            />
          </div>
        </div>
        <Button className="w-full mt-8" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="ml-2">Updating...</span>
            </>
          ) : (
            <span className="ml-2">Update</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CompanySetup;
