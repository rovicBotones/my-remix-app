function Header() {
  return (
    <>
     <nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    {/* <div className="text-white font-bold text-xl">Your Logo</div> */}

    <div className="space-x-4">
      <a href="#" className="text-white">Home</a>
      <a href="#" className="text-white">About</a>
      <a href="#" className="text-white">Services</a>
      <a href="#" className="text-white">Contact</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header