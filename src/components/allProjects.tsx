import ProjectCard from "./projectCard";
import ComingSoon from "../assets/coming-soon.svg";
import CalculatorScr from "../assets/calculatorScr.svg";
import CepSiteImg from "../assets/cepSiteImg.svg";
import TaskfullPreview from "../assets/taskfullpreview.svg";

export default function AllProjects(){
    return(
        <div className="my-16 max-w-7xl rounded-md flex flex-wrap justify-center gap-20">
            <ProjectCard href="https://taskfull-web.vercel.app"
            projectName="Taskfull APP"
            techs={["Typescript", "React", "TailwindCSS", "express (node)", "Prisma - ORM"]}
            image={TaskfullPreview} description="
            Site de gerenciamento de tarefas, inspirado na semana nlw setup da rocketseat. Utilizando banco de dados em postgreSQL, gerenciado pela ORM prismaJS e API criada em express." />

            <ProjectCard href="https://ver-cep-app.vercel.app"
            projectName="Ver CEP"
            techs={["React", "TailwindCSS", "NextJS", "Typescript"]}
            image={CepSiteImg} description="
            Site feito utilizando NextJS, com base no consumo da API Viacep, que mostra os dados de cada localidade de acordo com o CEP inserido."/>

            <ProjectCard href="https://calculator-reactproject.vercel.app"
            projectName="REACT CALCULATOR"
            techs={["React", "CSS", "Vite", "Typescript"]}
            image={CalculatorScr} description="
            Calculadora simples feita em react, utilizando o template de projetos do viteJS. Utilizados também: Html, Css, Javascript." />

            <ProjectCard href="" 
            projectName="PROJECT NAME"
            techs={[]} 
            image={ComingSoon} description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum aliquam quasi numquam tempore vitae, dicta ad exercitationem! Ullam modi recusandae similique provident sint excepturi cumque accusamus perferendis cum dolor." />
        </div>
    )
}