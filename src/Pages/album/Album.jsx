import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TaskList from '../../components/TaskList';
import LigthBox from '../../components/LightBox';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LigthBox
            handleEventEl={<NoteAddIcon sx={{ mr: 2 }} />}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Agregar una Nueva Nota
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Mis Notas
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 5 }} maxWidth="md">
          {/* End hero unit */}
          <TaskList/>
        </Container>
      </main>
      
    </ThemeProvider>
  );
};