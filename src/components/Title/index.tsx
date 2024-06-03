import styled from "styled-components";

interface TitleStyledProps {
  alignment?: string
}

const Title = styled.h2<TitleStyledProps>`
  color: #7b78E6;
  font: 32;
  text-align: ${props => props.alignment ? props.alignment : 'left'};
`

export default Title