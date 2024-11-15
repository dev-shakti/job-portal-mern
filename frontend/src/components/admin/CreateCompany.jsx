import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utilis/const";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setSingleCompany } from "@/store/companyslice";

const CreateCompany = () => {
  const [name, setName] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const registerNewCompany = async () => {
    
    try {
      const response = await axios.post(
        `${COMPANY_API_END_POINT}/registercompany`,
        { name },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      dispatch(setSingleCompany(response.data.newCompany));
      const companyId = response?.data?.newCompany?._id;
      navigate(`/admin/company/${companyId}`);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 my-12">
      <div className="my-10">
        <h1 className="font-bold text-2xl">Your Company Name</h1>
        <p className="text-slate-500">
          What would you like to give your company name? you can change this
          later.
        </p>
        <div className="my-8">
          <Label className="text-lg ">Company Name</Label>
          <Input
            type="text"
            placeholder="Microsoft, Amazon etc..."
            className="my-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Link to="/admin/companies">
            <Button variant="outline">Cancel</Button>
          </Link>
            <Button className="ml-4" onClick={registerNewCompany}>
              Continue
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
