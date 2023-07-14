import { Contents } from '@/components/Contents'
import { Genre } from '@/components/Genre'
import { Menu } from '@/components/Menu'

export default function Home() {
  return (
    <main className="grid  min-h-screen grid-cols-5 grid-rows-6">
      {/* grid de menus */}
      <Menu />
      {/* grid de generos */}
      <Genre />
      {/* grid dos conteúdos */}
      <Contents />
    </main>
  )
}
