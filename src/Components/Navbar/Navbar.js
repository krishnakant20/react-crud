import { AppBar,Typography,Toolbar, } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
});


const Navbar = ()=>{

    const classes = useStyles();

    return(
        <AppBar className={classes.header} position='static' >
            <Toolbar>
                <Typography component='h2'>React crud app</Typography>
                <Typography component='h2'>GetUsers</Typography>
                <Typography component='h2'>AddUsers</Typography>
            </Toolbar>
        </AppBar>
        
    )
}

export default Navbar;