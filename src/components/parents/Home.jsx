import React from 'react'
import styled from 'styled-components'
import { Top } from '../childs/Home/Top'
import { Middle } from '../childs/Home/Middle'
const Home = () => {
  return (
    <Container className="bg-gradient-to-bl from-cyan-400 via-cyan-500 to-blue-900">
       <Top />
       <Middle />
    </Container>
  )
}

export default Home

const Container=styled.div``
