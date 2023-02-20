import ProfilePhoto from "../assets/profile-photo 1"

export default function ProfileCard(){
    return(
        <div className="max-w-sm flex items-center justify-center flex-col rounded-md shadow-md bg-gray-200 pb-7">
            <div className="w-full px-10 py-3 bg-gray-400 flex justify-center">
                <ProfilePhoto />
            </div>
            <h1 className="text-3xl">Arthur Ian</h1>

            <ul className="w-full px-3 py-3">
                <li className="text-2xl">Profile</li>
                <li>Entusiasta apaixonado por tecnologia e sempre buscando melhorar. Atualmente estudando desenvolvimento web tanto back-end quanto front-end. <br></br><br></br> confira abaixo alguns dos meus projetos:</li>
            </ul>
        </div>
    )
}