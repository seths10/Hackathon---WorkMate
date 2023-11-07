import * as React from "react";
import { siteTitle } from "../../../constants/app";
import { Button } from "../../../components/button";
import MainLogo from '../../../assets/images/workmate.png'
import SignInImg from '../../../assets/images/signin.png'


const LoginScreen = () => {
  React.useEffect(() => {
    document.title = `Login | ${siteTitle}`;
  }, []);

  return (
    <div className="w-screen flex h-screen">
      {/* <p className="font-bold">Login Page</p> */}
      <div className="flex-auto w-10 bg-orange-100 p-5">
          <img src={MainLogo} alt="mainlogo" className="logo w-64" />
          <div className="signupImg flex items-center justify-center h-5/6">
            <img src={SignInImg} alt="Signup png" className="w-96 object-cover"/>
          </div>
        </div>

          <div className="login-form flex-auto w-64 ">

            <div className="flex items-center justify-end space-x-2">
              <label className=" me-5 mt-2 text-xl">Dont't have an account? </label>
            
              <Button label={"Register"} width={100}  onClick={function (): void {
                throw new Error("Function not implemented.");
                } }>
              </Button>

            </div>

           


            <div className=" welcom  ms-8 flex flex-col my-2">

              <label className=" text-4xl font-bold mt-7 ">Welcome to WorkMate! </label>
              
              <label className=" mt-1 text-lg">Login into your account </label>


              
              <form className="ms-8 w-[600px]" method='/'>
                <div className="mt-10">  
                  <div className="md:w-1/2 px 3 mb-6 md:mb-0">
                    <label className=" mt-5 mb-1 text-lg mb-2">Email </label>
                    <input name="Email" type="email" placeholder="Type Here" className=" peer h-full w-full rounded-md border border-gray-700 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50 border-style: border-solid border-2 border-orange-600 rounded-md"></input>
                    </div>
                  <div className="md:w-1/2 px 3 mb-6 md:mb-0">
                    <label className="mt-5 mb-1 text-lg">Passowrd </label>
                    <input name="Password" type="password" placeholder="Type Here" className="mb-2 peer h-full w-full rounded-md border border-gray-700 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50 border-style: border-solid border-2 border-orange-600 rounded-md"></input>
                  </div>

                  <Button label={"Login"} width={100}  onClick={function (): void {
                    throw new Error("Function not implemented.");
                    } }>
                  </Button>
                  </div>  
              </form>
              
            </div>

          </div>
    </div>
  );
};

export default LoginScreen;
