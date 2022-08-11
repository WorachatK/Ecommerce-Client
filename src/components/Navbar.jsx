import React from 'react'
import styled from 'styled-components'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout } from '../redux/apiCalls';

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0"})}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent: "center"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "20px"})}
    cursor: pointer;
`
const Menuitem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px",marginLeft:"10px"})}
`



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state)=>state.user.currentUser)
    const dispatch = useDispatch()

    const handleLinks = (link) =>{
        window.location.href = `/${link}`
    }

    const handleLogout = (e) =>{
        e.preventDefault()
        logout(dispatch)
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search...'/>
                    <SearchIcon style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo onClick={()=>handleLinks('')}>
                    MARKET
                </Logo>
            </Center>
            {user ? (
                <Right>
                    <Menuitem onClick={()=>handleLinks('order')}>YOUR ORDER</Menuitem>
                    <Menuitem onClick={handleLogout}>LOGOUT</Menuitem>
                    <Link to="/cart">
                    <Menuitem>
                    <Badge badgeContent={quantity} color="warning">
                        <ShoppingCartIcon color="primary" />
                    </Badge>
                    </Menuitem>
                    </Link>
                </Right>
            ):(
                <Right>
                    <Menuitem onClick={()=>handleLinks('register')}>REGISTER</Menuitem>
                    <Menuitem onClick={()=>handleLinks('login')}>LOG IN</Menuitem>
                    <Link to="/cart">
                    <Menuitem>
                    <Badge badgeContent={quantity} color="warning">
                        <ShoppingCartIcon color="primary" />
                    </Badge>
                    </Menuitem>
                    </Link>
                </Right>
            )}
            
        </Wrapper>
    </Container>
  )
}

export default Navbar