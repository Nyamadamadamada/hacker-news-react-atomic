import { format } from "date-fns";
import Emphasis from "../atom/Emphasis";
import ExternalLink from "../atom/ExternalLink";
import Header3 from "../atom/Header2";
import Label from "../atom/Label";
import { Article as ArticleType } from "../../type/index";

interface Props {
  article: ArticleType;
}

const Article = ({ article }: Props) => {
  return (
    <article className="rounded bg-gray-800 p-3 transition-all duration-150">
      <Header3
        label={article.title}
        style="mb-3 text-lg font-bold text-white"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            By <Emphasis label={article.author} style="" />
          </p>
        </div>
        {article.url && (
          <ExternalLink
            url={article.url}
            label="Read More"
            style="border-b border-gray-700 text-lg text-gray-400 hover:border-pink-400 hover:text-pink-400"
          />
        )}
      </div>
      {/* Format date using the `format` method from `date-fns` */}
      <Label
        label={format(new Date(article.created_at), "dd MMM yyyy")}
        style="mt-10 text-gray-400"
      />
    </article>
  );
};
export default Article;
