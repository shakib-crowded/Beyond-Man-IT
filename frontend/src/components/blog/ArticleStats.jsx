import { BookOpen, MessageCircle } from "lucide-react";

const ArticleStats = ({ views, comments }) => (
  <div className="flex gap-6">
    <div className="flex items-center gap-2 text-slate-400 text-sm">
      <BookOpen className="w-4 h-4" />
      <span>{views} views</span>
    </div>
    <div className="flex items-center gap-2 text-slate-400 text-sm">
      <MessageCircle className="w-4 h-4" />
      <span>{comments} comments</span>
    </div>
  </div>
);

export default ArticleStats;
