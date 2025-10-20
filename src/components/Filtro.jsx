const FiltroMobile = () => {
    return (
    <details>
        <summary>Filtro</summary>
        <ul>
            <li>Tudo</li>
            <li>Roupas masculinas</li>
            <li>Roupas femininas</li>
            <li>Joias</li>
            <li>Eletrônicos</li>
        </ul>
    </details>
    )
}

const FiltroDesktop = () => {
    return (
    <ul>
        <li>Tudo</li>
        <li>Roupas masculinas</li>
        <li>Roupas femininas</li>
        <li>Joias</li>
        <li>Eletrônicos</li>
    </ul>
    )
}


const Filtro = ({device}) => {
    return (device === 'mobile' ? <FiltroMobile /> : <FiltroDesktop />)    
}

export default Filtro;
