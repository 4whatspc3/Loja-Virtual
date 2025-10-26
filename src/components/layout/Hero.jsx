import imageHero from "../../assets/hero/carrinho.png"

const Hero = () => {
    return (
        <header className="h-svh bg-sky-50 p-4 m-2 rounded-xl">
            <h1 className="text-8xl text-sky-700 font-medium">Aqui Tem de Tudo</h1>
            <figure><img src={imageHero} alt="Carrinho de compras" className="w-full h-auto object-cover mt-18"/></figure>
        </header>
    )
}

export default Hero;