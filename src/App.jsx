import React from 'react';
import { Button } from 'antd';
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Button type="primary">Primary</Button>
      <Outlet />
    </>
  )
}
