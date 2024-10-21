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

const statuses = ["Pending", "Success", "Rejected"];

const AppliedJobTable = () => {
  return (
    <Table>
      <TableCaption>A list of your applied jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {Array.from({ length: 5 }, (_, index) => {
    
          const status = statuses[Math.floor(Math.random() * statuses.length)];

          return (
            <TableRow key={index}>
              <TableCell className="font-medium">21.10.2024</TableCell>
              <TableCell>Fulltime</TableCell>
              <TableCell>Microsoft</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={`${
                    status === "Success"
                      ? "bg-green-500"
                      : status === "Rejected"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {status}
                </Badge>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AppliedJobTable;
