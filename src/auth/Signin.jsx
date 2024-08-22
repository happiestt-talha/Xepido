import React, { useState } from 'react'
import { Label, TextInput, Button } from 'flowbite-react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../store/user/userSlice'
import OAuth from '../components/Auth/OAuth'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        password: ''
    })
    //eslint-disable-next-line
    const [user, setUser] = useState(null)
    const handleChange = (e) => {
        setInput((prev) => {
            return { ...prev, [e.target.id]: e.target.value }
        })
    }
    console.log('Key: ', process.env.REACT_APP_FIREBASE_API_KEY)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.username || !input.password || input.username === "" || input.password === "") return
        try {
            console.log('Signing in...')
            console.log('input: ', input)
            dispatch(loginStart())
            const res = await axios.post('https://dummyjson.com/auth/login', input)
            console.log(res.data)
            dispatch(loginSuccess(res.data))
            setUser(res.data)
            navigate('/product-list')
            console.log('user: ', user)
        } catch (error) {
            console.log('Sign in error', error)
            dispatch(loginFailure(error.message))
            alert(error.message)
        }

    }

    return (
        <>
            <div className='max-h-screen'>
                <div className='mt-10 flex p-3 max-w-4xl mx-auto flex-col md:flex-row md:items-center gap-5'>

                    <div className='flex-1 order-2 md:order-1'>
                        <div>
                            <h1 className='text-3xl font-bold'>Kindly use the following credentials</h1>
                            <p>usename: emilys</p>
                            <p>password: emilyspass</p>
                        </div>
                        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                            <div>
                                <Label value='Your Username' />
                                <TextInput type='text' placeholder='username' id='username' value={input.username} onChange={handleChange} />
                            </div>
                            <div>
                                <Label value='Your password' />
                                <TextInput type='password' placeholder='password' id='password' value={input.password} onChange={handleChange} />
                            </div>
                            <Button gradientDuoTone={"tealToLime"} className='text-xl' type='submit' >Sign in</Button>
                            <OAuth />
                        </form>


                    </div>

                    <div className='flex-1 order-1 md:order-2'>

                        <div
                            className="text-center whitespace-nowrap font-semibold
                        bg-gradient-to-r from-yellow-400 via-lime-300 to-yellow-600 px-1
                    rounded-lg text-transparent bg-clip-text text-8xl">
                            Xepido Mart</div>
                        <p className='text-sm mt-5'>
                            This is a demo project. You can sign up with your email and password
                            or with Google.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signin