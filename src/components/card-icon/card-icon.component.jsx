import React from "react";
import "./card-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from '../../assets/file-image.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux'

const CardIcon = ({toggleCartHidden}) => (
  <div className="card-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CardIcon);