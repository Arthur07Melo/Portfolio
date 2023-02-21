import ProfileCard from "./profileCard";
import AllProjects from "./allProjects";


export default function MainComponent(){
    return (
        <main className="flex flex-col items-center justify-center bg-gray-300">
            <ProfileCard />
            <AllProjects />
        </main>
    )
}