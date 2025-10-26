import imageHero from "../../assets/hero/carrinho.png"

const Hero = () => {
    return (
        <header className="h-svh bg-sky-50 p-4 m-2 rounded-xl flex flex-col gap-10">
            <h1 className="text-8xl text-sky-700 font-bold font-inter italic ml-2">
                Aqui Tem de Tudo
            </h1>
            <figure>
                <img src={imageHero} alt="Carrinho de compras" className="w-full h-auto object-cover"/>
            </figure>
            <button className="block mx-auto rounded-2xl bg-white text-2xl font-medium font-inter text-sky-400 border border-sky-400 p-2 pl-4 pr-4">
                Compre já!
            </button>
        </header>
    )
}

export default Hero;