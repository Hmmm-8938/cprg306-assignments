import Link from "next/link";

export default function StudentInfo()
{
    return(
        <div>
            <p className="text-3xl">Benjamin Mellott</p>
            <Link href="https://github.com/Hmmm-8938/cprg306-assignments" className="underline text-cyan-600 hover:text-cyan-950">CPRG-306 Assignments GitHub Repository</Link>
        </div>
    )
}