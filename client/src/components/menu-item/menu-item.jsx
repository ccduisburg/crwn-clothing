import React from 'react'
import {withRouter} from 'react-router-dom'
import {ContentContainer,BackgroundImageContainer,MenuItemContainer,ContentTitle,ContentSubtitle} from './menu-item.styles'
const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>(

    <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle> SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);
 
export default withRouter(MenuItem);