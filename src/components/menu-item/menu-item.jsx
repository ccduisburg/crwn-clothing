import React from 'react'
import {withRouter} from 'react-router-dom'
import {ContentContainer,BackroundImageContainer,MenuitemContainer,ContentTitle,ContentSubtitle} from './menu-item.styles'
const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>(

    <MenuitemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <BackroundImageContainer style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle> SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuitemContainer>

);
 
export default withRouter(MenuItem);