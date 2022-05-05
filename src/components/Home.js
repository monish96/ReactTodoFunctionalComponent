import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [temp] = useSearchParams();

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Here');
  };

  return (
    <div>
      <span>Home Page</span>
    </div>
  );
}
