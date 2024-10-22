import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,  // Add this for accessibility
  } from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "@/http/apis";
import { setLoading, setUser } from "@/store/authSlice";

const UpdateProfileDialog = ({ open, setOpen }) => {

  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch=useDispatch();

  const [inputs, setInputs] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills,
    file: user?.profile?.resume,
  });

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setInputs({ ...inputs, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", inputs.fullname);
    formData.append("email", inputs.email);
    formData.append("phoneNumber", inputs.phoneNumber);
    formData.append("skills", inputs.skills);
    formData.append("bio", inputs.bio);
    if (inputs.file) {
      formData.append("file", inputs.file);
    }

    try {
        dispatch(setLoading(true))
      const response = await updateUser(formData);
      if(response.status===200){
        dispatch(setUser(response.data.user))
      }
    } catch (error) {
      console.log(error);
    }finally{
        dispatch(setLoading(false))
    }
  };
  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader className="text-xl font-medium">
        <DialogTitle>Update Profile</DialogTitle>
        <DialogDescription className="sr-only">
            Use this form to update your profile information.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="fullname">Fullname</Label>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                className="col-span-3"
                value={inputs.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                className="col-span-3"
                value={inputs.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="col-span-3"
                value={inputs.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="bio">Bio</Label>
              <Input type="text" name="bio" value={inputs.bio}
                onChange={handleInputChange} id="bio" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="skills">Skills</Label>
              <Input
                type="text"
                name="skills"
                id="skills"
                className="col-span-3"
                value={inputs.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="file">Resume</Label>
              <Input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleFileChange}
                id="file"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
          {isLoading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Update
            </Button>
          )}
        </DialogFooter>
        </form>
       
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
