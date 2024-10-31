import { useParams } from "react-router-dom";
import ApplicantsTable from "./ApplicantsTable";
import useGetAllApplicants from "@/hooks/useGetAllApplicants";


const Applicants = () => {
  const params = useParams();
   useGetAllApplicants(params.id);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl font-bold my-5">
        Applicants: <span className="text-blue-500">(3)</span>
      </h1>
      <ApplicantsTable/>
    </div>
  );
};

export default Applicants;
