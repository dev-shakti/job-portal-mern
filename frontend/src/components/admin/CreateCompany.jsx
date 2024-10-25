import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utilis/const";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  
  const registerNewCompany = async () => {
    try {
      const response = await axios.post(
        `${COMPANY_API_END_POINT}/registerCompany`,
        {companyName},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-4xl mx-auto my-10">
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <Button variant="outline">Cancel</Button>
          <Button className="ml-4" onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
