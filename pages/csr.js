import Link from 'next/link';
import { useEffect } from 'react';

export default function CsrPage() {
  const contentType = 'application/json';
  useEffect(() => {
    const getDocs = async () => {
      try {
        const res = await fetch('/api/docs', {
          method: 'GET',
          headers: {
            Accept: contentType,
            'Content-Type': contentType,
          },
        }).then((res) => res.json());
        console.log(res);
      } catch (error) {
        console.log('error');
        console.log(error);
      }
    };
    getDocs();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      <p className="m-auto">CSR</p>
    </div>
  );
}
