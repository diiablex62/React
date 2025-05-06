const Header = ({ userToHeader, toggleUserMethod }) => {
  return (
    <header className='bg-white shadow-md p-4 flex flex-row justify-between items-center'>
      <span className='text-xl font-bold text-red-500'>Sport</span>

      {userToHeader === true ? (
        <nav className='flex space-x-6'>
          <a
            href='#'
            className='text-gray-600 hover:text-black'
            onClick={toggleUserMethod}>
            Déconnexion
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Profil 1
          </a>
        </nav>
      ) : (
        <nav className='flex space-x-6'>
          <a
            href='#'
            className='text-gray-600 hover:text-black'
            onClick={toggleUserMethod}>
            Inscription
          </a>
          <a href='#' className='text-gray-600 hover:text-black'>
            Connexion
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
