import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paragraph from '../Components/Paragraph';

export default function Home() {

    const navigate = useNavigate();

    const [ input, setInput] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log('Form is submitted')
        navigate('/searched/'+input)

    }

    return(
        <>
        <h1 style={{textAlign:'center'}}>Home Page</h1>
        {/* <Form onSubmit={handleSubmit}>
            <input
             placeholder='Search : '
             value={input}
             onChange={(e)=>setInput(e.target.value)}

             />
        </Form> */}
        <Paragraph/>
         </>
    )
}


const Para = styled.p`
    margin:2em 30rem;
`

const Form = styled.form`
    display:flex;
    justify-content:center; 

    input{
        border : none;
        background : linear-gradient(35deg, #494949, #313131);
        font-size : 1.5rem;
        color:white;
        padding :1rem 3rem;
        border : none;
        outline :none;
        border-radius : 1rem;
    }
    
`