import ComingSoon from "../assets/coming-soon.svg"
import Image from "next/image";

type propsType = {
    href: string,
    projectName:string,
    image: any,
    description: string
}


export default function ProjectCard(props:propsType){
    return(
        <div className="flex flex-col justify-center items-center max-w-sm shadow-lg">
            <div className="w-fit rounded-md flex items-center justify-center">
                <a href={props.href}><Image className="rounded-t-md hover:brightness-50" src={props.image} width={384} alt="project image" /></a>
            </div>

            <div className="bg-gray-200 w-full h-full flex flex-col rounded-md p-3">
                <h1 className="text-3xl w-fit">{props.projectName}</h1>
                <h1 className="text-2xl w-fit pt-10">Description</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}