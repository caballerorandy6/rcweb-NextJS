import Heading from "./Heading";
import { FaSuitcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="w-8/12 mx-auto h-screen">
      <div className="flex justify-center items-center gap-4">
        <FaSuitcase size="30px" className="text-gold" />
        <Heading>Work Experience</Heading>
      </div>
    </section>
  );
};

export default Experience;
