import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useGetAllCompanies } from "@/hooks/useGetAllCompanies";
import AdminCompanyTable from "./AdminCompanyTable";

const Companies = () => {
  useGetAllCompanies()
  const [input, setInput] = useState("");
  
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <Input
          className="w-fit"
          placeholder="Filter by name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to="/admin/company/create">
          <Button>New Company</Button>
        </Link>
      </div>
      <AdminCompanyTable/>
    </div>
  );
};

export default Companies;
