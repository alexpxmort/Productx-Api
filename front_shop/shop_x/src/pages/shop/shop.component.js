import React from 'react';
import { SHOP_DATA } from '../../components/data/shop.data';
import { CollectionPreview } from '../../components/preview-collection/preview-collection.component';
import SearchBar from '../../components/searchBar/searchBar.component';


const ShopPage  = () =>{

  const [data,setData] = useState(SHOP_DATA);

  const filterItems = (name)=>{
    if(name){
     if(data){
      let _items = SHOP_DATA.filter((val,idx)=>val.name.toLowerCase().trim().includes(name));
      setData(_items);
     }
    }else{
      setData(SHOP_DATA)
    }
  }
  
    return(
      <div className='shop-page'>
      <SearchBar onClick={filterItems}/>
         <CollectionPreview items={data} name={'Frutas'}/>
      </div>
    )
  }


export default ShopPage;    