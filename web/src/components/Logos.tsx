import logoTS from '../assents/logo_ts.png'
import logoJS from '../assents/logo-javascript.png'
import logoReact from '../assents/logo-react.png'
import logoNode from '../assents/logo-nodejs.png'
import logoSQLite from '../assents/logo_sqlite.png'
import logoPrisma from '../assents/logo-prisma.png'
import Image from 'next/image'

export function Logos() {
  return (
    <div className="fixed flex space-x-2 ">
      <Image className="h-16 w-16" src={logoTS} alt="logo do TypeScript" />
      <Image className="h-16 w-16" src={logoReact} alt="logo do React" />
      <Image
        className="h-16 w-16 rounded-lg"
        src={logoPrisma}
        alt="logo do Prisma"
      />

      <Image
        className="h-16 w-16 rounded-full bg-white"
        src={logoSQLite}
        alt="logo do SQLite"
      />
      <Image
        className="h-16 w-16 rounded-full  border-2 border-white bg-white"
        src={logoNode}
        alt="logo do Node.js"
      />
      <Image className="h-16 w-16" src={logoJS} alt="logo do JavaScript" />
    </div>
  )
}
