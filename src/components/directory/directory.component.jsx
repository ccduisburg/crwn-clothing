import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySelections} from '../../redux/directory/directory.selector' 


const Directory=({sections})=>(
    <div className="directory-menu">
    {sections.map(({id,...otherSectionProps})=>(
        <MenuItem key={id} {...otherSectionProps}/>
    ))}            
    </div>
);

const mapStateToProps=createStructuredSelector({
  sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory);