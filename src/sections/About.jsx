import { useRef } from "react";
import Card from "../components/Card";


const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" >
      <h2 className="text-heading">Обо мне</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1"> 
          <img src="src/assets/coding-pov.png" alt="coding" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
        <div className="z-10">
            <p className="subtext">Frontend - разработчик </p>
        </div>
        </div>
        {/* Grid 2 */}
          <div className="grid-default-color grid-2 ">
            <div ref={grid2Container} className="flex justify-center items-center w-full h-full">
            <Card style={{ rotate: "75deg" ,top:"30%", left: "60%"}} text="TypeScript"   containerRef={grid2Container}/>
            <Card style={{ rotate: "-30deg" ,top:"60%", left: "30%"}} text="JavaScript"  containerRef={grid2Container}/>
            <Card style={{ rotate: "90deg" ,bottom:"30%", left: "70%"}} text="Vue"       containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"10%", left: "38%"}} text="Nuxt"         containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"10%", left: "38%"}} text="React"        containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"10%", left: "38%"}} text="Tailwind"        containerRef={grid2Container}/>
            </div>
            </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3"> </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4"></div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5"></div>
     
        
      </div>
    </section>
  );
};

export default About;
