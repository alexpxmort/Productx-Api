import React,{Component} from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview  = ({items,name}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{name.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx) => idx < 10).map((item) =>(
                    <CollectionItem  key={item.id} item={item} isMovie={false}/>
                ))
            }
        </div>
    </div>
)

