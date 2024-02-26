import { createGlobalStyle } from "styled-components";
  

export const GlobalStyle = createGlobalStyle `

    :root { 
        --background: #121214;
        --shap_principal: #202024;
        --shap_secundaria: #29292E;
        --shap_terciaria: #323238;

        --grean_dark: #015F43;
        --grean: #00875F;
        --grean_light: #00B37E ;

        --red_dark: #AA2834;
        --red: #F75A68;

        --place_holder: #7C7C8A;
        --texto_base: #C4C4CC;
        --titulos: #E1E1E6;
        --white: #FFFFFF
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        } 

    html{
        @media (max-width: 1080px ){
            font-size: 93.75%
        }

        @media (max-width: 720px ){
            font-size: 87.5%
        }
    }


    body, button, input, textarea {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    body {
        background: var(--shap_terciaria);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`

