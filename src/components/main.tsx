import ProfileCard from "./profileCard";
import AllProjects from "./allProjects";


export default function MainComponent(){
    return (
        <main className="flex flex-col items-center justify-center bg-gradient-to-tr from-white to-gray-600">
            <div className="w-full bg-[url('../src/assets/bg-image.svg')] bg-no-repeat bg-cover bg-fixed bg-center flex justify-center">
                <ProfileCard />
            </div>
            <AllProjects />
        </main>
    )
}