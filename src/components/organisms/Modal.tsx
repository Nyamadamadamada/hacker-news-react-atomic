import ExternalLink from "../atom/ExternalLink";
import Header2 from "../atom/Header2";
import Label from "../atom/Label";

interface Props {
  handleClick: () => void;
}

const Modal = ({ handleClick }: Props) => {
  return (
    <div id="modal-overlay" onClick={handleClick}>
      <div
        id="modal-content"
        onClick={(e) => e.stopPropagation()}
        className="text-gray-900 p-10 text-xl"
      >
        <div className="">
          <Header2
            label="ディレクトリ構成：「Atomicデザイン」"
            style="text-gray-900 text-2xl mb-4"
          />
          <Label
            label="このサイトはReactのディレクトリ構成を検証するための"
            style="mb-2"
          />
          <p className="mb-2">
            レンダリング時に要素が
            <span className="border-b-4 border-yellow-500">黄色く</span>
            なります。
          </p>
          <Label
            label="技術記事のリンクはハッカーニュースのAPIを使用しています。"
            style="mb-6"
          />
          <p className="mb-1">詳しくは下記サイトをご覧ください。</p>
          <ExternalLink
            url="#"
            label="改めてReactのディレクトリ構成を検証する【atomicデザイン編】"
            style="text-pink-400 hover:border-b hover:border-pink-400"
          />
        </div>
        <button
          onClick={handleClick}
          className="border border-gray-700 text-gray-900 bg-white mt-5 px-4 py-2 text-md font-bold"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
