'use client'
import { useState } from "react"
interface Props {
    value?: number
}
export const CartCounter = ({ value = 0 }: Props) => {
    const [counter, setcounter] = useState(value)
    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => setcounter(counter + 1)}
                >
                    +1
                </button>
                <button className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => setcounter(counter - 1)}
                >
                    -1
                </button>
            </div>
        </>
    )
}
