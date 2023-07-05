'use client'
import { useState } from 'react'
import Image from 'next/image'
import User from '../assets/svg/user.svg'
import Avatar from '../assets/svg/Avatar.svg'
import Key from '../assets/svg/key.svg'
import ArrowClose from '../assets/svg/arrowClose.svg'
import ArrowOpen from '../assets/svg/arrowOpen.svg'
import Acess from '../assets/svg/acess.svg'
import Notification from '../assets/svg/notification.svg'
import Conexão from '../assets/svg/conexão.svg'
import Contas from '../assets/svg/contas.svg'
import Help from '../assets/svg/help.svg'
import Exit from '../assets/svg/exit.svg'
export default function Home() {
  const [getProfile, setProfile] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div className="relative flex h-20 min-w-max items-center justify-between bg-indigo-600 p-6 py-4">
        <div className="cursor-pointer" onClick={() => setProfile(!getProfile)}>
          <Image src={User} alt="" width={50} />
        </div>
        <div className="text-center font-sans text-4xl text-gray-50">
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
          <div className="flex flex-col gap-2">
            <div className="h-[0.1px] min-w-full bg-slate-700 opacity-10"></div>
            <h5 className="py-2 font-semibold text-zinc-500">CONTA</h5>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={User} alt="" />
                <span>Dados pessoais</span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? (
                  <Image src={ArrowClose} alt="" />
                ) : (
                  <Image src={ArrowOpen} alt="" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image src={Key} alt="" />
                <span>Informações de login</span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? (
                  <Image src={ArrowClose} alt="" />
                ) : (
                  <Image src={ArrowOpen} alt="" />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 py-3">
              <div className="h-[0.1px] min-w-full bg-slate-700 opacity-10"></div>
              <h5 className="py-2 font-semibold text-zinc-500">PREFERÊNCIA</h5>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image src={Notification} alt="" />
                  <span>Notificações</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  {isActive ? (
                    <Image src={ArrowClose} alt="" />
                  ) : (
                    <Image src={ArrowOpen} alt="" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image src={Acess} alt="" />
                  <span>Acessibilidade</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  {isActive ? (
                    <Image src={ArrowClose} alt="" />
                  ) : (
                    <Image src={ArrowOpen} alt="" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-3">
              <div className="h-[0.1px] min-w-full bg-slate-700 opacity-10"></div>
              <h5 className="py-2 font-semibold text-zinc-500">PRIVACIDADE</h5>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image src={Conexão} alt="" />
                  <span>Aparelhos conectados</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  {isActive ? (
                    <Image src={ArrowClose} alt="" />
                  ) : (
                    <Image src={ArrowOpen} alt="" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Image src={Contas} alt="" />
                  <span>Contas vinculadas</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setIsActive(!isActive)}
                >
                  {isActive ? (
                    <Image src={ArrowClose} alt="" />
                  ) : (
                    <Image src={ArrowOpen} alt="" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 py-3">
              <div className="h-[0.1px] min-w-full bg-slate-700 opacity-10"></div>
              <div className="flex items-center gap-2 pt-3">
                <Image src={Help} alt="" />
                <span>Central de Ajuda</span>
              </div>
              <div className="flex items-center gap-1">
                <Image src={Exit} alt="" />
                <span className="text-red-700">Sair</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
