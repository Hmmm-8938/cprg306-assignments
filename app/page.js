import Link from "next/link";

export default function Home() {

  const stars = "*".repeat(109);
  return (
    <main>
      <h1 className="text-6xl">CPRG 306: Web Development 2 - Assignments</h1>
      <h2 className="text-3xl">{stars}</h2>
      <div className="flex flex-row">
        <ul>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-2">Week #2 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-3">Week #3 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-4">Week #4 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-5">Week #5 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-6">Week #6 Assignment</Link></li>
        </ul>
        <ul className="flex flex-col justify-center">
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-7">Week #7 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-8">Week #8 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-9">Week #9 Assignment</Link></li>
          <li className="text-2xl text-white hover:bg-blue-950 w-40 h-20 ml-10 mb-10 bg-blue-900 text-center flex items-center justify-center font-black"><Link href="./week-10">Week #10 Assignment</Link></li>
        </ul>
      </div>
    </main>
  );
}
