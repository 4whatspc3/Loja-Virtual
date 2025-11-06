import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginVideo from "../assets/login/loginVideo.mp4"

//Provisório, preferível usar o 'React Hook Form'
const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        email.length >= 11 && senha.length >= 5 ? navigate('/produtos') : setErro('Preencha os campos corretamente. A senha precisa de no mínimo 5 caracteres.')
    }

    return (
        <main className="flex gap-6 w-full h-svh min-h-205 p-4 sm:p-8">
            <div className=" hidden lg:block w-full relative">
                <div class="absolute inset-0 bg-black/50 rounded-4xl"></div>
                <video
                    src={loginVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    id="meuVideo"
                    width="640"
                    height="360"
                    class="w-full h-full object-cover object-[50%_15%] rounded-4xl"
                    aria-hidden="true"
                />
            </div>
            <form onSubmit={ handleSubmit} className="flex flex-col gap-12 w-full bg-sky-300 rounded-4xl pt-16 p-4 sm:p-8 sm:pt-16">
                <div className="w-full max-w-140 2xl:max-w-full 2xl:justify-center flex flex-col sm:flex-row items-center gap-6 mx-auto">
                    <h1 className="text-4xl text-center sm:text-left sm:text-6xl lg:text-5xl 2xl:text-7xl text-white font-bold font-inter italic">
                        Aqui Tem <br className="hidden lg:inline"/>de Tudo
                    </h1>
                    <div className="bg-white w-full max-w-100 h-1 sm:w-2 -skew-y-2 sm:h-full sm:-skew-x-8 rounded-4xl"></div>
                    <h2 className="text-4xl text-center sm:text-left sm:text-6xl lg:text-5xl 2xl:text-7xl text-white font-bold font-inter italic">Página <br className="hidden lg:inline" />de Login</h2>
                </div>
                <div className="flex flex-col gap-2 mx-auto w-full sm:max-w-[80%]">
                    <label htmlFor="userEmail" className="font-inter font-medium text-white text-2xl w-full">Email:</label>            
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="exemplo@seuemail.com" value={email} id="userEmail" className="bg-white p-4 rounded-2xl w-full "/>
                </div>
                <div className="flex flex-col gap-2 mx-auto w-full sm:max-w-[80%]">
                    <label htmlFor="userSenha" className="font-inter font-medium text-white text-2xl w-full">Senha:</label>
                    <input onChange={(e) => setSenha(e.target.value)} type='password' value={senha} id="userSenha" className="bg-white p-4 rounded-2xl w-full "/>
                </div>
                <button className="w-full max-w-100 mx-auto block rounded-2xl bg-white text-2xl font-medium font-inter text-sky-400 border border-sky-400 p-2 pl-4 pr-4 mt-10">Entrar</button>
                <p>{erro}</p>
            </form>
        </main>
    )
}

export default Login;