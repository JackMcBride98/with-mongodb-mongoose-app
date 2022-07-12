import Link from 'next/link';
import dbConnect from '../lib/dbConnect';
import Pet from '../models/Pet';

const Index = ({ pets }) => (
  <div className="flex flex-col space-y-4 w-full items-center">
    <h1 className="font-bold text-2xl">Welcome</h1>
    <p className="w-64">
      This is a project to test out server side rendering, edge functions and
      more of next js capabilities for a simple CRUD app
    </p>
    <ul>
      <li>
        <Link href="/csr">
          <a>CSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/edgefunctions">
          <a>Edge functions</a>
        </Link>
      </li>
    </ul>
  </div>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}

export default Index;
