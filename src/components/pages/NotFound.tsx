import { Link } from "react-router-dom";
import Header1 from "../atom/Header1";

function NotFound() {
  return (
    <div className="w-screen h-screen">
      <Header1
        label="ページがみつかりません"
        style="flex my-10 text-5xl text-center"
      />
      <Link
        to={"/"}
        className="block w-44 m-auto  text-center border-b border-gray-50 py-2 px-6 text-xl text-white transition-all duration-150 hover:bg-white hover:text-gray-500"
      >
        Topへ戻る
      </Link>
    </div>
  );
}

export default NotFound;
