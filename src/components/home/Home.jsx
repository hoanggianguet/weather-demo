import Item from "../items/Item";

const Home = ({}) => {
  return (
    <div className="flex flex-col w-901 bg-white mx-34">
      <div className="flex w-full h-93 text-26 font-bold items-center">
        観光スポット 下書き一覧
      </div>
      <div className="flex w-full h-34 bg-header2 text-white items-center text-13 pl-12">
        下書き記事
      </div>
      <div className="w-full h-84 bg-F6F6F6">下書き記事</div>
      <div className="flex flex-row w-840 h-105 text-16 font-bold border-b-4">
        <div className="flex w-100 h-44">状況</div>
        <div className="flex w-175 h-44 flex-col bg-white ml-37 text-16">
        名称・住所
        </div>
        <div className="flex w-160 h-44 flex-col bg-white ml-51">
        編集者名・権限・組織
        </div>
        <div className="flex w-136 h-44 flex-col bg-white ml-40">
        サムネイル
        </div>
        <div className="flex w-112 h-44 flex-col bg-white ml-24 text-16">
        編集年月日
        </div>
      </div>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
};

export default Home;
