import styled from "styled-components";

interface NavigationItemProps {
  iconActive: string;
  iconInactive: string;
  active?: boolean;
  children: React.ReactNode;
}

interface NavigationItemStyledProps {
  $active: boolean;
}

const NavigationItemStyled = styled.li<NavigationItemStyledProps>`
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
  font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
  display: flex;
  align-items: center;
  gap: 22px;
`

const NavigationItem: React.FC<NavigationItemProps> = ({ iconActive, iconInactive, active = false, children }) => {
  return (
    <NavigationItemStyled $active={active}>
      <img src={active ? iconActive : iconInactive} alt="" />
      {children}
    </NavigationItemStyled>
  );
}
export default NavigationItem