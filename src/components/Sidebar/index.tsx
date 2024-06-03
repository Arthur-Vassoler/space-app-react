import styled from "styled-components"
import NavigationItem from "./NavigationItem"

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 236px;
`

const SideBar = () => {
  return(
    <aside>
      <nav>
        <ListStyled>
          <NavigationItem iconActive="icons/home-ativo.png" iconInactive="icons/home-inativo.png" active>
            Início
          </NavigationItem>
          <NavigationItem iconActive="icons/mais-vistas-ativo.png" iconInactive="icons/mais-vistas-inativo.png">
            Mais Vistas
          </NavigationItem>
          <NavigationItem iconActive="icons/mais-curtidas-ativo.png" iconInactive="icons/mais-curtidas-inativo.png">
            Mais Curtidas
          </NavigationItem>
          <NavigationItem iconActive="icons/novas-ativo.png" iconInactive="icons/novas-inativo.png">
            Novas
          </NavigationItem>
          <NavigationItem iconActive="icons/surpreenda-me-ativo.png" iconInactive="icons/surpreenda-me-inativo.png">
            Surpreenda-me
          </NavigationItem>
        </ListStyled>
      </nav>
    </aside>
  )
}

export default SideBar