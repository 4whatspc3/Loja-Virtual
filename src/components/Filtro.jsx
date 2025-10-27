const Filtro = ({handleFiltro}) => {
    return (
    <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-medium font-inter text-sky-700 ">Categorias</h2>
        <ul className="font-inter w-full p-2 pb-4 flex gap-4 overflow-auto text-2xl text-nowrap text-blue-400">
            <li onClick={() => handleFiltro('All')} className="border p-2 pr-4 pl-4 rounded-2xl">Tudo</li>
            <li onClick={() => handleFiltro("men's clothing")} className="border p-2 pr-4 pl-4 rounded-2xl">Roupas masculinas</li>
            <li onClick={() => handleFiltro("women's clothing")} className="border p-2 pr-4 pl-4 rounded-2xl">Roupas femininas</li>
            <li onClick={() => handleFiltro("jewelery")} className="border p-2 pr-4 pl-4 rounded-2xl">Joias</li>
            <li onClick={() => handleFiltro("electronics")} className="border p-2 pr-4 pl-4 rounded-2xl">Eletrônicos</li>
        </ul>
    </div>
    )
}

export default Filtro;
