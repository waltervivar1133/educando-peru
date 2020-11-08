import React from 'react'
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer'

const nosotros = () => {



  return (
    <div>
      <Layout>
       
        <div className="container">
        <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img className="img-fluid rounded mb-4 mb-lg-0" src="https://placehold.it/900x400" alt=""/>
            </div>
      
        <div className="col-lg-5">
          <h1 className="font-weight-light">Business Name or Tagline</h1>
          <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
         
        </div>
     
        </div>
        <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h1 className="font-weight-light">Business Name or Tagline</h1>
          <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
         
        </div>
            <div className="col-lg-7">
              <img className="img-fluid rounded mb-4 mb-lg-0" src="https://placehold.it/900x400" alt=""/>
            </div>
      
        
     
        </div>
        <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img class="img-fluid rounded mb-4 mb-lg-0" src="https://placehold.it/900x400" alt=""/>
            </div>
      
        <div class="col-lg-5">
          <h1 class="font-weight-light">Business Name or Tagline</h1>
          <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
         
        </div>
     
        </div>
        </div>
        <Footer/>
      </Layout>
      
    </div>
  )
}

export default nosotros