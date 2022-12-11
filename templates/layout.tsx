import React from "react"


import { menuListAcademy } from "./menu-list"
import headerStyles from '@styles/layout/header.module.scss'
import mainClassNames from './styles/main.module.scss'
import Link from "next/link"
import Image from "next/image"
import { ButtonAtom } from "components/atoms/button.atom"

const Layout = ({ children, bg }: { children: JSX.Element, bg?: string }): JSX.Element => {
  return (
    <div style={{
      margin: '0 auto',
      height: '100%'
    }}>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <div className={headerStyles.headerDesktop}>

          <div style={{ width: 180, height: 50, position: 'relative', }}>

            <Image
              alt="Linkou App"
              src="/images/logo.png"
              fill
              quality="50"
              loading="eager"
            />
          </div>

          <div className={headerStyles.menuList}>
            {menuListAcademy.map((itemMenu, index) => (
              <Link href={itemMenu.path} key={index}>
                {itemMenu?.type == 'button' ? null : (<li className={headerStyles.menuLi}>{itemMenu.name}</li>)}
              </Link>
            ))}
            <ButtonAtom text="Login" />
          </div>
          <div style={{ color: "white" }}>Pesquisar</div>
        </div>
      </div>
      <div className={headerStyles.headerMobile}>
        <div className={headerStyles.menuIcon}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div style={{ color: "white" }}>search</div>
      </div>
      <main className={mainClassNames.mainContainer}>{children}</main>
    </div>
  )
}

export default Layout

// const ContinerPage = styled.div`
//   margin: 0 auto;
//   height: 100%;
// `
// const Main = styled.main`
//   margin: 0 auto;

// }

//   width: 100%;
// `
