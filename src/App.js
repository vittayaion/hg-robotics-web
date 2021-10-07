import './App.css';
import { Measurement } from './components/measurement';
import Grid from '@mui/material/Grid';
import { Header } from './components/header';
import { Result } from './components/result';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function App() {
  const [result, setResult] = useState('')
  const [tab, setTab] = useState('1');
  const lengthData = [
    { unitName: 'Meter', unitCount: 1 },
    { unitName: 'Centimeter', unitCount: 100 },
    { unitName: 'Wa', unitCount: 0.5 },
    { unitName: 'Kilometer', unitCount: 0.001 },
    { unitName: 'Mile', unitCount: 6.2137 }
  ]

  const areaData = [
    { unitName: 'Square meter', unitCount: 1 },
    { unitName: 'Square centimeters', unitCount: 100000 },
    { unitName: 'Rai', unitCount: 0.000625 }
  ]

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', typography: 'body1', bgcolor: 'white', }}>
              <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Length" value="1" />
                    <Tab label="Area" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1"><Measurement setResult={setResult} data={lengthData}/></TabPanel>
                <TabPanel value="2"><Measurement setResult={setResult} data={areaData}/></TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Result result={result} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
