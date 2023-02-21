import ProfileCard from "./profileCard";
import AllProjects from "./allProjects";
import Footer from "./footer";


export default function MainComponent(){
    return (
        <main className="flex flex-col items-center justify-center bg-[url('../src/assets/bg-image.svg')] bg-no-repeat bg-cover bg-fixed bg-center">
            <ProfileCard />

            <div className="w-full bg-gradient-to-tr from-white to-gray-500 flex justify-center">
                <AllProjects />
            </div>

            <Footer />
        </main>
    )
}