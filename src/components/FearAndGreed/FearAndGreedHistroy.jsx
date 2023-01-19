import React from 'react'
import { useEffect, useState } from 'react'

const FearAndGreedHistory = ({ history }) => {

    if (!history.length) {
        return (
            <h4 className='text-2xl'>Historical Values</h4>
        )
    }

    return (
        <div className='card w-96 bg-base-300 shadow-xl p-6'>
            <h4 className='text-2xl'>Historical Values</h4>
            <ul className='h-full flex flex-col justify-around'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl text-white'>Today</h4>
                        <span>{history[0].value_classification}</span>
                    </div>
                    <span className='mr-6 bg-accent text-white w-12 h-12 flex items-center justify-center rounded-full'>{history[0].value}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl text-white'>Yesterday</h4>
                        <span>{history[0].value_classification}</span>
                    </div>
                    <span className='mr-6 bg-accent text-white w-12 h-12 flex items-center justify-center rounded-full'>{history[0].value}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <h4 className='text-2xl text-white'>Last Week</h4>
                        <span>{history[5].value_classification}</span>
                    </div>
                    <span className='mr-6 bg-accent text-white w-12 h-12 flex items-center justify-center rounded-full'>{history[5].value}</span>
                </div>
            </ul>
        </div>
    )
}

export default FearAndGreedHistory