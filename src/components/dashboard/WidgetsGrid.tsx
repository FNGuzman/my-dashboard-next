'use client';
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
    const isCart = useAppSelector(state => state.counter.count)
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={`${isCart}`}
                label='Contador'
                href='/dashboard/counter'
                subtitle='Cantidad de productos en el carrito'
                icon={<IoCartOutline size={70} className='text-blue-600' />}
            />
        </div>
    )
}
