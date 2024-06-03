import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/Sidebar"
import Banner from "./components/Banner/Banner"
import bannerBackground from './assets/banner.png'
import Gallery from "./components/Gallery"

const BackgroudGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width:100%;
  height: 100vh;
  
  img {
    max-width: 212px;
  }
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContents = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  return (
    <BackgroudGradient>
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContents>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />

            <Gallery />
          </GalleryContents>
        </MainContainer>
      </AppContainer>
      <GlobalStyles />
    </BackgroudGradient>
  )
}

export default App
