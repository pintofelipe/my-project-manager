import React from 'react'
import { Link } from "react-router-dom";

const LoginUser = () =>{
    return(




        <header className='bg-beige-2 grid grid-cols-2 h-[600px] content-center'>
            <div className='bg-marron-2 h-[500px] flex justify-center items-center'>
                <div className=''>
                Logo
                <h1 className='text-2xl font-semibold'>Sing Up Form</h1>
                <h3>In React</h3>
                </div>
            </div>

            <div className='bg-marron-1 h-[500px] px-10'>
                <h2 className='mt-10 text-center text-1xl font-semibold'>Sing Up</h2>

               <div className='bg-marron-2 grid-rows-4 grid mt-4'>
                <input type="text" placeholder='Nombre' className='h-10 my-2 '/>
                <input type="email" placeholder='Email' className='h-10 my-2'/>
                <input type="password" placeholder='Contraseña' className='h-10 my-2'/>
                <div>Olvidaste Contraseña? 
                    <span className='text-marron-1'>Click Aquí</span>
                </div>

                <div className='flex justify-center mb-10'>
                    <Link to={"task-project"} className='bg-marron-1 rounded-xl mx-3 px-10 h-8'>           
                        sing up
                    </Link>
                    
                    <Link to={"header"} className='bg-beige-1 rounded-xl mx-3 px-10 h-8'>
                        sing in
                    </Link>
                </div>
               </div>

            </div>
        </header>


    )
}

export default LoginUser;