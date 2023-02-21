import ProjectCard from "./projectCard"

export default function AllProjects(){
    return(
        <div className="my-16 w-10/12 rounded-md flex flex-wrap justify-center gap-3">
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
            <ProjectCard href="#" projectName="PROJECT NAME" />
        </div>
    )
}