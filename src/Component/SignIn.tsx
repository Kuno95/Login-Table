import axios from "axios"
import { useForm , SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'


type Inputs = {
  username: string
  password: string
}

export default function SignIn() {
  let navigate = useNavigate();
  const setLocalAndSave = (newTask:string) => {
    localStorage.setItem('token', JSON.stringify(newTask));
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
      axios.post(`https://dummyjson.com/auth/login`,data)
      .then((response) => {
        console.log(response)
        setLocalAndSave(response.data.token)
        navigate('/')
        window.location.reload()
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-around items-center ">
        <div className="flex flex-col items-start mt-8 max-w-sm">
            <h2 className="text-red-500 font-bold text-[22px]">VINOVA</h2>
            <p className="text-[27px] font-bold my-3">RESOURCE MANAGEMENT</p>
            <p className="text-[20px]">The #1 tool to plan capacity and schedule work</p>
            <div className="flex items-center gap-2 ml-2">
                <p className="h-[0.5px] w-[130px] bg-black"></p>
                <p className="text-[20px] my-3 font-medium">Log in</p>
                <p className="h-[0.5px] w-[130px] bg-black"></p>
            </div>
            <label>Email</label>
            <input className="border border-black rounded h-[40px] w-[350px] mb-3 border-opacity-40" 
            {...register("username")} 
            placeholder=" Email" />
            <label>Password</label>
            <input className="border border-black rounded h-[40px] w-[350px] mb-3 border-opacity-40" 
            {...register("password")} 
            placeholder=" Password"/>
            <p>Forgot your password?</p>
            <button className="bg-blue-400 h-[40px] w-[350px]">Login</button>
            <div className="flex items-center gap-2 ml-5">
                <p className="h-[0.5px] w-[90px] bg-black"></p>
                <p className="text-[14px] my-3">Or continue with</p>
                <p className="h-[0.5px] w-[90px] bg-black"></p>
            </div>
            <button className="border-blue-500 text-blue-500 h-[40px] w-[350px] ">Login with SSO</button>
        </div>
        <div>
            <img src="/src/Image/Frame.png" alt="" className="w-[830px] h-627px"/>
        </div>
    </form>
  )
}