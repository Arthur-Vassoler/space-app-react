import styled from "styled-components";
import tags from "./tags.json"

const TagsContainerStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`

const TagTitleStyled = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`;

const TagStyled = styled.button`
  font-size: 24px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const DivStyled = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`


const Tags = () => {
  return <TagsContainerStyled>
    <TagTitleStyled>Busque por tags:</TagTitleStyled>
    <DivStyled>
      {tags.map(tag => <TagStyled key={tag.id}>{tag.titulo}</TagStyled>)}
    </DivStyled>
  </TagsContainerStyled>
}

export default Tags