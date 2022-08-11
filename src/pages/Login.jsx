import { useState } from "react"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../responsive"
import { useDispatch,useSelector } from "react-redux"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://static.vecteezy.com/system/resources/previews/003/588/032/original/pastel-ombre-background-in-pink-and-purple-vector.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
    ${mobile({width:"75%",})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #da9eda;
    cursor: pointer;
    transition: all 0.2s ease;
    color: white;
    margin-bottom: 10px;

    &:hover{
        transform: scale(0.9);
    }
    &:disabled{
        background-color: gray;
        cursor: not-allowed;
    }
`

const LinkContainer= styled.div`
    display: flex;
    justify-content: space-between;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error =styled.span`
    color: red;
`

const Login = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const {error} = useSelector((state)=> state.user)

    const handleLogin = (e) =>{
        e.preventDefault()
        login(dispatch,{username,password})
    }

  return (
    <Container>
        <Wrapper>
            <Title>SING IN</Title>
            <Form>
                <Input placeholder="username (admin)" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="password (123456)" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button 
                onClick={handleLogin}
                >
                    LOGIN
                </Button>
                {error && <Error>Something went wrong</Error>}
                <LinkContainer>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREAT A NEW ACCOUNT</Link>
                </LinkContainer>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login