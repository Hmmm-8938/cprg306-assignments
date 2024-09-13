import Link from "next/link";

export default function MenuBar()
{
    return(
        <div className="bg-gray-600">
            
            <Link href="../" className="underline text-cyan-600 hover:text-cyan-950">Home</Link>
        </div>
    )
}