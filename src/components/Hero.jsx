import profileImage from "../assets/profile1.jpeg";
import profileImage3 from "../assets/profile3.jpg";
import profileImage2 from "../assets/profile2.jpeg";
import { IoArrowForward } from "react-icons/io5";
import heroImage from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center bg-emerald-950 text-orange-50 ">
      <div className="w-full p-8 lg:w-1/2">
        <div className=" mb-4 flex space-x-2">
          <img
            src={profileImage}
            alt=""
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profileImage2}
            alt=""
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
          <img
            src={profileImage3}
            alt=""
            className="h-12 w-12 rounded-full border-2 border-orange-50"
          />
        </div>
        <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-7xl">
          We create impactful ads that{" "}
          <span className="text-orange-500">elevate </span>your brand
        </h1>
        <button className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800">
          <span className="">Know More</span>
          <IoArrowForward />
        </button>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8">
        <img src={heroImage} alt="" className="h-auto w-full" />
      </div>
    </section>
  );
};

export default Hero;
