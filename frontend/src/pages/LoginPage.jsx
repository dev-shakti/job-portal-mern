import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { loginUser } from "@/http/apis";
import { setLoading, setUser } from "@/store/authSlice";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginPage = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    role:""
  });
  const { isLoading} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedInUser = async (formData) => {
    try {
      dispatch(setLoading(true));
      const response = await loginUser(formData);
      console.log(response.data);
      if (response.status === 201) {
        dispatch(setUser(response.data.user))
        navigate("/");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", formInputs.email);
    formData.append("password", formInputs.password);
    formData.append("role", formInputs.role);
    loggedInUser(formData);
    setFormInputs({
      email: "",
      password: "",
      role:""
    });
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account. <br />
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({ ...formInputs, password: e.target.value })
              }
              type="password"
              required
            />
          </div>
          <div className="grid gap-2">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formInputs.role === "student"}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, role: e.target.value })
                  }
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={formInputs.role === "recruiter"}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, role: e.target.value })
                  }
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Button
              className="w-full"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="ml-2">Login</span>
                </>
              ) : (
                <span className="ml-2">Login</span>
              )}
            </Button>

            <div className="mt-4 text-center text-sm">
              Don't have an account?
              <Link to={"/auth/register"} className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LoginPage;
