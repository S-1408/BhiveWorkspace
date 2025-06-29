
import { Phone } from 'lucide-react';

const Header = ()=>{

     return (
        <div className="flex justify-between px-20 mt-5">
            <img src="/media/logo.png" width={125} height={40} alt="logo"/>
           <div className='border border-[#F2B304] rounded-lg p-2 text-[#F2B304]'> <Phone className="w-5 h-5" /></div>
 
        </div>
     )


}
export default Header