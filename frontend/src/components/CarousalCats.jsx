import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CarousalCats = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSearchCats = (cat) => {
    dispatch(setSearchQuery(cat))
    navigate("/browse")
  }

  return (
    <div className="hidden md:my-20 md:px-4">
      <Carousel className="w-full max-w-xl mx-auto">
        <CarouselContent className="-ml-1">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <Button variant="outline" className="rounded-full" onClick={() => handleSearchCats(cat)}>
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarousalCats;
