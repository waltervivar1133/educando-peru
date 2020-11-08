import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Navegacion from './Navegacion';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.img`
 width: 10rem;
 height: 5rem;
 display:block;
 background-size: 100%;
 background-image : url('/static/img/logo.png');
 border: none;
`

const Header = () => {


    const { usuario, firebase } = useContext(FirebaseContext);

    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContenedorHeader>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                       <Logo/>
                    </Link>
                    

               

                    <Navegacion />
                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    { usuario ? (
                        <>
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            >Hola: {usuario.displayName} </p>
                            <Boton
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion() }
                            >Cerrar Sesión</Boton>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Boton
                                    bgColor="true"
                                >Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    ) }
                </div>
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;