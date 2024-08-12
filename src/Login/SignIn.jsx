import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Image from "./img2.jpg";

function Login() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      console.log(`Navigating to ${path}`); // Debugging output
      navigate(path);
  };
  const handleSignIn = () => {
    alert('Sign in successfully');
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative p-8 bg-white bg-opacity-70 backdrop-blur-md rounded-lg">
          <Card id="signin" className="w-[360px]">
            <CardHeader>
              <CardTitle className="text-pink-600">Sign In</CardTitle>
              <CardDescription className="text-pink-500">
                Unlock a world of freshly baked delights—login and treat yourself to your favorite flavors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-4">
                <div className="flex flex-col items-start space-y-2">
                  <Label className="text-pink-600" htmlFor="email">Email</Label>
                  <Input className="text-pink-600 rounded-md" id="email" type="email" placeholder="abc@gmail.com" />
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <Label className="text-pink-600" htmlFor="password">Password</Label>
                  <Input className="text-pink-600 rounded-md" id="password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Button className="w-full bg-pink-600 text-white hover:bg-black rounded-md" onClick={handleSignIn}>Sign In</Button>
              <div className="flex items-center space-x-2 mt-4">
                <Label className="text-gray-600" htmlFor="signup">Not have an account?</Label>
                <Label className="text-pink-600 cursor-pointer" htmlFor="signup"   onClick={() => handleNavigation('/signup')}>Sign Up</Label>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
