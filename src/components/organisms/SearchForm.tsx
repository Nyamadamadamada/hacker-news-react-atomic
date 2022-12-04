import { FormEvent, SetStateAction, Dispatch, ChangeEvent } from "react";
import SearchInput from "../atom/SearchInput";
import SearchBtn from "../molecules/SearchBtn";

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoadingSearch: boolean;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}
const SearchForm = ({
  handleSubmit,
  isLoadingSearch,
  text,
  setText,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="container mx-auto mt-16 flex place-items-center px-5 lg:max-w-4xl"
    >
      <SearchInput text={text} handleChange={handleChange} />
      <SearchBtn isLoading={isLoadingSearch} />
    </form>
  );
};

export default SearchForm;
