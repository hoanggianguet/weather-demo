const Item = ({}) => {
  return (
    <div className="flex flex-row w-840 h-105 text-16 mt-28 border-b-4">
      <div className="flex w-100 h-44 justify-center items-center bg-3a71ca text-white font-bold text-16">
        申請中
      </div>
      <div className="flex w-175 h-44 flex-col bg-white ml-37 text-16">
        <div className="text-004ad2">ニライビーチ</div>
        <div className="text-666666">中頭郡読谷村儀間560…</div>
      </div>
      <div className="flex w-160 h-44 flex-col bg-white ml-51">
        <div className="text-4f4f4f">観光花子</div>
        <div className="text-666666">City_Admin</div>
        <div className="text-666666">宜野湾市</div>
      </div>
      <div className="flex w-136 items-center flex-col bg-white ml-40">
        <div className="w-136 h-76 bg-blue-500"></div>
      </div>
      <div className="flex w-112 h-44 flex-col bg-white ml-24 text-16 text-666666">
        <div>2024年1月10日</div>
        <div>16:45</div>
      </div>
    </div>
  );
};

export default Item;
