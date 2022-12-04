import ExternalLink from "../atom/ExternalLink";
import Header2 from "../atom/Header2";
import HTMLLabel from "../atom/HTMLLabel";
import { News } from "../../type";

interface Props {
  news: News;
}

const TopNews = ({ news }: Props) => {
  return (
    <article className="container my-10 mx-auto flex flex-col items-center justify-center lg:max-w-5xl">
      <Header2
        label={news.title}
        style="my-5 text-center text-4xl font-bold text-white lg:text-6xl"
      />
      {news.url && (
        <ExternalLink
          url={news.url}
          label="Read Full Story"
          style="border-b border-gray-700 text-lg text-gray-600 hover:border-pink-400 hover:text-pink-400"
        />
      )}
      {news.story_text && (
        <HTMLLabel label={news.story_text} style="text-lg text-gray-400" />
      )}
    </article>
  );
};

export default TopNews;
