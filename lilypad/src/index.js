import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { Container, Box, Button, Column } from 'bloomer';
import 'bulma/css/bulma.css';

ReactDOM.render(
    <Container>
        <Box>Hello World!</Box>
          <Button isColor='info' render={
          props => <Column hasTextAlign='centered'><p {...props}>Button</p></Column>
      } />
    </Container>,
    document.getElementById('root')
)
