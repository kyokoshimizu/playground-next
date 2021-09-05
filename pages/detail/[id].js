import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const [id, setId] = useState(null);
  useEffect(() => {
    if (router.query) {
      setId(router.query.id);
    }
  }, [router])
  return (
    <h1>Im Detail: {id}</h1>
  )
};

export default Detail;