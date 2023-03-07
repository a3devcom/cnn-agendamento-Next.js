import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <CircularProgress size='5rem'/>
    </div>
  );
};

export default Loading;