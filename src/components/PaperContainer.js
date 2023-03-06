import { Container, Paper } from '@mui/material';

const PaperContainer = ({ children }) => {
  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4, mt: 4, display: 'flex', flexDirection: 'column' }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {children}
      </Paper>
    </Container>
  );
}

export default PaperContainer;