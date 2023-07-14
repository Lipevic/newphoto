export function Contents() {
  return (
    <div className="col-span-4 row-span-5  flex flex-col bg-orange-700 p-2 ">
      <div className="flex flex-1 items-center justify-center">
        {' '}
        <p className="w-[250px] text-center leading-relaxed">
          {' '}
          Nenhum conteúdo cadastrado{' '}
          <a
            className="underline hover:text-gray-100 hover:no-underline"
            href=""
          >
            Adicione aqui!
          </a>{' '}
        </p>
      </div>
    </div>
  )
}
