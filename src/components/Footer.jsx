import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column",})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none",})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover{
        transform: scale(1.1);
        color:pink;
    }
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#faf4f4",})}
`
const ContextItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment =styled.img`
    width: 50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MARKET</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, 
                quod! Dignissimos enim sequi voluptatum error? Obcaecati, 
                rerum? Iste, sunt? Earum cum molestiae ad adipisci magni 
                similique, perferendis saepe nostrum temporibus?
            </Desc>
            <SocialContainer>
                <SocialIcon color="2e5bd6">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="cb3fe7">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="3081cc">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="cc3030">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Context</Title>
            <ContextItem>
                <MapsHomeWorkIcon style={{marginRight: "10px"}}/>
                622 Dixie Path , South Tobinchester 98336
            </ContextItem>
            <ContextItem>
                <LocalPhoneIcon style={{marginRight: "10px"}}/>
                +66 123 4567
            </ContextItem>
            <ContextItem>
                <EmailIcon style={{marginRight: "10px"}}/>
                contact@email.com
            </ContextItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer