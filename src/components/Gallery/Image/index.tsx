import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon/Index';
import { Photo } from '../../../App';

interface FigureStyledProps {
  expandida?: boolean;
}

interface ImageProps {
  photo: Photo;
  expandida?: boolean;
  aoZoomSolicitado?: (photo: Photo) => void;
  aoToggleFavorite?: (photo: Photo) => void
}

const FigureStyled = styled.figure<FigureStyledProps>`
  width: ${(props) => (props.expandida ? '90%' : '460px')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image: React.FC<ImageProps> = ({ photo, expandida, aoZoomSolicitado, aoToggleFavorite }) => {
  const iconeFavorito = photo.favorita ? '/icons/favorito-ativo.png' : '/icons/favorito.png';

  return (
    <FigureStyled expandida={expandida}>
      <img src={photo.path} alt={photo.titulo} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <FooterStyled>
          <h4>{photo.fonte}</h4>
          {aoToggleFavorite && (
            <ButtonIcon onClick={() => aoToggleFavorite(photo)}>
              <img src={iconeFavorito} alt="Icone de favorito" />
            </ButtonIcon>
          )}
          {!expandida && aoZoomSolicitado && (
            <ButtonIcon aria-hidden={expandida} onClick={() => aoZoomSolicitado(photo)}>
              <img src="/icons/expandir.png" alt="Icone de expandir" />
            </ButtonIcon>
          )}
        </FooterStyled>
      </figcaption>
    </FigureStyled>
  );
};

export default Image;
