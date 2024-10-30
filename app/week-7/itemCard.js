export default function ItemCard({itemObj})
{
    const {name, quantity, category} = itemObj

    return (
        <div className='flex-col ml-5 bg-cyan-950 w-60 text-center mb-5 hover:bg-blue-950'>
            <p className='font-black text-xl mb-2'>{name}</p>
            <p>Buy {quantity} from {category}</p>
        </div>
    );
};
