import { useState } from 'react'
import Box from './components/box'
import Plate from './components/plate'

export default function App() {
    const [color, setColor] = useState('')

    const rows = 20
    const cols = 30
    const grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols })
    )

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <Plate color={color} setColor={setColor} />
            <div>
                {grid.map((row) => {
                    return (
                        <div className='flex'>
                            {row.map(() => {
                                return <Box color={color} />
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
