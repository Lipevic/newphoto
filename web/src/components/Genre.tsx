export function Genre() {
  return (
    <div className="col-span-1 row-span-5  flex  flex-col bg-yellow-700 p-2">
      <div className="flex flex-1 flex-col items-center justify-center">
        {' '}
        <p className="w-[250px] text-center leading-relaxed">
          Nenhum genero cadastrado{' '}
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
