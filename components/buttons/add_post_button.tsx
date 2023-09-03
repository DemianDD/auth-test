'use client'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import CreateCard from '../create_card';

const AddPostButton = () => {
    const [window, setWindow] = useState(false);
    const [buttonText, setButtonText] = useState('Add Post');
    const handleClick = () => {
        setWindow(!window);
        setButtonText(window ? 'Add Post' : 'Close');
    }
  return (
    <Box sx={{position: 'fixed', bottom: 15, right: 15, zIndex: 1}}>
        <Button type='button' variant="contained" color='success' onClick={handleClick}>
            {buttonText}
        </Button>
        {window && <CreateCard/>}
    </Box>
  )
}

export default AddPostButton