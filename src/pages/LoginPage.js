import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { useForm } from "../components/useForm"
import { InfoContext } from "../context/Info"
import axios from "axios"

export default function LoginPage() {

    const navigate = useNavigate()
    const { setUser } = useContext(InfoContext)
    const [form, handleForm] = useForm({ email: "", password: "" })

    function login(event) {
        event.preventDefault()

        const URL = "http://localhost:5000/"

        const promise = axios.post(URL, form)

        promise.then(res => {
            setUser(res.data)
            navigate("/home")
            console.log(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
            alert(err.response.data.message)
        })
        
    }

    return (
        <Container>
            <Titulo>
                MyWallet
            </Titulo>
            <>
                <ContainerForm onSubmit={login}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                    />
                    <Button type="submit">
                        Entrar
                    </Button>
                </ContainerForm>
            </>
            <Link to="/sign-up">
                <h3>
                    Primeira vez? Cadastre-se!
                </h3>
            </Link>
        </Container>
    )
}

const Container = styled.div`
width: 85%;
height: 50%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
h3{
    margin-top: 30px;
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
}
`

const Titulo = styled.div`
font-family: 'Saira Stencil One', cursive;
color: white;
font-weight: 400;
font-size: 32px;
margin-bottom: 20px;
`

const ContainerForm = styled.form`
flex-direction: column;
display:flex;
width: 100%;
input{
    color: #000000;
    height: 58px;
    border-radius: 5px;
    border: none;
    margin-bottom:10px;
    padding-left: 10px;
}
`
const Button = styled.button`
background-color: #A328D6;
height: 46px;
border: none;
border-radius: 5px;
color: #FFF;
font-size: 20px;
font-weight: 700;
`