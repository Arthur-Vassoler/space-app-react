import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"

const BackgroudGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  height: 100vh;
  
  img {
    max-width: 212px;
  }
`

function App() {

  return (
    <BackgroudGradient>
      <Header />
      <GlobalStyles />
    </BackgroudGradient>
  )
}

export default App
