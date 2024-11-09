import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminCompanyTable = () => {
  const { searchCompanyByText,companies } = useSelector((state) => state.company);
  const [filterCompany,setFilterCompany]=useState(companies);
 
  useEffect(()=>{
    const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
        if(!searchCompanyByText){
          return true;
        };
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

    });
    setFilterCompany(filteredCompany);
},[companies,searchCompanyByText])
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterCompany.length <= 0 ? (
            <span className=" text-red-600">***You haven't registered any company yet.</span>
          ) : (
            filterCompany?.map((company) => (
              <tr key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company.logo} />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Edit2 className="h-4" />
                        <Link to={`/admin/company/${company._id}`}>
                          <span className="text-sm">Edit</span>
                        </Link>
                      </div>
                 
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminCompanyTable;
