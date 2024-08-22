import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { HiUser, HiLogout } from 'react-icons/hi'
import { FaStore } from 'react-icons/fa'

const DashSidebar = () => {
    const location = useLocation()
    const [tab, setTab] = useState('')
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search)
        const tabByUrl = queryParams.get('tab')
        if (tabByUrl) {
            setTab(tabByUrl)
        }
    }, [location.search])
    return (
        <>
            <Sidebar>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <span className='flex flex-col gap-2'>
                            <Link to='/dashboard?tab=profile'>
                                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'user'} labelColor='dark' as={'div'} >Profile</Sidebar.Item>
                            </Link>
                            <Link to='/create-store' >
                                <Sidebar.Item icon={FaStore} as={'div'} >Create Store</Sidebar.Item>
                            </Link>
                        </span>
                        <Sidebar.Item icon={HiLogout} >Logout</Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}

export default DashSidebar