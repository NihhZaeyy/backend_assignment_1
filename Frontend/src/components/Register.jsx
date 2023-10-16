import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigateToLoginPage = useNavigate()

  return (
    <>
        <div className='bg-[#222222] w-screen h-screen flex justify-center items-center'>
            <div className='w-[40%] h-[75%] rounded-lg p-5 bg-white'>
                <h1 className='text-center font-bold mb-5'>Let's Introduce Yourself</h1>
                <div>
                    <p className='text-[14px] font-bold'>My firstname is:</p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="text" id="firstname" name="firstname" placeholder='Nizar' />
                    </form>
                </div>
                <div>
                    <p className='text-[14px] font-bold'>My lastname is:</p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="text" id="lastname" name="lastname" placeholder='Almas' />
                    </form>
                </div>
                <div>
                    <p className='text-[14px] font-bold'>My email address:</p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="email" id="lastname" name="lastname" placeholder='example@email.com' />
                    </form>
                </div>
                <div>
                    <p className='text-[14px] font-bold'>My Telephone number: </p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="number" id="contact" name="contact" placeholder='+90 111 222 34 56' />
                    </form>
                </div>
                <div className='mt-5'>
                    <p className='text-[14px] font-bold'>My secret password: </p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="text" id="password" name="password" />
                    </form>
                </div>
                <div>
                    <p className='text-[14px] font-bold'>Can you repeat that password again please: </p>
                    <form className='mt-1 rounded-md border-2' action="" method="post">
                        <input className='w-full px-2 h-[30px]' type="text" id="password2" name="password2" />
                    </form>
                </div>

                <div className='mt-4 flex justify-center items-center'>
                    <button onClick={() => navigateToLoginPage('/login')} className='px-4 py-2 rounded-lg bg-green-700 text-white'>Register</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register