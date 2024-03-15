const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full h-12 bg-header justify-between">
        <div className="flex items-center ml-35 text-f7f7f9 font-bold text-20">観光情報一元化アプリ</div>
        <div className="flex">
          <div></div>
          <div className="flex items-center text-white text-18 pr-48">Logout</div>
        </div>
      </div>
      <div className="flex w-full h-9 bg-header2 justify-between">
      <p className="flex ml-44 text-white items-center text-14">Home&gt;観光情報一覧</p>
      <p className="flex ml-44 text-white items-center text-14 text-white pr-16">編集されると通知が上位権限者に通知が届く</p>
      </div>
    </div>
  );
};

export default Header;
