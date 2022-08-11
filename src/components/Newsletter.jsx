import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #f0e4ed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center",})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1.5px solid lightgray;
    ${mobile({width:"80%",})}
`
const Input = styled.input`
    border: none;
    flex:8;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    background-color: #0b8d4c;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite product.</Desc>
        <InputContainer>
            <Input placeholder='Your email...'/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter