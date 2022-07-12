import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CsrPage() {
  const [docs, setDocs] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
        if (res.success) {
          setDocs(res.data);
        }
        console.log(res);
      } catch (error) {
        console.log('error');
        console.log(error);
      }
    };
    getDocs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/docs', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({ name, description }),
      }).then((res) => res.json());
      console.log(res);
      if (res.success) {
        setDocs((docs) => [...docs, res.data]);
      }
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/docs/${id}`, {
        method: 'Delete',
      }).then((res) => res.json());
      if (res.success) {
        console.log('success');
        setDocs((docs) => docs.filter((doc) => doc._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(docs);

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1 className="m-auto font-bold text-2xl">CSR</h1>
      <p>Docs</p>
      {docs?.length > 0 ? <p>There are docs</p> : <p>No docs</p>}
      <ul>
        {docs?.length > 0 &&
          docs.map((doc) => (
            <li key={doc._id} className="flex space-x-2">
              <p>
                {doc.name} : {doc.description}
              </p>
              <button onClick={() => handleDelete(doc._id)}>x</button>
            </li>
          ))}
      </ul>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center"
      >
        <label className="flex justify-between w-full">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-teal-400 p-1 m-1 rounded-md"
          />
        </label>
        <label className="flex justify-between">
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-teal-400 p-1 m-1 rounded-md"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-teal-400 hover:bg-teal-500 border-2 border-black rounded-md w-fit p-2"
        />
      </form>
    </div>
  );
}
