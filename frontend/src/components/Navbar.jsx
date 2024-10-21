import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const Navbar = () => {
  const user = false;
  return (
    <nav className="border-b bg-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* left */}
        <div>
          <h2 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h2>
        </div>
        {/* right */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/auth/register">
                <Button variant={"outline"}>Signup</Button>
              </Link>
              <Link to="/auth/login">
                <Button className='bg-[#8e44ad]'>Login</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <span className="text-sm font-bold">John Doe</span>
                </div>
                <div className="flex flex-col gap-6">
                  <Link>
                    <Button variant={"outline"} className="w-full">
                      View Profile
                    </Button>
                  </Link>
                  <Link>
                    <Button className="w-full">Logout</Button>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
