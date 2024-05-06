import React from 'react'
import { RiHeartFill, RiInstagramFill, RiTwitterFill, RiGithubFill } from '@remixicon/react'

const Footer = () => {
    return (
        <footer className='py-7 px-4 bg-secondary text-left'>
            <div className='flex justify-between items-center mb-2'>
                <div className='text-base text-primary font-teko flex flex-row font-semibold'>
                    <span className='mr-1'>Made with</span>
                    <RiHeartFill size={16} color='red' />
                    <span className='ml-1'>by Kunal</span>
                </div>
                <div className='flex justify-center items-center'>
                    <a className='text-primary text-xl mx-2' href="https://www.instagram.com/kunalkcube">
                        <RiInstagramFill size={20} color='black' />
                    </a>
                    <a className='text-primary text-xl mx-2' href="https://www.twitter.com/kunalkcube">
                        <RiTwitterFill size={20} color='black' />
                    </a>
                    <a className='text-primary text-xl mx-2' href="https://www.github.com/kunalkcube/">
                        <RiGithubFill size={20} color='black' />
                    </a>
                </div>
            </div>
            <div>
                <p className='text-base text-primary font-teko font-semibold'>© 2023 Kunalkcube. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer