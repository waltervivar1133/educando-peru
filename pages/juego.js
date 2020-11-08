import React from 'react'
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled';
import Footer from '../components/layout/Footer'

const CentradoTotal = styled.div`
  width: 100%;
  height: auto;
  display : flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const juego = () => {



  return (
    <div>
      <Layout>
        
        <CentradoTotal>
        <iframe frameborder="0" src="https://itch.io/embed-upload/2933363?color=333333" allowfullscreen="" width="1280" height="720"><a href="https://redstarxd.itch.io/educando-peru">Play Educando Perú on itch.io</a></iframe>
        </CentradoTotal>
        <Footer/>
      </Layout>
    </div>
  )
}

export default juego