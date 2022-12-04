import { useState, useEffect, FormEvent } from "react";
// import format from "date-fns/format"
// You can use the import above or the one below
import LoadSpinner from "../atom/LoadSpinner";
import SearchForm from "../organisms/SearchForm";
import NewsTemplate from "../templates/NewsTemplate";
import {
  News as NewsType,
  Article as ArticleType,
  Story as StoryType,
} from "../../type";

const defaultNews = {
  author: "",
  created_at: "",
  objectID: "",
  story_text: null,
  title: "",
  url: null,
};

const News = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [stories, setStories] = useState<StoryType[]>([]);
  const [query, setQuery] = useState("programming");
  const [text, setText] = useState("");
  const [topNews, setTopNews] = useState<NewsType>(defaultNews);
  const [isLoading, setIsLoading] = useState<boolean>(true); // loading state
  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchNews = async () => {
      const url = `https://hn.algolia.com/api/v1/search?query=${query}`;
      const res = await fetch(url);
      const data = await res.json();

      setTopNews(data.hits[0]);
      data.hits.shift();

      setArticles(data.hits.filter((item: NewsType) => item.url));
      setStories(data.hits.filter((item: NewsType) => item.story_text));
      setIsLoading(false);
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
    setIsLoadingSearch(true);
    setQuery(text);
    setText("");
  };

  return (
    <div>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <NewsTemplate
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
          stories={stories}
          query={query}
        />
      )}
    </div>
  );
};
export default News;
