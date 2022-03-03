import styled from 'styled-components'

const StyledResultado = styled.div`
height: 3rem;
background-color: #22252D;
height: 100px;
display: flex;
flex-direction: column-reverse;
align-items: flex-end;
justify-content:flex-end;
padding-right: 0.5rem;
border-bottom: 3px solid #000;
border-radius: 20px 20px 0 0;
h3 {
    font-size: 2rem;
    color: #fff;
}
@media (min-width: 320px) and (max-width: 426px){
    h3{
        font-size: 1.5rem;
    }
}
`
export default StyledResultado