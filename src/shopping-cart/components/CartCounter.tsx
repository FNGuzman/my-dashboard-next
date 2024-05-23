'use client'
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, initCounterState, substractOne } from "@/store/counter/conunterSlice"
import { useEffect } from "react"
interface Props {
    value?: number
}
interface CounterResponse {
    count: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    const getApiCounter = async (): Promise<CounterResponse> => {
        const data = await fetch('/api/counter').then(res => res.json());
        return data;
    }

    // useEffect(() => {
    //     dispatch(initCounterState(value))
    // }, [dispatch, value])
    useEffect(() => {
        getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch])


    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex">
                <button className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => dispatch(addOne())}
                >
                    +1
                </button>
                <button className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => dispatch(substractOne())}
                >
                    -1
                </button>
            </div>
        </>
    )
}
