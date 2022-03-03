import React from 'react'
import styled from 'styled-components'

const Titulo = styled.div`
text-align: center;
color: #fff;
@media (min-width: 320px) and (max-width: 426px){
  h1{
    font-size: 1.5rem;
  }
    
}
`

const Header = () => {
  return (
    <Titulo>
      <h1>Calculadora</h1>
    </Titulo>
  )
}
export default Header