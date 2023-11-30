import ReactLOGO from '../imgs/ReactLOGO.png';

function Header() {
  return (
    <header className='headerCS'>
      <img src={ReactLOGO} alt='React LOGO' />
      <h1>Welcome to The React Quiz</h1>
    </header>
  );
}

export default Header;
