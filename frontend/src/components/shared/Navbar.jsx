import { LucideAArrowDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='flex flex-center bg-white'>
        <div> 
            <h1 className='text-2xl'>OpenSkills</h1>
        </div>

        <ul className='flex'> 
            <li><Link>Home</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Companies</Link></li>
            <li><Link>Contact</Link></li>


        </ul>

    </div>
  )



  
}

export default Navbar