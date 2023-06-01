import Image from "next/image"
import User from '../assets/svg/user.svg'

export function NavBar () {
  return (
    <div className="py-4 flex bg-indigo-600 h-20 min-w-max justify-around items-center">
    <div className="text-gray-50 font-sans text-center">Clique no ícone</div>
    <div className=""><Image src={User} alt="" width={50}/></div>
   </div>
  )
}
