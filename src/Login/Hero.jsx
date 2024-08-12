import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "./img3.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        console.log(`Navigating to ${path}`); // Debugging output
        navigate(path);
    };

    return (
        <div id="home" className="text-white relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
            <div className="absolute top-0 right-0 m-4 flex space-x-4 z-50">
                <Button
                    onClick={() => handleNavigation('/signin')}
                    className="bg-[#ff36cd] w-[120px] rounded-md font-medium py-3 hover:bg-white text-black transition-all"
                >
                    SignIN
                </Button>
                <Button
                    onClick={() => handleNavigation('/signup')}
                    className="bg-[#ff36cd] w-[120px] rounded-md font-medium py-3 hover:bg-white text-black transition-all"
                >
                    SignUp
                </Button>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold md:py-6 drop-shadow-lg">DREAM BAKERS</h1>
                <div className="bg-black bg-opacity-25 rounded-lg p-4">
                    <p className="md:text-3xl sm:text-2xl text-xl font-bold text-[#fc37cb] py-4">
                        Indulge in the freshest flavors, Our bakery's <br />refreshments are crafted to delight every bite
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Hero;
