import React from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {
  return (
    <React.Fragment>
      {/* <AppBar style={{ position: 'relative', backgroundColor: 'grey' }}>
        <Toolbar>
          <Typography variant="h6" style={{ marginLeft: '2px', flex: 1 }}>
              India
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <CssBaseline /> */}
      <Container maxWidth="100%">
          <AreaSelector />
      </Container>
    </React.Fragment>
  );
}

export default App;
