import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

export const Result = ({result}) => {
    return (
        <Card sx={{ minWidth: 275, paddinBottom: '16px' }}>
            <CardContent>
                <Typography variant="h4" gutterBottom component="div">
                    Result :{result}
                </Typography>
            </CardContent>
        </Card>
    )
}
