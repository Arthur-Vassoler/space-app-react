import styled from "styled-components"
import SearchInputText from "../SearchInputText"

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  return (
    <HeaderStyled>
      <img src="/images/logo.png" alt="Logo" />
      <SearchInputText />
    </HeaderStyled>
  )
}

export default Header