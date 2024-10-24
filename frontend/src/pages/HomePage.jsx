import CarousalCats from "@/components/CarousalCats"
import Hero from "@/components/Hero"
import LatestJobs from "@/components/LatestJobs"
import { useGetAllJobs } from "@/hooks/useGetAllJobs"


const HomePage = () => {
  useGetAllJobs()
  return (
    <>
      <Hero/>
      <CarousalCats/>
      <LatestJobs/>
    </>
  )
}

export default HomePage
