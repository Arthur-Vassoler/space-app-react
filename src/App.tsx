import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import Banner from './components/Banner/Banner';
import bannerBackground from './assets/banner.png';
import Gallery from './components/Gallery';
import ModalZoom from './components/ModalZoom/Index';
import fotos from './fotos.json';
import { useState } from 'react';

interface PhotoData {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

export interface Photo extends PhotoData {
  favorita?: boolean;
}

const BackgroudGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContents = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setPhotosGallery] = useState<Photo[]>(fotos);
  const [photoSelected, setPhotoSelected] = useState<Photo | null>(null);

  const aoToggleFavorite = (photo: Photo) => {
    setPhotosGallery((prevPhotos) =>
      prevPhotos.map((prevPhoto) =>
        prevPhoto.id === photo.id
          ? { ...prevPhoto, favorita: !prevPhoto.favorita }
          : prevPhoto
      )
    );
  };

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
            <Gallery
              aoPhotoSelected={(photo: Photo) => setPhotoSelected(photo)}
              aoToggleFavorite={(photo: Photo) => aoToggleFavorite(photo)}
              photos={galleryPhotos}
            />
          </GalleryContents>
        </MainContainer>
      </AppContainer>
      <ModalZoom photo={photoSelected} onClose={() => setPhotoSelected(null)} />
      <GlobalStyles />
    </BackgroudGradient>
  );
};

export default App;
