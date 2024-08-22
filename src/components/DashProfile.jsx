import { Button, TextInput } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/user/userSlice'
const DashProfile = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.user)

    console.log('currentUser: ', currentUser)
    return (
        <>
            <div className='max-w-lg mx-auto p-3 w-full'>
                <h1 className="my-7 font-semibold text-center text-3xl">Profile</h1>

                <form className="flex flex-col gap-4">
                    <img src={`https://dummyjson.com/icon/${currentUser?.username}/128`} alt="Could not be loaded" className='w-32 h-32 rounded-full mx-auto cursor-pointer' />

                    <TextInput type="name" id="name" label="username" placeholder='Username' defaultValue={currentUser?.username} />
                    <TextInput type="email" id="email" label="Email address" placeholder='Email address' defaultValue={currentUser?.email} />
                    <TextInput type="pssword" id="password" label="Password" placeholder='**********' />
                    <Button type="submit" gradientDuoTone="purpleToBlue" outline>Update</Button>
                </form>
                <div className='text-red-500 flex justify-between mt-3 '>
                    <span className='cursor-pointer hover:text-red-700 '>Delete Account</span>
                    <span className='cursor-pointer hover:text-red-700 ' onClick={() => {dispatch(logout())}}>Sign Out</span>
                </div>
            </div>
        </>
    )
}

export default DashProfile