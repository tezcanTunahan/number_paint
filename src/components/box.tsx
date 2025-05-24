import { useState } from 'react'

export default function Box({ color }: { color: string }) {
    const [selectedColor, setSelectedColor] = useState('')
    return (
        <div
            className={'w-4 h-4 border ' + selectedColor}
            onClick={() => setSelectedColor(color)}></div>
    )
}
