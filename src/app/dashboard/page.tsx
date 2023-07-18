'use client'

import { useRouter } from "next/navigation";
const Home = () => {
    const router=useRouter();
    router.push("/dashboard/demandes")
    return ( 
        <></>
     );
}
 
export default Home;