import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { registerUser } from "@/http/apis";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/store/authSlice";
import { Loader2 } from "lucide-react";

const RegisterPage = () => {
  const [formInputs, setFormInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const singupUser = async (formData) => {
    try {
      dispatch(setLoading(true));
      const response = await registerUser(formData);
      console.log(response.data);
      if (response.status===201) {
        navigate("/auth/login");
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
    formData.append("fullname", formInputs.fullname);
    formData.append("email", formInputs.email);
    formData.append("password", formInputs.password);
    formData.append("phoneNumber", formInputs.phoneNumber);
    formData.append("role", formInputs.role);
    if (formInputs.file) {
      formData.append("file", formInputs.file);
    }
    singupUser(formData);
    setFormInputs({
      fullname: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "",
      file: "",
    });
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter your details below to signup to your account. <br />
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Fullname</Label>
            <Input
              id="fullanme"
              type="text"
              name="fullname"
              value={formInputs.fullname}
              onChange={(e) =>
                setFormInputs({ ...formInputs, fullname: e.target.value })
              }
              placeholder="John Doe"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="text"
              value={formInputs.phoneNumber}
              onChange={(e) =>
                setFormInputs({ ...formInputs, phoneNumber: e.target.value })
              }
              placeholder="9326856937"
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
          <div className="grid gap-2">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={(e) =>
                setFormInputs({ ...formInputs, file: e.target.files?.[0] })
              }
              className="cursor-pointer"
              required
            />
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
                  <span className="ml-2">Sign up</span>
                </>
              ) : (
                <span className="ml-2">Sign up</span>
              )}
             
            </Button>

            <div className="mt-4 text-center text-sm">
              Already have an account?
              <Link to={"/auth/login"} className="underline">
                Sign in
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RegisterPage;
