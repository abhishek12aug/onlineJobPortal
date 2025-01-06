
import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'



function Navbar() { 
    
    const user = false ; 
    

    
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
                
                { 
                    !user ? ( 
                        <div className='flex items-center gap-2'> 
                            <Button variant='outline'>Login</Button>
                            <Button>Sign Up</Button>

                        </div>
                    ) : (

                    <Popover>

                    <PopoverTrigger asChild>
                        <Avatar className='cursor-pointer'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className='w-80'>
                        <div className=''>
                            <h4 className='font-medium'>Abhishek</h4>


                            <div className='flex  gap-3'>
                                <Button variant='link'>View Profile</Button>
                                <Button variant='link'>Logout</Button>
                              
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
                    )
                }

                
                
            </div>


        </div>
    ) 





}

export default Navbar