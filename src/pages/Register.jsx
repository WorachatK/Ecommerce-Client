
import { useState } from "react"
import styled from "styled-components"
import { publickRequest } from "../requestMethod"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://papers.co/wallpaper/papers.co-so77-blur-gradation-green-purple-pastel-36-3840x2400-4k-wallpaper.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #fff;
    ${mobile({width:"75%",})}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0 0 ;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #da9eda;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;

    &:hover{
        transform: scale(0.9);
    }
    &:disabled{
        background-color: gray;
        cursor: not-allowed;
    }
`

const Register = () => {
    const [inputs,setInputs] = useState()
    const [passCheck,setPassCheck] = useState(false)
    const [textError,setTextError] = useState("")

    const checkPass = (e)=>{
        const cpass = e.target.value 
        const pass = inputs?.password
        if(cpass===pass){
            setPassCheck(false)
            setTextError("")
        }else{
            setPassCheck(true)
            setTextError("Password is not match")
        }
    }

    const handleInput = (e) =>{
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }

    const handleRegis = ()=>{
        publickRequest.post("/auth/register",inputs)
        .then(res=>{
            console.log(res);
            window.location.href = "/"
        })
    }
    console.log(inputs);
    
  return (
    <Container>
        <Wrapper>
            <Title>CREAT AN ACCOUNT</Title>
            <p style={{color:'red'}}>{textError}</p>
            <Form>
                <Input name="username" placeholder="username" onChange={handleInput}/>
                <Input name="email" placeholder="email" onChange={handleInput}/>
                <Input name="password" placeholder="password" type="password" onChange={handleInput}/>
                <Input name="cpass" placeholder="confirm password" onChange={checkPass}/>
                <Agreement>
                    By creating an account, I consent to the processing of my perdonal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button disabled={passCheck} onClick={handleRegis}>REGISTER</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register