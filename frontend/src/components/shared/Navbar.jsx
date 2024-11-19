
import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'



function Navbar() {
    return (
        <div className=' bg-white'>

            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>OpenSkills</h1>
                </div>
                <ul className='flex font-medium items-center gap-5'>
                    <li><Link>Home</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>Companies</Link></li>
                    <li><Link>Contact</Link></li>

                </ul>
                <Popover>
                  
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                               
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            
                    </PopoverContent>
                </Popover>

            </div>


        </div>
    )




}

export default Navbar