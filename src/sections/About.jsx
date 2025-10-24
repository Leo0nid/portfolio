import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";


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
               <p className="flex items-end text-5xl text-gray-500">
              МОЙ СТЭК
            </p>
            <Card style={{ rotate: "75deg" ,top:"30%", left: "60%"}} text="TypeScript"   containerRef={grid2Container}/>
            <Card style={{ rotate: "-30deg" ,top:"60%", left: "30%"}} text="JavaScript"  containerRef={grid2Container}/>
            <Card style={{ rotate: "90deg" ,bottom:"30%", left: "70%"}} text="Vue"       containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"25%", left: "38%"}} text="Nuxt"         containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"5%", left: "8%"}} text="React"        containerRef={grid2Container}/>
            <Card style={{ rotate: "25deg" ,top:"29%", left: "8%"}} text="Tailwind"        containerRef={grid2Container}/>
            </div>
            </div>
        {/* Grid 3 */}
        <div  className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Формат работы</p>
            <p className="subtext">
              Готов к удалённому формату и гибкому графику.
            </p>
            </div> 
          <figure className="absolute left-[30%] top-[10%]"><Globe/></figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
              <p className="text-center headtext">Открыт к сотрудничеству и коммерческим проектам.</p>
              <CopyEmailButton/>
          </div>
        </div>

        {/* Grid 5 */}
          <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Мой стек</p>
            <p className="subtext">
                    Я специализируюсь на различных языках, фреймворках и инструментах,
                    которые позволяют создавать надёжные и масштабируемые приложения.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
     
        
      </div>
    </section>
  );
};

export default About;
