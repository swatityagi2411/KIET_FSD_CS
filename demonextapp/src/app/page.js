import Link from "next/link"

export default function Home()
{
  return(
    <div>
      <h1> Welcome to demo of next js</h1>
      <Link href='/about'>About Us</Link>
    </div>
  )

}