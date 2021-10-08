import React, { useState, useEffect, useCallback } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';


export const Measurement = ({ setResult, data }) => {
    const [value, setValue] = React.useState(0);
    const [unitValue, setUnitValue] = React.useState(1);
    const [unitValue2, setUnitValue2] = React.useState('');
    const [newUnit, setNewUnit] = useState(false);
    const [newUnitName, setNewUnitName] = useState('');
    const [newUnitCount, setNewUnitCount] = useState(0);
    const [UnitData, setUnitData] = useState([
    ]);
    
    
    const handleUnitChange = (event) => {
        setUnitValue(event.target.value);
    };
    const handleUnit2Change = (event) => {
        setUnitValue2(event.target.value);
    };
    
    useEffect(() => {
        data && setUnitData(data)
    }, [])

    useEffect(() => {
        if (value && unitValue && unitValue2) {
            const result = (value / unitValue) * unitValue2
            const { unitName } = UnitData.find(item => item.unitCount === unitValue2)
            setResult(`${result} ${unitName}`)
        }
    }, [value, unitValue, unitValue2])

    const addNewUnit = () => {
        if (newUnitName && newUnitCount) {
            setUnitData(data => [...data, { unitName: newUnitName, unitCount: newUnitCount }])
            setNewUnit(false)
        }
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Grid container spacing={2}>
                    {!newUnit && (<>
                        <Grid item xs={4}>
                            <InputLabel id="demo-multiple-name-label">Value</InputLabel>
                            <TextField id="outlined-basic"
                                label=""
                                variant="outlined"
                                onChange={(event) => setValue(event.target.value)}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel id="demo-multiple-name-label">Unit Name</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={unitValue}
                                    label="Unit Name"
                                    onChange={handleUnitChange}
                                    margin={'normal'}
                                >
                                    {UnitData.map(item => <MenuItem value={item.unitCount} key={item.unitCount}>{item.unitName}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel id="demo-multiple-name-label">Unit Name2</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={unitValue2}
                                    label="Unit Name2"
                                    onChange={handleUnit2Change}
                                    margin={'normal'}
                                >
                                    {UnitData.map(item => <MenuItem value={item.unitCount}>{item.unitName}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <IconButton aria-label="delete" size="small" onClick={() => setNewUnit(true)}>
                                <AddIcon fontSize="inherit" />
                                Add another unit
                            </IconButton>
                        </Grid>
                    </>)}
                    {newUnit && (
                        <>
                            <Grid item xs={6}>
                                <InputLabel id="demo-multiple-name-label">New Unit Name</InputLabel>
                                <TextField id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    onChange={(event) => setNewUnitName(event.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel id="demo-multiple-name-label">Unit Count (Meter/Value)</InputLabel>
                                <TextField id="outlined-basic"
                                    label=""
                                    variant="outlined"
                                    onChange={(event) => setNewUnitCount(event.target.value)}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={addNewUnit}>
                                    Submit
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card>
    )
}
