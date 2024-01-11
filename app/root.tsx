// import { cssBundleHref } from "@remix-run/css-bundle";
// import type { LinksFunction } from "@remix-run/node";
// import {
//   Link,
//   Links,
//   LiveReload,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";
// import styles from './styles/tailwind.css'

// export const links: LinksFunction = () => {
//   // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
//   return (
//     [{ rel: "stylesheet", href: styles }]
//   )
//   };
import React from 'react';
import type { LinksFunction } from "@remix-run/node"; 
import { Outlet, LiveReload, Link, Links } from "@remix-run/react";
import styles from './styles/tailwind.css'
import Header from './components/Header';

// export const links: LinksFunction = () =>{
//   return [{rel: "stylesheet", href: styles}]
// }

export const links: LinksFunction = () => {
    // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    return (
      [{ rel: "stylesheet", href: styles }]
    )
    };

export default function App(){
  return(
   <>
   {/* <Header /> */}
   <Links/>
   <Header/>
   <Document>
    <Layout>
      <Outlet />
    </Layout>
   </Document>
   
   </>
  )
}
export function Document({children, title} : {children: React.ReactNode; title?: string}){
  // console.log("children", children)
  return(
    <html lang='en'>
    <head>
      <title>{title ? title : 'Remix App'}</title>
    </head>
    <body>
      {children}
      {/* {console.log({children})} */}
      
      <div className="min-h-screen bg-gray-100">
    
      </div>
      {process.env.NODE_ENV === 'development' ? 
      <LiveReload /> : null}
    </body>
  </html>
  
  );
  
}

export function Layout({children} : {children: React.ReactNode}) {
return(
  <>
  <nav className="navbar">
    <Link to='/' className='text-6xl text-red-500 logo'>Remix</Link>
    <ul className="nav">
      <li>
        <Link to='/about'>About</Link>
      </li>

    </ul>
  </nav>
  <div className="container">{children}</div>
  </>
)
}




