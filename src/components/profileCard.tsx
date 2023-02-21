import ProfilePhoto from "../assets/profile-photo 1.svg"
import Image from "next/image"


export default function ProfileCard(){
    return(
        <div className="max-w-sm flex items-center justify-center flex-col rounded-md shadow-lg bg-gray-200 pb-7 mt-32 mb-12">
            <div className="w-full px-10 py-3 bg-gray-400 flex justify-center rounded-t-md">
                <Image className="rounded-full" src={ProfilePhoto} alt="Profile Photo" />
            </div>
            <h1 className="text-3xl">Arthur Ian</h1>

            <ul className="w-full px-3 py-3">
                <li className="text-2xl">Profile</li>
                <li>Entusiasta apaixonado por tecnologia e sempre buscando melhorar. Atualmente estudando desenvolvimento web tanto back-end quanto front-end. <br></br><br></br> confira abaixo alguns dos meus projetos:</li>
            </ul>
        </div>
    )
}