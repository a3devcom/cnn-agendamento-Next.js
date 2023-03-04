import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';



const Navbar = () => {
  return(
<AppBar
position="absolute"
color="default"
elevation={0}
sx={{
  position: 'relative',
  borderBottom: (t) => `1px solid ${t.palette.divider}`,
}}
>
<Toolbar>
  <Image src="/images/logo.png" alt="logo" width={400} height={400}/>
</Toolbar>
</AppBar>    
)
}

export default Navbar;
