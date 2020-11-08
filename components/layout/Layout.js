import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Head>
                <title>Product Hunt Firebase y Next.js</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>
                
                <link href="/static/css/app.css" rel="stylesheet" />

            </Head>
            <Global 
                styles={css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2: #6F6F6F;
                        --gris3: #e1e1e1;
                        --naranja: #DA552F;
                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem; 
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto Slab', serif;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                    a {
                        text-decoration: none;
                    }

                    img {
                        max-width: 100%;
                    }
                    .jumbotron{
                        background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url('/static/img/fondo2.jpg');
                        background-attachment: fixed;
                        background-repeat: no-repeat;
                        background-size: cover; 
                        height: 350px;
                        }

                        /* appliquer un color au h1 et p #fff */
                        .display-4, .lead{
                        color: #fff;
                        text-align: center;
                        }
                    
                    .footer-distributed{
                        background-color: #292c2f;
                        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
                        box-sizing: border-box;
                        width: 100%;
                        text-align: left;
                        font: bold 16px sans-serif;

                        padding: 55px 50px;

                    }

                    .footer-distributed .footer-left,
                    .footer-distributed .footer-center,
                    .footer-distributed .footer-right{
                        display: inline-block;
                        vertical-align: top;
                    }

                    .footer-distributed .footer-left{
                        width: 40%;
                    }

                    .footer-distributed h3{
                        color:  #ffffff;
                        font: normal 36px 'Cookie', cursive;
                        margin: 0;
                    }

                    .footer-distributed h3 span{
                        color:  #5383d3;
                    }


                    .footer-distributed .footer-links{
                        color:  #ffffff;
                        margin: 20px 0 12px;
                        padding: 0;
                    }

                    .footer-distributed .footer-links a{
                        display:inline-block;
                        line-height: 1.8;
                        text-decoration: none;
                        color:  inherit;
                    }

                    .footer-distributed .footer-company-name{
                        color:  #8f9296;
                        font-size: 14px;
                        font-weight: normal;
                        margin: 0;
                    }


                    .footer-distributed .footer-center{
                        width: 35%;
                    }

                    .footer-distributed .footer-center i{
                        background-color:  #33383b;
                        color: #ffffff;
                        font-size: 25px;
                        width: 38px;
                        height: 38px;
                        border-radius: 50%;
                        text-align: center;
                        line-height: 42px;
                        margin: 10px 15px;
                        vertical-align: middle;
                    }

                    .footer-distributed .footer-center i.fa-envelope{
                        font-size: 17px;
                        line-height: 38px;
                    }

                    .footer-distributed .footer-center p{
                        display: inline-block;
                        color: #ffffff;
                        vertical-align: middle;
                        margin:0;
                    }

                    .footer-distributed .footer-center p span{
                        display:block;
                        font-weight: normal;
                        font-size:14px;
                        line-height:2;
                    }

                    .footer-distributed .footer-center p a{
                        color:  #5383d3;
                        text-decoration: none;;
                    }

                    .footer-distributed .footer-right{
                        width: 20%;
                    }

                    .footer-distributed .footer-company-about{
                        line-height: 20px;
                        color:  #92999f;
                        font-size: 13px;
                        font-weight: normal;
                        margin: 0;
                    }

                    .footer-distributed .footer-company-about span{
                        display: block;
                        color:  #ffffff;
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    .footer-distributed .footer-icons{
                        margin-top: 25px;
                    }

                    .footer-distributed .footer-icons a{
                        display: inline-block;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        background-color:  #33383b;
                        border-radius: 2px;

                        font-size: 20px;
                        color: #ffffff;
                        text-align: center;
                        line-height: 35px;

                        margin-right: 3px;
                        margin-bottom: 5px;
                    }


                    @media (max-width: 880px) {

                        .footer-distributed{
                            font: bold 14px sans-serif;
                        
                        }

                        .footer-distributed .footer-left,
                        .footer-distributed .footer-center,
                        .footer-distributed .footer-right{
                            display: block;
                            width: 100%;
                            margin-bottom: 40px;
                            text-align: center;
                        }

                        .footer-distributed .footer-center i{
                            margin-left: 0;
                        }
                        .main {
                            line-height: normal;
                            font-size: auto;
                        }

                    }
                `}
            />


        

            <Header />

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;