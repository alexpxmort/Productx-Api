import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {addItem} from  '../../redux/actions/CartAction'



 const CollectionItem = ({item,user,addItem,isMovie,addItemMovie,removeItemFavMovies}) =>{
    const {name,price,imageUrl} = item;


    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`,
            cursor:'pointer'
        }}
        />

        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
    
        </div>
        {

                <CustomButton onClick={() => addItem(item)}>
                Add to cart
              </CustomButton>
        }
      
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = dispatch =>({
    addItem:item =>dispatch(addItem(item)),
})
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem)