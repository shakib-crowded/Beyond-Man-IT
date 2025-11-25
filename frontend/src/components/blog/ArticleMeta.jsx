import { Calendar, Clock, User } from "lucide-react";

const ArticleMeta = ({ author, date, readTime, className = "" }) => (
  <div className={`flex flex-wrap gap-3 sm:gap-4 text-slate-400 ${className}`}>
    <div className="flex items-center gap-2">
      <User className="w-4 h-4" />
      <span>{author}</span>
    </div>
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4" />
      <span>{date}</span>
    </div>
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4" />
      <span>{readTime}</span>
    </div>
  </div>
);

export default ArticleMeta;
