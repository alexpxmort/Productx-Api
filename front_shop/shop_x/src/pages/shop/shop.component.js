import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import React,{useEffect} from 'react';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.component';
import { SHOP_DATA } from '../../components/data/shop.data';
import { CollectionPreview } from '../../components/preview-collection/preview-collection.component';


const ShopPage  = ({match}) =>{
  
    return(
      <div className='shop-page'>
        <div style={{flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <FormGroup>
              <TextField style={{width:600}} variant={'outlined'} />
          </FormGroup>
          <Button onClick={()=>{}}>Pesquisar</Button>
        </div>
         <CollectionPreview items={SHOP_DATA} name={'Frutas'}/>
      </div>
    )
  }


export default ShopPage;    