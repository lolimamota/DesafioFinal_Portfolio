import styled from 'styled-components';

export const Div = styled.div`
width: 50%;
font-size: 0.8rem;
text-align: center;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
overflow: hidden;
border: solid #6d72c3;
margin: 15px;
padding: 1rem;

img{
    width: 200px;
    border-radius: 15% ;
}
@media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
}

`;