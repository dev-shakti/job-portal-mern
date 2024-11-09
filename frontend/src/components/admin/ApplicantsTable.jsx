import { MoreHorizontal } from "lucide-react";
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
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utilis/const";
import { toast } from "sonner";

const selectedStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { allApplicants } = useSelector((state) => state.application);

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        {
          withCredentials: true,
        }
      );
    
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <Table>
      <TableCaption>A list of applicants</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead> FullName</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>PhoneNumber</TableHead>
          <TableHead>Resume</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!allApplicants?.applications || allApplicants.applications.length === 0 ? (
           <TableRow>
           <TableCell colSpan={6} className="text-center text-red-500">
             No Applicants Found
           </TableCell>
         </TableRow>
        ) : (
          allApplicants.applications.map((application) => (
            <tr key={application._id}>
              <TableCell>{application?.applicant?.fullname}</TableCell>
              <TableCell>{application?.applicant?.email}</TableCell>
              <TableCell>{application?.applicant?.phoneNumber}</TableCell>

              <TableCell>
                {application?.applicant?.profile?.resume ? (
                  <a
                    href={application?.applicant?.profile?.resume}
                    className="text-blue-600 cursor-pointer"
                  >
                    {application?.applicant?.profile?.resumeOriginalName}
                  </a>
                ) : (
                  <span>NA</span>
                )}
              </TableCell>
              <TableCell>
                {application?.applicant?.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    {selectedStatus.map((status, index) => (
                      <div
                        key={index}
                        onClick={() => statusHandler(status, application._id)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <span className="text-sm">{status}</span>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ApplicantsTable;
