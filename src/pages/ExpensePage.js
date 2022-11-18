import styled from "styled-components"

export default function ExpensePage(){
    return(
        <Container>
            <h1>Nova Saída</h1>
            <>
                <ContainerForm>
                    <input
                        type="number"
                        placeholder="Valor"
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                    />
                    <Button>
                        Salvar saída
                    </Button>
                </ContainerForm>
            </>
        </Container>
    )
}

const Container = styled.div`
width: 85%;
height: 90%;
display: flex;
justify-content: flex-start;
flex-direction: column;
h1{
    font-size:26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 40px;
}
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