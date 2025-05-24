import { useState } from 'react'

export default function Box({
    color,
    number,
}: {
    color: string
    number: number
}) {
    const [selectedColor, setSelectedColor] = useState('')
    return (
        <div
            className={
                'w-6 h-6 border flex items-center justify-center cursor-pointer ' +
                selectedColor
            }
            onClick={() => setSelectedColor(color)}>
            {number}
        </div>
    )
}
