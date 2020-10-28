import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'

import {selectCollection} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux';
import {CollectionPageContainer,ItemsContainer,CollectionsTitle} from './collection.styles';


const CollectionPage=({collection})=>{
    const { title, items } = collection;
    return(    
        <CollectionPageContainer>
        <CollectionsTitle>{title}</CollectionsTitle>
        <ItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </CollectionPageContainer>
      )
    }

    const mapStateToProps=(state,ownProps)=>({
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    })
export default connect(mapStateToProps)(CollectionPage);