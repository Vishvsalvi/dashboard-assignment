import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { House, Images, Handbag, Rows2, UserRound, CreditCard, Calendar, ChevronDown, Bell } from "lucide-react"
import avatar from "../../assets/avatar.png"

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const getPageTitle = () => {
    const path = location.pathname
    if (path === '/') return 'Home'
    if (path === '/posts') return 'Posts'
    if (path === '/assets') return 'Assets'
    if (path === '/uploads') return 'Uploads'
    if (path === '/payments') return 'Payments'
    if (path === '/profile') return 'Profile'
    return 'Home'
  }

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl text-gray-800">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-600">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600">
              <Calendar className="w-6 h-6" />
            </button>
            <div className="w-8 h-8 rounded-full cursor-pointer">
              <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Top Navbar */}
      <nav className="hidden md:block w-full bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
          {/* Left Section - Logo */}
          <div className="flex items-center shrink-0">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="h-6 sm:h-7 md:h-8 lg:h-auto" />
            </div>
          </div>

          {/* Center Section - Navigation Items */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-11 ml-2 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-28 flex-1 justify-center overflow-x-auto">
            <Link to="/" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <House className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-xs sm:text-sm">Home</span>
            </Link>
            <Link to="/posts" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/posts') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <Images className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-xs sm:text-sm">Posts</span>
            </Link>
            <Link to="/assets" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/assets') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <Handbag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-xs sm:text-sm">Assets</span>
            </Link>
            <Link to="/uploads" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/uploads') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <Rows2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
              <span className="text-xs sm:text-sm">Uploads</span>
            </Link>
            <Link to="/payments" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/payments') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-xs sm:text-sm">Payments</span>
            </Link>
            <Link to="/profile" className={`flex flex-col items-center gap-0.5 sm:gap-1 cursor-pointer shrink-0 ${isActive('/profile') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}>
              <UserRound className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-xs sm:text-sm">Profile</span>
            </Link>
          </div>

          {/* Right Section - Time Filter, Notifications, Profile */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 shrink-0">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-50">
              <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded"><Calendar className="w-4 h-4" /></span>
              <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline">All time</span>
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded"><ChevronDown className="w-4 h-4" /></span>
            </div>
            <div className=""><Bell className="w-6 h-6 text-gray-600" /></div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full cursor-pointer hover:ring-1">
              <img src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden py-4 fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-300 z-50">
        <div className="flex items-center justify-around px-2 py-3">
          <Link to="/" className={`flex items-center justify-center ${isActive('/') ? 'text-purple-600' : 'text-gray-600'}`}>
            <House className="w-6 h-6" strokeWidth={isActive('/') ? 2.5 : 1.5} />
          </Link>
          <Link to="/posts" className={`flex items-center justify-center ${isActive('/posts') ? 'text-purple-600' : 'text-gray-600'}`}>
            <Images className="w-6 h-6" strokeWidth={isActive('/posts') ? 2.5 : 1.5} />
          </Link>
          <Link to="/assets" className={`flex items-center justify-center ${isActive('/assets') ? 'text-purple-600' : 'text-gray-600'}`}>
            <Handbag className="w-6 h-6" strokeWidth={isActive('/assets') ? 2.5 : 1.5} />
          </Link>
          <Link to="/uploads" className={`flex items-center justify-center ${isActive('/uploads') ? 'text-purple-600' : 'text-gray-600'}`}>
            <Rows2 className="w-6 h-6" strokeWidth={isActive('/uploads') ? 2.5 : 1.5} />
          </Link>
          <Link to="/payments" className={`flex items-center justify-center ${isActive('/payments') ? 'text-purple-600' : 'text-gray-600'}`}>
            <CreditCard className="w-6 h-6" strokeWidth={isActive('/payments') ? 2.5 : 1.5} />
          </Link>
          <Link to="/profile" className={`flex items-center justify-center ${isActive('/profile') ? 'text-purple-600' : 'text-gray-600'}`}>
            <UserRound className="w-6 h-6" strokeWidth={isActive('/profile') ? 2.5 : 1.5} />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar