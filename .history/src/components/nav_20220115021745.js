import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

const StyledShoppingCart = styled.i`
  & {
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 21px;
    background: linear-gradient(to left, currentColor 12px, transparent 0) no-repeat -1px 6px/18px 2px,
      linear-gradient(to left, currentColor 12px, transparent 0) no-repeat 6px 14px/11px 2px,
      linear-gradient(to left, currentColor 12px, transparent 0) no-repeat 0 2px/4px 2px,
      radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat 12px 17px/4px 4px,
      radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat 6px 17px/4px 4px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 2px;
    height: 14px;
    background: currentColor;
    top: 2px;
    left: 4px;
    transform: skew(12deg);
  }
  &::after {
    height: 10px;
    top: 6px;
    left: 16px;
    transform: skew(-12deg);
  }
`
export const ShoppingCart = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <>
        <StyledShoppingCart {...props} ref={ref} icon-role="shopping-cart" />
      </>
    )
  },
)

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
      padding-bottom: 0;
    } 
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
    &.pagina-actual {
      border-bottom: 2px solid #FFF;

    }
`;

const Navegacion = () => {
  return (  
    <Nav>
      <NavLink 
        to={'/'}
        activeClassName="pagina-actual"
      >Inicio</NavLink>
      <NavLink 
        to={'/nosotros'}
        activeClassName="pagina-actual"
      >Nosotros</NavLink>
      <NavLink 
        to={'/contacto'}
        activeClassName="pagina-actual"
      ><StyledShoppingCart/></NavLink>
    </Nav>
  );
}

export default Navegacion;