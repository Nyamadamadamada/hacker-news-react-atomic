import { ChangeEvent } from "react";

interface Props {
  text: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ text, handleChange }: Props) => {
  return (
    <input
      type="text"
      name="text"
      id="text"
      placeholder="Search for something..."
      required
      value={text}
      onChange={handleChange}
      className="mr-5 w-full rounded border border-gray-700 bg-transparent py-2 px-4 text-xl text-gray-200 placeholder-gray-400 outline-none transition-all duration-150 focus:border-gray-600 lg:text-4xl"
    />
  );
};
export default SearchInput;
