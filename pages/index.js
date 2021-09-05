import Link from 'next/link'

const Index = () => {
  const id = 1;
  return (
    <div>
      <Link href="/about">
        <a>Abount Page</a>
      </Link>
      <Link href="/detail/[id]" as={`/detail/${id}`}>
        <a>Detail</a>
      </Link>
      <p> Hello Next!!</p>
    </div>
  );
};

export default Index;