import styled from "styled-components"
import plusIcon from "../../assets/img/plus-circle.png"
import minusIcon from "../../assets/img/minus-circle.png"

export default function(){
    return(
        <Container>
            <ContainerButton>
                <img src={plusIcon} alt="Símbolo de Soma" />
                <h3>Nova</h3>
                <h3>entrada</h3>
            </ContainerButton>
            <ContainerButton>
            <img src={minusIcon} alt="Símbolo de Subtração" />
                <h3>Nova</h3>
                <h3>saída</h3>
            </ContainerButton>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
` 
const ContainerButton = styled.button`
background-color: #A328D6;
width: 47%;
height: 80%;
align-items: flex-start;
display:flex;
flex-direction: column;
padding: 10px;
border-radius: 5px;
border: none;
img{
    margin-bottom: 15px;
}
h3{
    color: #FFFFFF;
    font-size: 17px;
}
`