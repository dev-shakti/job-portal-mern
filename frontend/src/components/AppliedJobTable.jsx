import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";


const AppliedJobTable = () => {

  const {allAppliedJobs}=useSelector((state) => state.job);

  return (
    <Table>
      <TableCaption>A list of your applied jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Job Type</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allAppliedJobs.length<=0 ? <span>You have not apply any jobs yet.</span> : (
          allAppliedJobs.map((appliedJob) => (
            <tr key={appliedJob._id}>
               <TableCell className="font-medium">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
              <TableCell>{appliedJob?.job?.title}</TableCell>
              <TableCell>{appliedJob?.job?.jobType}</TableCell>
              <TableCell>{appliedJob?.job?.company?.name}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`${
                    appliedJob?.status=== "accepted"
                      ? "bg-green-500"
                      :appliedJob?.status === "rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {appliedJob?.status}
                </Badge>
              </TableCell>
            </tr>
          ))
        )}
     
      </TableBody>
    </Table>
  );
};

export default AppliedJobTable;
