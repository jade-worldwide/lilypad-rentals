import React from "react";
import { Hero, HeroBody, Container, Title } from 'bloomer';
import 'bulma/css/bulma.css';
import "./MainHero.css";

export const MainHero = props => (

  <Hero isColor='info' isSize='medium' isFullHeight>

    <HeroBody>
        <Container hasTextAlign='centered'>
            {props.children}
        </Container>
    </HeroBody>

  </Hero>

);
