import styled from "styled-components";
import { NavLink } from "react-router-dom"
export default function Navigation() {


    return(
        <List>
        <SLink to={"/"}>
            <h4>Home</h4>
        </SLink>
        <SLink to={"/about"}>
            <h4>About</h4>
        </SLink>
        <SLink to={"/contact"}>
            <h4>Contact</h4>
        </SLink>
        </List>
    )
}


const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`
const SLink = styled(NavLink)`
    display:flex;
    flex-direction : column;
    justify-content :  center; 
    align-items : center; 
    border-radius : 50%;
    margin-right:2rem;
    background : linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    cursor : pointer;
    transform : scale(0.8);

    h4{
        color:white;
        font-size : 1rem;
        margin-top:0.5rem;
    }`