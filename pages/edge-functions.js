import Link from 'next/link';

export default function EdgeFunctionsPage() {
  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      <p className="m-auto">Edge functions</p>
    </div>
  );
}
