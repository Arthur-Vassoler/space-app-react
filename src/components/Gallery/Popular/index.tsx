import styled from "styled-components"
import Title from "../../Title"
import fotos from "./fotos-populares.json"

const PhotoColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`

const ButtonStyled = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`

const Popular = () => {
  return <>
    <section>
      <Title alignment='center'>Populares</Title>
      <PhotoColumn>
        {fotos.map(foto => <Image key={foto.id} src={foto.path} alt={foto.alt} />)}
      </PhotoColumn>
      <ButtonStyled>Ver mais</ButtonStyled>
    </section>
  </>
}

export default Popular