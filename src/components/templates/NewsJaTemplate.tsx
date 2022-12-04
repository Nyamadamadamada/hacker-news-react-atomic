import { ReactNode } from "react";
import TranslateToggle from "../molecules/TranslateToggle";
import Section from "../organisms/Section";
import Label from "../atom/Label";
import TopNews from "../organisms/TopNews";
import Story from "../organisms/Story";
import Article from "../organisms/Article";
import {
  News as NewsType,
  Article as ArticleType,
  Story as StoryType,
} from "../../type";

interface Props {
  searchForm: ReactNode;
  topNews: NewsType;
  articles: ArticleType[];
  query: string;
}

const NewsJaTemplate = ({ searchForm, topNews, articles, query }: Props) => {
  return (
    <main className="w-full h-full m-auto">
      <div>
        {searchForm}
        <TranslateToggle />
        <TopNews news={topNews} />
        <div className="container mx-auto lg:max-w-5xl">
          <Label label="Category:" style="inline text-gray-600 mr-2" />
          <Label
            label={query}
            style={"inline font-bold capitalize text-gray-400"}
          />
          {articles.length > 0 && (
            <Section title="ARTICLE">
              <div className="mx-auto grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 lg:max-w-5xl">
                {articles.map((item) => {
                  return <Article key={item.objectID} article={item} />;
                })}
              </div>
            </Section>
          )}
        </div>
      </div>
    </main>
  );
};
export default NewsJaTemplate;
