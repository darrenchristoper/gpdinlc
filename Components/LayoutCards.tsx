import {motion} from "framer-motion"
import {useState} from "react"
import 'tailwindcss/tailwind.css';
import  './layout.css'

// @ts-ignore
export default function Layout ({title , description }){

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

<div className="p-1">
    <motion.div className="card shadow-2xl" onClick={() => setIsOpen(!isOpen)}>
        <motion.h2 layout="position" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </motion.h2>
        {isOpen && (
            <motion.div>
                <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </motion.div>
        )}
    </motion.div>
</div>

        </>
    )
}