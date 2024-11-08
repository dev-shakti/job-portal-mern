import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useGetAllCompanies } from "@/hooks/useGetAllCompanies";
import AdminCompanyTable from "./AdminCompanyTable";
import { setSearchCompanyByText } from "@/store/companyslice";
import { useDispatch } from "react-redux";

const Companies = () => {
  useGetAllCompanies()
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(setSearchCompanyByText(input))
  },[input,dispatch])
  
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
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
