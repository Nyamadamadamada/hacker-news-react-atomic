export interface News {
  author: string;
  created_at: string;
  objectID: string;
  story_text: string | null;
  title: string;
  url: string | null;
}

export interface Article extends News {
  url: string;
}

export interface Story extends News {
  story_text: string;
}
