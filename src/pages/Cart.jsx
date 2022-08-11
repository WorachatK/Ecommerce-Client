import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcememt from '../components/Announcememt'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"5px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
    cursor: pointer;
`
const TopTexts =styled.div`
    ${mobile({display:"none"})}
`

const TopText =styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom= styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info= styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({alignItem:"center"})}
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.5px solid;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const Image = styled.img`
    width: 200px;
    ${mobile({width:"auto"})}
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProductAmountContainer =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount =styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice =styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`

const Summary= styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 40vh;
    margin: 20px;
`
const SummaryTital = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
`


const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const [stripToken,setStripToken] = useState(null)
    const onToken = (token)=>{
        setStripToken(token)
    }
    const navigate = useNavigate();
    
    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await userRequest.post("/checkout/payment",{
                    tokenId:stripToken.id,
                    amount: 100,
                })
                navigate("/success", {
                    state:{
                        stripeData: res.data,
                        cart: cart, 
                    }
                })
            }catch(err){
                console.log(err);
            }
        }
        stripToken && makeRequest()
    },[stripToken,navigate,cart])
  return (
    <div>
        <Container>
            <Navbar/>
            <Announcememt/>

            {stripToken ? (
                <span>Processing. Please wait...</span>
            ):(
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton onClick={()=>navigate("/")}>CONTINIE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>(
                        <Product key={product._id}>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Producr:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                    <RemoveIcon/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <AddIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        
                        ))}
                        
                    </Info>
                    <Summary>
                        <SummaryTital>ORDER SUMMARY</SummaryTital>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <StripeCheckout 
                            name="My shop"
                            image='https://static.vecteezy.com/system/resources/previews/002/089/268/non_2x/head-alpaca-funny-cartoon-vector.jpg'
                            shippingAddress
                            billingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>

                    </Summary>
                </Bottom>
            </Wrapper>
            )}
            <Footer/>
        </Container>
    </div>
  )
}

export default Cart