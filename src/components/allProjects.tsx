import ProjectCard from "./projectCard"
import ComingSoon from "../assets/coming-soon.svg"
import CalculatorScr from "../assets/calculatorScr.svg"

export default function AllProjects(){
    return(
        <div className="my-16 max-w-7xl rounded-md flex flex-wrap justify-center gap-20">
            <ProjectCard href="https://calculator-reactproject.vercel.app" projectName="REACT CALCULATOR" image={CalculatorScr} description="
            Calculadora simples feita em react, utilizando o template de projetos do viteJS. Utilizados também: Html, Css, Javascript." />
            <ProjectCard href="#" projectName="PROJECT NAME" image={ComingSoon} description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum aliquam quasi numquam tempore vitae, dicta ad exercitationem! Ullam modi recusandae similique provident sint excepturi cumque accusamus perferendis cum dolor." />
            <ProjectCard href="#" projectName="PROJECT NAME" image={ComingSoon} description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum aliquam quasi numquam tempore vitae, dicta ad exercitationem! Ullam modi recusandae similique provident sint excepturi cumque accusamus perferendis cum dolor." />
            <ProjectCard href="#" projectName="PROJECT NAME" image={ComingSoon} description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum aliquam quasi numquam tempore vitae, dicta ad exercitationem! Ullam modi recusandae similique provident sint excepturi cumque accusamus perferendis cum dolor." />
        </div>
    )
}