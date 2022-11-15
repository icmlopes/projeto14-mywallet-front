import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function HomePage(){
    return(
        <Container>
            <NavBar/>
            <ExhibitionScreen>
                <NoRecords>Não há registros de entrada ou saída</NoRecords>
            </ExhibitionScreen>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
` 
const ExhibitionScreen = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 70%;
border-radius: 5px;
`
const NoRecords = styled.div`

`