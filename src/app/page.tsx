'use client'
import { useState } from 'react'
import Image from 'next/image'
import User from '../assets/svg/user.svg'
import Avatar from '../assets/svg/Avatar.svg'
import ArrowClose from '../assets/svg/arrowClose.svg'
import ArrowOpen from '../assets/svg/arrowOpen.svg'
export default function Home() {
  const [getProfile, setProfile] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div className="relative flex h-20 min-w-max items-center justify-between bg-indigo-600 p-6 py-4">
        <div className="cursor-pointer" onClick={() => setProfile(!getProfile)}>
          <Image src={User} alt="" width={50} />
        </div>
        <div className="text-center font-sans text-gray-50 ">
          Clique no ícone
        </div>
      </div>
      {getProfile && (
        <div className="absolute flex flex-col justify-between bg-indigo-200 p-4">
          <div className="flex flex-row items-center">
            <Image src={Avatar} alt="" />
            <div className="flex flex-col p-2">
              <h3 className="font-bold">Victória Vasconcelos</h3>
              <span>victoria.vasconcelos@hotmail.com</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-0.5 min-w-full bg-slate-700 opacity-70"></div>
            <h5 className="p-2 ">CONTA</h5>

            <div>
              <span>Dados pessoais</span>
              <div>
                {isActive ? (
                  <Image src={ArrowClose} alt="" />
                ) : (
                  <Image src={ArrowOpen} alt="" />
                )}
              </div>
            </div>
            <div>informação de login</div>

            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  )
}
