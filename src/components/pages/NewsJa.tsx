import { useState, useEffect, FormEvent } from "react";
// import format from "date-fns/format"
// You can use the import above or the one below
import LoadSpinner from "../atom/LoadSpinner";

import { News as NewsType, Article as ArticleType } from "../../type";
import NewsJaTemplate from "../templates/NewsJaTemplate";
import SearchForm from "../organisms/SearchForm";

const defaultNews = {
  author: "",
  created_at: "",
  objectID: "",
  story_text: null,
  title: "",
  url: null,
};

const NewsJa = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const [topNews, setTopNews] = useState<NewsType>(defaultNews);
  const [isLoading, setIsLoading] = useState<boolean>(true); // loading state
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);

    const fetchNews = async () => {
      const url = `https://script.google.com/macros/s/AKfycbxCcQQA-LSW8gkC1mAQsutzC5r0VwXBypfXiTssV91t-a3q0gn_KFkrTtWXByyj6Z8kbg/exec?query=${query}`;
      const res = await fetch(url);
      const data = await res.json();

      setTopNews(data[0]);
      data.shift();

      setArticles(data);
      setIsLoadingSearch(false);
    };

    fetchNews();
    setIsLoading(false);
  }, [query]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    setQuery(text);
    setText("");
    setIsLoadingSearch(true);
  };

  return (
    <div>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <NewsJaTemplate
          searchForm={
            <SearchForm
              handleSubmit={handleSubmit}
              isLoadingSearch={isLoadingSearch}
              text={text}
              setText={setText}
            />
          }
          topNews={topNews}
          articles={articles}
          query={query}
        />
      )}
    </div>
  );
};
export default NewsJa;
