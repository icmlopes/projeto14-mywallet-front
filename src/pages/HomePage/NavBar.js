// import { useContext } from "react"
import styled from "styled-components"
import icone from "../../assets/img/vector.png"
// import { InfoContext } from "../../context/Info"

export default function NavBar(){

    // const { user, setUser } = useContext(InfoContext) 
    
    return(
        <Container>
            <h1>Olá, Fulano</h1>
            <Button>
                <img src={icone} alt="logo" />
            </Button>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
h1{
    font-size:26px;
    font-weight: 700;
    color: #FFFFFF;
}
`
const Button = styled.button`
background-color: transparent;
border: none;
`