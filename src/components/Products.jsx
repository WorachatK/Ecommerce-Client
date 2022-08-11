import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,sort,filters}) => {

  const [products,setProducts] = useState([])
  const [filterProducts,setFilterProducts] =useState([])
  
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `http://localhost:5500/api/products?category=${cat}`:`http://localhost:5500/api/products`)
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getProducts()
  },[cat])

  useEffect(()=>{
    cat && setFilterProducts(
      products.filter(item=>Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  },[products,cat,filters])

  useEffect(()=>{
    if((sort === "newst")){
      setFilterProducts((prev)=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    }else if((sort === "asc")){
      setFilterProducts((prev)=>
        [...prev].sort((a,b) => a.price - b.price)
      )
    }else {
      setFilterProducts((prev)=>
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  },[sort])

  return (
    <Container>
        {cat? filterProducts.map(item=>(
            <Product item={item} key={item.id}/>
        )): products.map(item=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products