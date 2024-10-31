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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AdminJobTable = () => {
  const { searchJobByText, allAdminJobs } = useSelector((state) => state.job);
  const [filterJob, setFilterJob] = useState(allAdminJobs);

  useEffect(() => {
    const filteredJob =
    allAdminJobs.length >= 0 &&
    allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }
        return (
          job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
          job?.company?.name
            .toLowerCase()
            .includes(searchJobByText.toLowerCase())
        );
      });
    setFilterJob(filteredJob);
  }, [allAdminJobs, searchJobByText]);
  
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJob.length <= 0 ? (
            <span>You haven't posted any job yet.</span>
          ) : (
            filterJob?.map((job) => (
              <tr key={job._id}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Edit2 className="h-4" />
                        <Link to={`/admin/job/${job._id}`}>
                          <span className="text-sm">Edit</span>
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <Eye className="h-4" />
                        <Link to={`/admin/job/${job._id}/applicants`}>
                          <span className="text-sm">Applicant</span>
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

export default AdminJobTable;
