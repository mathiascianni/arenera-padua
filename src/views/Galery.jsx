import React from 'react';
import { Header, MasonryComponent } from "../components/galery/index";

export default function Galery() {
  return (
    <>
      <Header />
      <div className="px-4 xl:px-4/12">
        <MasonryComponent />
      </div>
    </>
  )
}
