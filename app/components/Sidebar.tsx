// import { Link } from '@remix-run/react'
import { Link } from 'react-router-dom';
import React from 'react'

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-200">
        <aside className="w-64 bg-gray-800 h-full text-white">
            <div className="p-4">
            
                <Link to='/'>DEV</Link>
            
            </div>
            <nav className="mt-2">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    Dashboard
                </a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    Profile
                </a>
                <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    About
                </a>
            </nav>
        </aside>

    
        <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-gray-700 p-4">
                <h1 className="text-white text-2xl font-bold">Page Title</h1>
            </header>
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
                
            </main>
        </div>
    </div>

  )
}
