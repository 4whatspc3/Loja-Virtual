import imageHero from "../../assets/hero/carrinho.png"

const Hero = () => {
    return (
        <header className="h-svh min-h-200 bg-sky-50 p-4 m-2 rounded-xl flex flex-col items-center gap-10
                           sm:p-8 sm:gap-30 md:pt-12 xl:flex-row xl:justify-center"> 
            <div className="xl:flex xl:flex-col xl:gap-40">
                <h1 className="w-full max-w-120 text-center text-8xl text-sky-700 font-bold font-inter italic xl:max-w-full xl:text-9xl">
                    Aqui Tem <br className="hidden xl:inline"/>de Tudo
                </h1>
                <button className="hidden xl:block mx-auto rounded-2xl bg-white text-2xl font-medium font-inter text-sky-400 border border-sky-400 p-2 pl-4 pr-4">
                    Compre já!
                </button>
            </div>
            <div className="w-full flex flex-col items-center gap-10 md:flex-row md:justify-between md:max-w-220 xl:justify-center">
                <figure className="w-full max-w-100 md:max-w-120">
                    <img src={imageHero} alt="Carrinho de compras" className="w-full h-auto object-cover"/>
                </figure>
                <button className="block mx-auto rounded-2xl bg-white text-2xl font-medium font-inter text-sky-400 border border-sky-400 p-2 pl-4 pr-4 md:mx-0 xl:hidden">
                    Compre já!
                </button>
            </div>
        </header>
    )
}

export default Hero;