import { useParams } from "react-router-dom";
import ApplicantsTable from "./ApplicantsTable";
import useGetAllApplicants from "@/hooks/useGetAllApplicants";
import { useSelector } from "react-redux";


const Applicants = () => {
  const params = useParams();
  useGetAllApplicants(params.id);

  const { allApplicants } = useSelector((state) => state.application);
  if (!allApplicants || !allApplicants.applications) {
    return <p>Loading applicants...</p>;
  }


  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-xl font-bold my-5">
        Applicants: <span className="text-blue-500">({allApplicants.applications.length})</span>
      </h1>
      <ApplicantsTable/>
    </div>
  );
};

export default Applicants;
