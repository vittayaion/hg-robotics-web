import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
export const Header = () => {
    return (
        <Card sx={{ minWidth: 275,paddinBottom: '16px' }}>
            <CardContent>
                <Typography variant="h3" gutterBottom component="div">
                    Unit conversion system
                </Typography>
            </CardContent>
        </Card>
    )
}
