import avatar from '../../assets/images/avatar.jpg';
const Header = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-end gap-1 bg-white px-6">
      <div className="avatar h-14 w-14 overflow-hidden rounded-full">
        <img className="w-full" src={avatar} />
      </div>
    </div>
  );
};

export default Header;
