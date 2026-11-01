import { Link } from "react-router-dom";

export default function SectionHeader({ title, linkTo, linkText = "View all" }) {
  return (
    <div className="mb-5 flex items-end justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {linkTo && (
        <Link to={linkTo} className="text-sm font-medium text-indigo-600 hover:underline">
          {linkText} →
        </Link>
      )}
    </div>
  );
}
