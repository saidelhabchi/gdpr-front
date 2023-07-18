'use client'
import {Button, Icon, TextField, IconButton, Modal} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
const GroupDemande = () => {
  const [open,setOpen] = useState(false)

  const handleAddRecord = ()=>{
    setOpen(true)
    console.log('add record')
  }
  const handleDownloadRecords = ()=>{
    console.log('download records')
  }
  return ( 
        <div className='flex justify-between p-5'>
            <h1 className='text-2xl' >Demandes:</h1>
            <div className='flex gap-5 justify-center items-center'>
            <Button variant="contained" className='bg-green-500 rounded-xl' color='success' onClick={handleAddRecord}>
              <AddIcon/>
            </Button>
            <Button variant="contained" className='bg-blue-500 rounded-xl' onClick={handleDownloadRecords}>
              <DownloadIcon/>
            </Button>
            <TextField
              id="searchBar"
              label="search..."
              type='search'
              size='small'
              value={null}
              onChange={()=>{}}
            />
            </div>
        </div>
     );
}
 
export default GroupDemande;