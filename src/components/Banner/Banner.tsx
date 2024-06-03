import styled from 'styled-components';

interface FigureStyledProps {
  $backgroundImage: string;
}

const FigureStyled = styled.figure<FigureStyledProps>`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TitleStyled = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 300px;
  padding: 0 64px;
`;

interface BannerProps {
  texto: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ texto, backgroundImage }) => {
  return (
    <FigureStyled $backgroundImage={backgroundImage}>
      <TitleStyled>{texto}</TitleStyled>
    </FigureStyled>
  );
};

export default Banner;
