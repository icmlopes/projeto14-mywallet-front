import styled from "styled-components"
import icone from "../../assets/img/vector.png"

export default function NavBar(){
    return(
        <Container>
            <h1>Olá, Fulano</h1>
            <img src={icone} alt="icone"/>
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