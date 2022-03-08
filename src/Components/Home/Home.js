import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'
import Sky from '../../Assets/Images/sky.jpg'

const useStyle = makeStyles({
    images: {
        width: '40%',
        height: '40%',
    }
})

const Home = () => {

    const classes = useStyle();
    return (
        <>
            <Box>
                <Typography variant='h3' style={{ color: '#FF0000', margin: '50' }}>Welcome to Home</Typography>
                <Box>
                    <img className={classes.images} src={Sky} alt="123" />
                </Box>
            </Box>

        </>
    )
}
export default Home;