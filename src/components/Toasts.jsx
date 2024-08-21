import { Toast } from 'flowbite-react'
import React from 'react'
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi'

const Toasts = ({ type, text }) => {
    return (
        <>
            {type === "success" &&
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <HiCheck className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{text}</div>
                    <Toast.Toggle />
                </Toast>
            }
            {type === "error" &&
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{text}</div>
                    <Toast.Toggle />
                </Toast>

            }
            {type === "warning" &&
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                        <HiExclamation className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">{text}</div>
                    <Toast.Toggle />
                </Toast>

            }
        </>
    )
}

export default Toasts