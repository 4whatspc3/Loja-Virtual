import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Provisório, preferível usar o 'React Hook Form'
const Home = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        email.length >= 11 && senha.length >= 5 ? navigate('/produtos') : setErro('Preencha os campos corretamente')
    }

    return (
        <form onSubmit={ handleSubmit}>
            <div>
                <label htmlFor="userEmail">Email:</label>            
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="exemplo@seuemail.com" value={email} id="userEmail"/>
            </div>
            <div>
                <label htmlFor="userSenha">Senha:</label>
                <input onChange={(e) => setSenha(e.target.value)} type='password' value={senha} id="userSenha"/>
                <p>A senha precisa de no mínimo 5 caracteres</p>
            </div>
            <button >Entrar</button>
            <p>{erro}</p>
        </form>
    )
}

export default Home;