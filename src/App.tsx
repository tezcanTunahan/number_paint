import { useState } from 'react'
import Box from './components/box'
import Plate from './components/plate'

export default function App() {
    const [color, setColor] = useState('')

    const grid = [
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
        [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
        ],
    ]

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <Plate color={color} setColor={setColor} />
            <div>
                {grid.map((row) => {
                    return (
                        <div className='flex'>
                            {row.map((colorNumber) => {
                                return (
                                    <Box color={color} number={colorNumber} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
