export default function Home() {
  return (
    <main className="container mx-auto rounded-lg bg-gray-300 p-5 sm:mt-5">
      <div className="display grid h-[720px] p-3 sm:h-96 sm:grid-cols-2">
        <div className="mb-2 rounded-md bg-[url('/src/01.webp')] bg-cover bg-center sm:row-start-1 sm:row-end-3 sm:mr-2"></div>
        <div className="mb-2 rounded-md bg-[url('/src/02.webp')] bg-cover bg-center"></div>
        <div className="mb-2 rounded-md bg-[url('/src/03.webp')] bg-cover bg-center"></div>
      </div>
      <div className="p-3 text-xl font-bold">Título da casa</div>
      <div className="flex p-3">
        <div className="mr-2 rounded-2xl bg-green-900 px-3 py-1 text-white hover:cursor-pointer hover:bg-green-600">
          Campo
        </div>
        <div className="mr-2 rounded-2xl bg-green-900 px-3 py-1 text-white hover:cursor-pointer hover:bg-green-600">
          Moderno
        </div>
        <div className="rounded-2xl bg-green-900 px-3 py-1 text-white hover:cursor-pointer hover:bg-green-600">
          Piscina
        </div>
      </div>
    </main>
  );
}
