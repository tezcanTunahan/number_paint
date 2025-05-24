export default function Plate({
    color,
    setColor,
}: {
    color: string
    setColor: (color: string) => void
}) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex space-x-2 items-center'>
                <h1>plate</h1>
                <span className={'w-4 h-4 border ' + color}></span>
            </div>

            <div className='flex flex-row'>
                {basicColors.map((color) => {
                    return (
                        <div
                            className={'w-4 h-4 border ' + color}
                            onClick={() => setColor(color)}></div>
                    )
                })}
            </div>
        </div>
    )
}
const basicColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-gray-500',
    'bg-pink-200',
    'bg-white',
]
