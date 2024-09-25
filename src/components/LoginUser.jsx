import React from 'react'


const LoginUser = () =>{
    return(
        <header className='bg-beige-2 grid grid-cols-2 h-96 content-center'>
            <div className='bg-marron-2 h-72 content-center'>
                Logo
                <h1>Sing Up Form</h1>
                <h3>In React</h3>
            </div>

            <div className='bg-marron-1 h-72'>
                <h2>Sing Up</h2>
                <input type="text" placeholder='Nombre'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Contraseña' />
                <div>Olvidaste Contraseña? 
                    <span className='text-marron-2'>Click Aquí</span>
                </div>

                <div className='flex justify-center'>
                    <button className='bg-marron-2 rounded-xl mx-3 px-10 h-8'>
                        sing up
                    </button>
                    
                    <button className='bg-beige-1 rounded-xl mx-3 px-10 h-8'>
                        sing in
                    </button>
                </div>

            </div>
        </header>


    )
}

export default LoginUser;