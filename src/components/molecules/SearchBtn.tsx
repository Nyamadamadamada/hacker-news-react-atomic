import SearchSpinner from "../atom/SearchSpinner";

interface Props {
  isLoading: boolean;
}
const SearchBtn = ({ isLoading }: Props) => {
  return (
    <button
      type="submit"
      className="flex items-center rounded border border-gray-700 bg-white py-2 px-6 text-xl text-gray-700 transition-all duration-150 hover:bg-pink-400 hover:text-white lg:text-4xl"
    >
      SEARCH
      {isLoading && <SearchSpinner />}
    </button>
  );
};

export default SearchBtn;
