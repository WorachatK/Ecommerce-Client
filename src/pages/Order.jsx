import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Announcememt from '../components/Announcememt'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { publickRequest } from '../requestMethod'
import styled from 'styled-components'

const OrderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Td = styled.td`
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
`


const Order = () => {
    const user = useSelector((state)=>state.user.currentUser)
    const [order,setOrder] = useState([])

    useEffect(()=>{
        const getOrder = async () =>{
            const res = await publickRequest.get(`/orders/find/${user._id}`)
            setOrder(res.data)
        }
        getOrder()
    },[user])
    console.log(order);
  return (
    <div>
        <Announcememt/>
        <Navbar/>
        <OrderContainer>
            <p style={{margin:20,fontSize:30}}>YOUR ORDERS</p>
            <table style={{margin:20,border:'1px solid'}}>
                <thead>
                    <tr>
                        <Td>Order ID</Td>
                        <Td>Amount</Td>
                        <Td>Order At</Td>
                        <Td>Status</Td>
                    </tr>
                </thead>
                {order?.map(item=>(
                <tbody key={item._id}>
                    <tr>
                        <Td>{item._id}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{item.createdAt}</Td>
                        <Td>{item.status}</Td>
                    </tr>
                </tbody>
                ))}
                
            </table>
        </OrderContainer>
        <Footer/>
    </div>
  )
}

export default Order