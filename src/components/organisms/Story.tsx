import { format } from "date-fns";
import Emphasis from "../atom/Emphasis";
import Header3 from "../atom/Header3";
import HTMLLabel from "../atom/HTMLLabel";
import Label from "../atom/Label";
import { Story as StoryType } from "../../type";

interface Props {
  story: StoryType;
}

const Story = ({ story }: Props) => {
  return (
    <article className="rounded bg-gray-800 p-3 transition-all duration-150">
      <Header3 label={story.title} style="mb-3 text-lg font-bold text-white" />
      {story.story_text && (
        <HTMLLabel label={story.story_text} style="text-lg text-gray-200" />
      )}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          By <Emphasis label={story.author} style="" />
        </p>
      </div>
      {/* Format date using the `format` method from `date-fns` */}
      <Label
        label={format(new Date(story.created_at), "dd MMM yyyy")}
        style="mt-10 text-gray-400"
      />
    </article>
  );
};
export default Story;
