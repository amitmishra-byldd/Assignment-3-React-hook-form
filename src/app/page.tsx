import Link from "next/link";

const linkStyle =
  "border border-neutral-500 px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full flex-1 gap-6">
      <h1 className="text-3xl font-semibold">Form Examples</h1>

      <Link href="/react-hook-form" className={linkStyle}>
        React Hook Form
      </Link>
      <Link href="/controlled-form" className={linkStyle}>
        Controlled Form
      </Link>
    </div>
  );
}
