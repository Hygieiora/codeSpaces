import { MdEmail } from "react-icons/md";
import { IoMdPerson, IoLogoWhatsapp } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import LoginImage from "./LoginImage";
import SecondLoginImage from "./SecondLoginImage";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link"



export default function LoginPage() {
  return (
    <div className="flex bg-white px-16 z-100 h-800 overflow-hidden">
    
    <div className="overflow-hidden">
        <section className="flex-1 min-h-screen w-[600px]">

            <div className="mb-6">
                <h2 className="text-blue-600 font-bold text-[60px] mt-20 leading-normal">hi</h2>
                <h1 className="text-black font-inter font-bold leading-normal text-5xl mb-3">Complete account form</h1>
            </div>

            <form action="" className="flex flex-col">
                <div className="block mt-5 relative">

                    <label className=" mb-4 grid w-100 w-[600px] h-[80px] font-normal text-base text-gray-700">Email address <MdEmail className=" absolute top-[58px] left-[575px] transform -translate-y-1/2 text-gray-500"/><input placeholder="Email" className="border rounded-md text-gray-500  px-2" type="Email"/></label>  

                    <label className="grid w-100 w-[600px] h-[80px] font-normal text-base text-gray-700"> Password <AiFillEyeInvisible className="absolute top-[156px] left-[575px] transform -translate-y-1/2 text-gray-500" /><input placeholder="Password" className="border rounded-md text-gray-500 px-2" type="password"/></label>  
                </div>

                <div className="flex justify-between mt-1">
                    <div className="">
                        <input className="" type="checkbox"/> <label className=""> Remember me </label>
                    </div>
                    <div className="">Forget Password</div>
                </div>
                <div className="mt-6 mx-auto gap-4">
                    <Link href="./">
                    <button className="w-[230px] h-[60px] bg-blue-100 rounded-full text-lg font-normal font-normal text-gray-400 mr-8">Complete account</button>
                    <Link href="/SignUp">  
                    </Link>
                    <button className="w-[230px] h-[60px] bg-blue-600 text-white rounded-full text-lg font-normal">Sign in</button>
                    </Link>
                </div>
            </form>

            <div className="mt-3 text-center text-sm font-normal text-gray-500">Make sure you have completed your profile to access all features.</div>
            <div className="flex align-center justify-center my-5">
                <span className=" inline-block w-20 h-1 bg-gray-300 mr-4 mt-3"></span>
                <span className="text-gray-300">OR</span>
                <span className=" inline-block w-20 h-1 bg-gray-300 ml-4 mt-3"></span>
            </div>
            <div className="flex align-center justify-center">
                <Link href='' className="border px-9 rounded-full py-1 flex align-center justify-center">
                <FcGoogle className="mt-1 mr-3" />
                <p className="text-normal font-normal text-gray-700 align-center" > Continue with Google</p>
                </Link>
            </div>
        </section>
    </div>

        <div className="">
            <LoginImage />
            <SecondLoginImage />
        </div>


    </div>
  )
}
