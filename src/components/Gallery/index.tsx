import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import styled from "styled-components"

const GalleryContainer = styled.div`
  display: flex;
`

const FluidSection = styled.section`
  flex-grow: 1;
`

const Gallery = () => {
  return <>
    <Tags />
    <GalleryContainer>
      <FluidSection>
        <Title>Navege  pela galeria</Title>
      </FluidSection>
      <Popular />
    </GalleryContainer>
  </>
}

export default Gallery