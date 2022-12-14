import GlobalStyle from "./assets/styles/GlobalStyle"
import styled from "styled-components"
import Info from "./context/Info"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage/HomePage"
import IncomePage from "./pages/IncomePage"
import ExpensePage from "./pages/ExpensePage"


export default function App() {
    return (
        <BrowserRouter>
            <ContainerScreen>
                <GlobalStyle />
                <Info>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/sign-up" element={<RegisterPage />} />
                        <Route path="/home" element={<HomePage/>} />
                        <Route path="/income" element={ <IncomePage />} />
                        <Route path="/expense" element={ <ExpensePage /> } />
                    </Routes>
                </Info>
            </ContainerScreen>
        </BrowserRouter>
    )
}


const ContainerScreen = styled.div`
background-color: #8C11BE;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`