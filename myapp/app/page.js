import Link from "next/link";
import Image from "next/image"

export default function Home()
{
  return(
    <div>
      <Image src="I:\Training Codes\KIET\myapp\public\next.svg"></Image>
  <h1> Next Js webpage</h1>
  <Link href='/about'>About US</Link>
</div>
  );
}

