import { MdEmail } from "react-icons/md";
import { IoMdPerson, IoLogoWhatsapp } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import LoginImage from "./LoginImage";
import SecondLoginImage from "./SecondLoginImage";
import Link from "next/link"



export default function SignUp() {
  return (
    <div className="flex bg-white px-16 z-100 h-800 overflow-hidden">
    
    <div className="overflow-hidden">
        <section className="flex-1 min-h-screen w-[600px]">

            <div className="mb-6">
                <h2 className="text-blue-600 font-normal text-[35px] mt-20 leading-normal">START YOUR JOURNEY</h2>
                <h1 className="text-black font-inter font-bold leading-normal text-6xl mb-3">Create new account</h1>
                <span className="font-normal text-base text-gray-500">Already have an account? <Link href="/components/LoginPage" className="text-blue-600">Log in</Link></span>
            </div>

            <form action="" className="flex flex-col">
                <div className="flex justify-between gap-3 relative">
                    <label className="grid w-[250px] h-[80px] font-normal text-base text-gray-700">Full name <IoMdPerson className="absolute top-[58px] left-[224px] transform -translate-y-1/2 text-gray-500"  /><input type="name" placeholder="Name" className="border rounded-md text-gray-500  px-2"  /></label>

                    <label className="grid w-[250px] h-[80px] font-normal text-base text-gray-700">Phone number <IoLogoWhatsapp className="absolute top-[58px] left-[575px] transform -translate-y-1/2 text-gray-500" /><input placeholder="Phone" className="border rounded-md text-gray-500  px-2" type="Phone"  /></label>                
                </div>
                <div className="block mt-5 relative">

                    <label className=" mb-4 grid w-100 w-[600px] h-[80px] font-normal text-base text-gray-700">Email address <MdEmail className=" absolute top-[58px] left-[575px] transform -translate-y-1/2 text-gray-500"/><input placeholder="Email" className="border rounded-md text-gray-500  px-2" type="Email"/></label>  

                    <label className="grid w-100 w-[600px] h-[80px] font-normal text-base text-gray-700"> Password <AiFillEyeInvisible className="absolute top-[156px] left-[575px] transform -translate-y-1/2 text-gray-500" /><input placeholder="Password" className="border rounded-md text-gray-500 px-2" type="password"/></label>  
                </div>

                <div className="mt-6 mx-auto gap-4">

                    <Link href="/SignUp">
                        <button className="w-[230px] h-[60px] bg-blue-100 rounded-full text-lg font-normal font-normal text-gray-400 mr-8">Complete account</button>
                    </Link>

                    <Link href="/LoginPage">  
                        <button className="w-[230px] h-[60px] bg-blue-600 rounded-full text-white  text-lg font-normal">Create account</button>
                    </Link>

                </div>
            </form>

            <div className="mt-3 text-center text-sm font-normal text-gray-600">After creating account, complete your profile to access full features.</div>
        
        </section>
    </div>

        <div className="">
            <LoginImage />
            <SecondLoginImage />
        </div>


    </div>
  )
}
