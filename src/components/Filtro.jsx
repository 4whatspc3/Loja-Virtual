const FiltroMobile = ({handleFiltro}) => {
    return (
    <details>
        <summary>Filtro</summary>
        <ul>
            <li onClick={() => handleFiltro('All')}>Tudo</li>
            <li onClick={() => handleFiltro("men's clothing")}>Roupas masculinas</li>
            <li onClick={() => handleFiltro("women's clothing")}>Roupas femininas</li>
            <li onClick={() => handleFiltro("jewelery")}>Joias</li>
            <li onClick={() => handleFiltro("electronics")}>Eletrônicos</li>
        </ul>
    </details>
    )
}

const FiltroDesktop = ({handleFiltro}) => {
    return (
    <ul>
        <li onClick={() => handleFiltro('All')}>Tudo</li>
        <li onClick={() => handleFiltro("men's clothing")}>Roupas masculinas</li>
        <li onClick={() => handleFiltro("women's clothing")}>Roupas femininas</li>
        <li onClick={() => handleFiltro("jewelery")}>Joias</li>
        <li onClick={() => handleFiltro("electronics")}>Eletrônicos</li>
    </ul>
    )
}


const Filtro = ({device, handleFiltro}) => {
    return (device === 'mobile' ? <FiltroMobile handleFiltro={handleFiltro} /> : <FiltroDesktop handleFiltro={handleFiltro} />)    
}

export default Filtro;
