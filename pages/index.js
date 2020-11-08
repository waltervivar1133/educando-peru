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

            <div className="container p-4">
              <h1 className="text-center"> Nuestros Servicios!</h1>
              <div className="row p-5">
                <div className=" col-sm-12 col-md-4 pb-3 ">
                  <div className="card" >
                    <img className="card-img-top "  height="350px" src="https://firebasestorage.googleapis.com/v0/b/educandoperu-ba4d6.appspot.com/o/ilustracion.jpg?alt=media&token=d2f0d303-1213-4c69-bf5b-42a9910fe41d" alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                    </div>
                  </div>
                  </div>
                  <div className=" col-sm-12 col-md-4 pb-3">
                  <div className="card" >
                    <img className="card-img-top "  height="350px"  src="https://firebasestorage.googleapis.com/v0/b/educandoperu-ba4d6.appspot.com/o/ilustracion2.png?alt=media&token=389fe488-8199-4eb6-a842-04746046bc49" alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                    </div>
                  </div>
                  </div>
                  <div className=" col-sm-12 col-md-4 pb-3">
                  <div className="card" >
                    <img className="card-img-top "  height="350px"  src="https://firebasestorage.googleapis.com/v0/b/educandoperu-ba4d6.appspot.com/o/ilustracion3.jpg?alt=media&token=912fdc8a-1ab0-4091-b552-273503bdc50b" alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     
                    </div>
                  </div>
                  </div>
                </div>
              </div>
         
      
         
          
          
        <Footer/>
      </Layout>

    </div>
  )
}



export default Home