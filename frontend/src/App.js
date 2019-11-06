import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from "./routes";
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Container>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">dosugkzn.xyz</NavbarBrand>
            </Navbar>
            {routes.map((props, index) => <Route key={index} {...props} />)}
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
