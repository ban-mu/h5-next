import Link from 'next/link';
export default function header() {
  return (
    <div>
      <div className="absolute w-full z-10 flex justify-between text-white">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/performance">Performance</Link>
            <Link href="/reliability">Reliability</Link>
            <Link href="/scale">Scale</Link>
          </div>
        </div>
    </div>
  )
}
