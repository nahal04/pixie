import type { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <main className="h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <section className="flex-grow flex flex-col sm:flex-row" >
        <div className="flex flex-col justify-center flex-grow items-center">
          <h1 className="text-8xl text-gray-400 font-bold font-text tracking-wider ">Pixie</h1>
          <p className="text-xl text-green-500 font-text tracking-widest">Share your thoughts</p>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-28 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        <div className="flex flex-grow justify-center items-center">
          <Link href="/signup">
          <button className="group">
            <svg xmlns="http://www.w3.org/2000/svg" className="transition ease-out duration-300 animate-push h-16 text-gray-400 group-hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
