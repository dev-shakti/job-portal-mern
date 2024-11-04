import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/http/apis";
import { setUser } from "@/store/authSlice";
import { LogOut, User2 } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.status === 200) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };
  return (
    <nav className="border-b bg-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* left */}
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold">
              Job <span className="text-[#F83002]">Portal</span>
            </h2>
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-4">
            {user && user?.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/auth/register">
                <Button variant={"outline"}>Signup</Button>
              </Link>
              <Link to="/auth/login">
                <Button className="bg-[#8e44ad]">Login</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold">{user?.fullname}</span>
                    <span className="text-xs font-medium text-gray-600">
                      {user?.profile?.bio}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/profile">
                    <Button variant="link" className="flex items-center gap-2">
                      <User2 />
                      <span>View Profile</span>
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      className="flex items-center gap-2"
                      variant="link"
                      onClick={handleLogout}
                    >
                      <LogOut />
                      <span>Logout</span>
                    </Button>
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
