import imageD from "../../assets/hero/d.jpg"
import imageB from "../../assets/hero/b.jpg"
import imageC from "../../assets/hero/c.jpg"


const Hero = () => {
    return (
        <header className="h-svh min-h-205 w-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-center p-6 sm:p-8 w-full h-full min-h-80 bg-linear-to-b from-sky-300 via-sky-300 to-white">
                <h1 className="text-center text-white text-7xl sm:text-8xl xl:text-9xl font-bold font-inter italic">
                    Aqui Tem de Tudo!
                </h1>
            </div>
            <div className="w-full h-2/3 sm:h-full flex relative">
                <div className="w-full h-100 bg-linear-to-b from-white via-white/10 to-transparent absolute">
                </div>
                <div className="w-full overflow-hidden hidden md:block">
                    <img src={imageD} alt="" className="w-full object-cover 2xl:object-[50%_-200px] "/>
                </div>
                <div className="w-full overflow-hidden hidden sm:block">
                    <img src={imageB} alt="" className="w-full object-cover"/>
                </div>
                <div className="w-full overflow-hidden">
                    <img src={imageC} alt="" className="w-full object-cover"/>
                </div>
            </div>
        </header>
    )
}

export default Hero;