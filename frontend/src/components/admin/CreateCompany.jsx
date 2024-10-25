import { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateCompany = () => {

  const [input,setInput]=useState('');

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
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <Button variant="outline">Cancel</Button>
          <Button className="ml-4">Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
