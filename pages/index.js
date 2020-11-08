import React  from 'react'
import Layout from '../components/layout/Layout';
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import Footer from '../components/layout/Footer'


const CardText = styled.div`
 position: absolute;    /* posición absolute con respecto al padre */
  bottom: 30rem;             /* posicionada en la esquina inferior derecha */
  left: 1rem;
  width: 500px;
  z-index: 10;
  
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 1.875rem;
  
  @media (max-width: 600px){
    width: 100%;
    left: 0;
    padding: 15px;
    margin: 0 !important;
  }
`;

const Home = () => {

  return (
    <div>
      <Layout>
      
          <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">
                Educando Peru
                </h1>
                <p class="lead font-italic">
                  " Learn Apply Be Patient Increase"
                </p>
              </div>
            </div>
      
         
          
          
        <Footer/>
      </Layout>

    </div>
  )
}



export default Home