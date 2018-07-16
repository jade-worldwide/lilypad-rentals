import React from "react";
import { Hero, HeroBody, Container, Title } from 'bloomer';
import 'bulma/css/bulma.css';
import "./MainHero.css";

export const MainHero = props => (

  <Hero isSize='medium' isFullHeight>

    <HeroBody>

        <Container>
          <Title>Let the perfect home find you!</Title>
            {props.children}
        </Container>
    </HeroBody>

  </Hero>

);
