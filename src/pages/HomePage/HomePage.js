import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function HomePage(){
    return(
        <Container>
            <NavBar/>
            <ExhibitionScreen>
                <Records>
                    <DateAndDescription>
                        <Date>
                            14/11
                        </Date>
                        <Description>
                            Almoço mãe
                        </Description>
                    </DateAndDescription>
                    <CashFlow>
                        R$ 100,00
                    </CashFlow>
                </Records>
                
                <Balance>
                    <h3>SALDO</h3>
                    <DayBalance> R$4.000,00</DayBalance>
                </Balance>
                {/* <NoRecords>Não há registros de entrada ou saída</NoRecords> */}
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
display: flex;
flex-direction: column;
justify-content: space-between;
`
// const NoRecords = styled.div`
// font-size: 20px;
// font-weight: 400;
// color: #868686;
// text-align: center;
// display: flex;
// align-items: center;
// justify-content: center;
// `
const Records = styled.div`
display: flex;
justify-content: space-between;
align-items:flex-start;
flex-direction: row;
padding: 25px 15px 25px 15px;
`
const DateAndDescription = styled.div`
font-size: 16px;
display: flex;
`

const Date = styled.div`
color: #C6C6C6;
`
const Description = styled.div`
color: #000000;
margin-left: 10px;
`
const CashFlow = styled.div`
// color: vai ser passado por props com if
`
const Balance = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 25px 15px 25px 15px;
h{
    color: #000000;
    font-size: 17px;
    font-weight: 700;
}
`
const DayBalance = styled.div`

`