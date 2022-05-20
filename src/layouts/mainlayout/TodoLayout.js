import React from 'react';
import { Outlet } from 'react-router-dom';

export default function TodoLayout() {
  return (
    <div>
      <span>TodoLayout</span>
      <Outlet />
    </div>
  );
}
