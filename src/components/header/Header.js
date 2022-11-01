import {Link, useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center">
            <Link to='/'>
                <img 
                className="w-28 h-9 cursor-pointer"
                src={"https://links.papareact.com/qd3"} 
                alt=''
                />
            </Link>
            <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/login'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
        </div>
    </header>
  );
}

export default Header;
