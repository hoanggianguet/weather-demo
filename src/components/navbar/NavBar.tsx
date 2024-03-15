const NavBar = () => {
  return (
    <div className="flex flex-col w-navbar h-navbar">
      <div className="flex w-full h-60 bg-white1 justify-center content-start">
        <div className="flex flex-col text-3a71ca text-14 font-bold">
          <p>ユーザー名</p>
          <p>権限:Admin</p>
        </div>
      </div>
      <div className="flex w-full h-11 bg-header2 text-white pl-20 items-center">権限</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold items-center">ユーザー一覧</div>
      <div className="flex w-full h-11 bg-header2 text-14 text-white items-center pl-20 items-center">観光地情報</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">観光地一覧</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">観光地 下書き一覧</div>
      <div className="flex w-full h-11 bg-header2 text-14 text-white items-center pl-20 items-center">Data管理</div>
      <div className="flex w-full h-11 bg-white1 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">JSONデータ取込み</div>
      <div className="flex w-full h-11 bg-white1 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">JSONデータ取込み履歴</div>
      <div className="flex w-full h-11 bg-white1 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">JSONデータ取込み履歴</div>
      <div className="flex w-full h-11 bg-white1 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">JSONデータ取込み履歴</div>
      <div className="flexw-full h-11 bg-white1 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">類似名称スポット</div>
      <div className="flex w-full h-11 bg-header2 text-14 text-white items-center pl-20 items-center">Master データ編集</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">アクセシビリティ</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">アクティビティ</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">設備</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">注意喚起タグ</div>
      <div className="flex w-full h-11 bg-white1 text-3a71ca text-14 items-center pl-35 font-bold">連絡先</div>
    </div>
  );
};

export default NavBar;
