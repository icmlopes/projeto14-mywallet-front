import styled from "styled-components"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <Container>
            <Titulo>
                MyWallet
            </Titulo>
            <>
                <ContainerForm>
                    <input
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                    />
                    <Button>
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