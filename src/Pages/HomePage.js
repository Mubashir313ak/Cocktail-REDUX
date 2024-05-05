import React from 'react'
import Layout from '../Components/Layout'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { fetchCocktails } from '../Redux/features/cocktailSlice'
import Spinneranimation from '../shared/Spinneranimation'

const HomePage = () => {
  const [modifiedCocktails,setModifiedCocktails]=useState([]);

  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchCocktails());

},[])

useEffect(()=>{
if(cocktails){
const newCocktails=cocktails.map(item=>{
  const {idDrink,strDrink,strDrinkAlternate,strTags,strVideo,strGlass,strDrinkThumb} =item;
  return{
    id:idDrink,
    name:strDrink,
    AlternateDrink:strDrinkAlternate,
    types:strTags,
    glass:strGlass,
    vid:strVideo,
    img:strDrinkThumb,

  }
 
})
setModifiedCocktails(newCocktails)
}else{
  setModifiedCocktails([])
}
},[cocktails])

if(loading){
  return <Spinneranimation/>
}
if(error){
  return <h2>{error.message}</h2>
}

  return (    <Layout>
<div className='container '>
  <div className='row'>
    {modifiedCocktails.map((item) => (
      <div className='col-md-3' key={item.id}>
        <div className="card" style={{ width: '18rem' }}>
          <img src={item.img} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h5 className="card-title">{item.glass}</h5>
            <p className="card-text">{item.AlternateDrink}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>





  </Layout>
  )  
}


export default HomePage