import styled from 'styled-components';
import Title from '../Title';
import Tags from './Tags';
import Popular from './Popular';
import Image from './Image';
import { Photo } from '../../App';

interface GalleryProps {
  photos: Photo[];
  aoPhotoSelected?: (photo: Photo) => void;
  aoToggleFavorite?: (photo: Photo) => void;
}

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const PopularColumn = styled.div`
  margin-left: 16px;
`

const Gallery: React.FC<GalleryProps> = ({ photos = [], aoPhotoSelected, aoToggleFavorite }) => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <Image
                aoZoomSolicitado={aoPhotoSelected}
                aoToggleFavorite={aoToggleFavorite}
                key={photo.id}
                photo={photo}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <PopularColumn>
          <Popular />
        </PopularColumn>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
