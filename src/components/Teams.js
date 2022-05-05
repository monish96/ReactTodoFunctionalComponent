import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Teams() {
  return (
    <div>
      <span>Teams</span>
      <Outlet />
    </div>
  );
}
