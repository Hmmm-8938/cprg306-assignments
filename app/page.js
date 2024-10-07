import Link from "next/link";

export default function Home() {

  const stars = "*".repeat(109);
  return (
    <main>
      <h1 className="text-6xl">CPRG 306: Web Development 2 - Assignments</h1>
      <h2 className="text-3xl">{stars}</h2>
      
      <ul>
        <li className="text-2xl text-cyan-600 hover:text-cyan-950"><Link href="./week-2">Week #2 Assignment</Link></li>
        <li className="text-2xl text-cyan-600 hover:text-cyan-950"><Link href="./week-3">Week #3 Assignment</Link></li>
        <li className="text-2xl text-cyan-600 hover:text-cyan-950"><Link href="./week-4">Week #4 Assignment</Link></li>
      </ul>
    </main>
  );
}
