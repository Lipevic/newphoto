import { Logos } from './Logos'
import { User } from 'lucide-react'

export function Menu() {
  return (
    <div className="col-span-5 row-span-1 flex p-2">
      {/* logos */}
      <Logos />
      {/* sign in */}
      <a
        className=" fixed right-2  flex w-[250px] items-center justify-center space-x-2"
        href=""
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
          <User className="h-5 w-5 text-gray-500" />
        </div>
        <p className="w-[180px] text-center transition-colors hover:text-gray-100">
          <span className="underline ">Crie sua conta</span> e adicione seus
          videos e fotos
        </p>
      </a>
    </div>
  )
}
