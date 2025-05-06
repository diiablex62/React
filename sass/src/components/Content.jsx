import React from "react";
import Card from "./Card";

export default function Content() {
  return (
    <div className='flex-fill flex_wrap'>
      <div className='d-flex flex-wrap justify-content-center flex_wrap'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
