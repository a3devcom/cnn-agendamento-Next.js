import { Box } from '@mui/material';
import { Button } from '@mui/material';

const NextBackButton = ({ handleClick, handleBack, disabled}) => {
  return(
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
        Voltar
      </Button>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={ disabled }
        sx={{ mt: 3, ml: 1,'&:hover': {
          backgroundColor: '#48bbc1',
          color: '#fff',
        }, }}
      >
        Próximo
      </Button>
    </Box>
  );
};

export default NextBackButton;