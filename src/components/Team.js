import React from 'react';
import { useParams } from 'react-router-dom';

export default function Team() {
  const { teamId } = useParams();

  return (
    <div>
      <span>{teamId}</span>
    </div>
  );
}
