import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 border-b-2'>
      <h3 className="font-bold text-2xl text-black">Knoledge Cafe</h3>
      <img className='w-10' src={profile} alt="" />
    </header>
  );
};

export default Header;
