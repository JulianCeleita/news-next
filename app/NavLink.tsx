import Link from "next/link";
type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-red-500 underline-offset-4 fonr-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
export default NavLink;
