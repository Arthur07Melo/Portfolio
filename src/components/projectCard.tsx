import ComingSoon from "../assets/coming-soon.svg"
import Image from "next/image";

type propsType = {
    href: string,
    projectName:string,
    image: any,
    description: string,
    techs: string[]
}

export default function ProjectCard(props:propsType){
    return(
        <div className="flex flex-col justify-center items-center max-w-sm shadow-lg">
            <div className="w-fit rounded-md flex items-center justify-center">
                <a href={props.href} target="_blank"><Image className="rounded-t-md transition-all duration-300 hover:brightness-50" src={props.image} width={384} alt="project image" /></a>
            </div>

            <div className="bg-gray-200 w-full h-full flex flex-col rounded-b-md p-3">
                <h1 className="text-3xl w-fit">{props.projectName}</h1>

                <div className="flex gap-2 flex-wrap">
                    {props.techs.map(tech => (
                    <div className="bg-gray-600 text-gray-200 font-bold rounded-lg shadow-md px-3 py-1 transition-all duration-300 cursor-default hover:bg-gray-700">{tech}</div>
                    ))}
                </div>

                <h1 className="text-2xl w-fit pt-6">Description</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}