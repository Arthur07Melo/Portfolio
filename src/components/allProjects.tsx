import ProjectCard from "./projectCard"

export default function AllProjects(){
    return(
        <div className="my-16 max-w-7xl rounded-md flex flex-wrap justify-center gap-20">
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
        </div>
    )
}