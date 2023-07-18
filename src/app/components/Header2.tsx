import Link from "next/link";

const Header2 = () => {
    return ( 
       <div className="flex justify-center items-center h-14 bg-black">
            <ul className="text-white flex justify-evenly gap-24">
                <li> <Link href="/dashboard/demandes">Demandes</Link> </li>
                <li> <Link href="/dashboard/autorisations">Autorisations</Link></li>
                <li> <Link href="/dashboard/redevances">Redevances</Link></li>
            </ul>
        </div>
     );
}
 
export default Header2;