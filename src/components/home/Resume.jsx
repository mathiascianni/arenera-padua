import React from 'react'

export default function
    () {
    return (
        <div className='mb-20'>
            <h2 className='uppercase font-anton text-small lg:text-large mb-4'>Extraemos la <span className='text-primary'>mejor</span> arena</h2>
            <p className='text-base lg:text-2xl mb-12'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi</p>
            <div className='grid grid-cols-5 gap-12'>
                <figure className='col-span-5 lg:col-span-3'>
                    <img src="/media/resume-image.jpg" alt="" className='w-full' />
                </figure>
                <p className='text-base lg:text-2xl col-span-5 lg:col-span-2 my-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, <span className='font-bold text-primary'>mattis ligula</span> consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non <span className='font-bold text-primary'>suscipit magna interdum eu</span>. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.</p>
            </div>
        </div>
    )
}
