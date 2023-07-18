/* eslint-disable react/jsx-no-undef */
'use client'
import { Avatar, Menu, MenuItem, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import Istp from '../../../public/istp.png';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header1 = () => {

    const router = useRouter()
    const [anchor,setAnchor] = useState<null | HTMLElement>(null)
    const open = Boolean(anchor)

    const handleClick = (event : React.MouseEvent<any>)=>{
        setAnchor(event.currentTarget)
    }

    function handleClose(): void {
        setAnchor(null)
    }

    return ( 
        <div className="flex justify-between items-center">
            <div>
                <Link href="/dashboard">
                    <Image src={Istp} alt={"logo istp"} width={80} height={80} className="mx-5"/>
                </Link>
            </div>
            <div className="flex gap-10 justify-center items-center p-10">
                <span className="">Username</span>
                <Avatar  sx={{ bgcolor: grey[700] }} 
                        onClick={handleClick} 
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                </Avatar>
                <Menu 
                    id="basic-menu"
                    anchorEl={anchor}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=>{console.log('profile')}}>Profile</MenuItem>
                    <MenuItem onClick={()=>{console.log('account')}}>Account</MenuItem>
                    <Divider
                      variant="fullWidth"
                      orientation="horizontal"
                    />
                    <MenuItem onClick={()=>{router.replace('/')}}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
     );
}
 
export default Header1;