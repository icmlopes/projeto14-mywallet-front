import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "../components/useForm"
import axios from "axios"

export default function RegisterPage() {

    const [form, handleForm] = useForm({ name: "", email: "", password: "", repeat_password:"" })
    const navigate = useNavigate()

    function registration(event) {

        event.preventDefault()

        const URL = "http://localhost:5000/sign-up"

        const promise = axios.post(URL, form)

        promise.then(() =>
            navigate("/"))

        promise.catch((err) => {

            console.log(err.response)
        })

        console.log(form)

    }

    return (
        <Container>
            <Titulo>
                MyWallet
            </Titulo>
            <>
                <ContainerForm onSubmit={registration}>
                    <input
                        type="name"
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                    />
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
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        name="repeat_password"
                        value={form.repeat_password}
                        onChange={handleForm}
                    />
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </ContainerForm>
            </>
            <Link to="/">
                <h3>
                    Já te uma conta? Entre agora!
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
margin-bottom: 30px;
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