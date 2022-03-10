import './style.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  NavBarContainer,
  NavBarLogo,
  MenuIcon, 
  OptionWrapper
} from './style'

export const NavBar = () => {
  const navigate = useNavigate()
  const [menuDrop, setMenuDrop] = useState(false)

  function handleNavigation (path: string) {
    if(path === '/') localStorage.clear()
    setMenuDrop(false)
    navigate(path)
  }

  return (
    <NavBarContainer isBar={menuDrop}>
      <NavBarLogo src='https://uploads-ssl.webflow.com/61a252e6f32925a3af57a40f/6203ed64c0e3733b91dc2504_crendly%20logo-colored.svg' />
      <MenuIcon onClick={() => setMenuDrop(!menuDrop)} />
      <OptionWrapper>
        <span onClick={() => handleNavigation('/dashboard/home')}><i className="fa fa-pie-chart"></i>Statistics</span>
        <span  onClick={() => handleNavigation('/dashboard/users')}><i className="fa fa-user"></i>Users</span>
        <span onClick={() => handleNavigation('/')}><i className="fa fa-sign-out"></i>Logout</span>
      </OptionWrapper>
    </NavBarContainer>
  )
}
