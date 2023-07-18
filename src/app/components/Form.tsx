/* eslint-disable @next/next/no-img-element */
'use client'
 
import { Button, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Istp from '../../../public/istp.png';
import { useState } from 'react';


const Form = () => {
    
    const router = useRouter()
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const handleClickLogin = ()=>{
        if(!login ||!password){
            alert("Please fill all fields.")
        }else if(login === 'said' && password === 'root'){
            router.replace("/dashboard/demandes")
        }else {
            alert("false credentials")
        }
    }

    const handleEnter = (event:any) => {
        if(event.key === "Enter"){
            handleClickLogin()
        }
    }
    return ( 
        <div className="shadow-xl bg-white rounded-lg w-96 flex flex-col justify-center items-center gap-5 p-20" onKeyDown={(e) => { handleEnter(e) } }>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl'>Login</h1>
                <Image src={Istp} alt={''} width="80" height="80"/>
            </div>
            <div className="">
            <TextField id="standard-basic" label="Login" variant="standard" value={login} onChange={(e)=> setLogin(e.target.value) }/>
            </div>
            <div className="">
            <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e)=> setPassword(e.target.value) } />
            </div>
            <div className="text-base flex gap-2">
                <Button variant="contained" color='primary' className='lowercase bg-blue-700' onClick={handleClickLogin} >Login</Button>
                <Button variant="text" className='lowercase'>Forget password ?</Button>
            </div>
        </div>
     );
}
 
export default Form;
