import { HomeSkillsListBlock, TitleContentHomeBanner } from "@molecules"
import React from "react"

import styles from '@styles/home/home-banner.module.scss'

export const HomeBanner = () => {
  return (
    <div id={styles.containerHomeBanner}>
    <TitleContentHomeBanner></TitleContentHomeBanner>

    <HomeSkillsListBlock></HomeSkillsListBlock>

      {/* <ButtonSubscriber>Contate-me</ButtonSubscriber> */}
    </div>
  )
}



// const Container = styled.div`
 
// `
// const div = styled.div`

// `
// const TecnologyCategoryGrid = styled.div`

// `
// const TecnologyCategoryBlock = styled.div`

// `
// const IconBox = styled.div`

// `
// const Info = styled.h2`

// `
// const ContentInfo = styled.p`

// `

// const TitleH1 = styled.h1`

// `

// const FeaturedSubWord = styled.b`
 
// `
// const ButtonSubscriber = styled.button`
//   grid-area: subscribe;
//   border-radius: 5px;
//   color: white;
//   margin-top: 10px;
//   margin-bottom: 15px;
//   width: 150px;
//   font-weight: bold;
//   background-color: #8257e5;
//   cursor: pointer;
//   border: none;
//   font-size: 20px;
//   height: 50px;
//   padding: 10px;
//   z-index: 10;
// `
