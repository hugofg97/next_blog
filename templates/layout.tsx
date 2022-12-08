import React from "react"


import { menuListAcademy } from "./menu-list"
import headerStyles from '@styles/layout/header.module.scss'
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


          <Image
            alt="a"
            src="/images/logo.png"
            width={80}
            height={50}
            quality="50"
            loading="eager"


          // placeholder="none"
          />
          <div className={headerStyles.menuList}>
            {menuListAcademy.map((itemMenu, index) => (
              <Link href={itemMenu.path} key={index}>
                {itemMenu?.type == 'button' ? null : (<li className={headerStyles.menuLi}>{itemMenu.name}</li>)}
                {itemMenu?.type == 'button' ? (<ButtonAtom></ButtonAtom>) : null}
              </Link>
            ))}
          </div>
          <div style={{ color: "white" }}>search</div>
        </div>
      </div>
      <div className={headerStyles.headerMobile}>
        <div className={headerStyles.menuIcon}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <StaticImage
          src="../assets/logo.png"
          width={120}
          height={80}
          quality="50"
          loading="eager"
          blurredOptions={{ toFormat: "WEBP" }}
          placeholder="blurred"
          // placeholder="none"
        /> */}
        <div style={{ color: "white" }}>search</div>
      </div>
      <main style={{
        margin: '0 auto',
        backgroundImage: 'radial-gradient(circle at center,#1e0c3c,#11081f 100%)'
      }}>{children}</main>
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
