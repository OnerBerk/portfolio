import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";


const Breadcrumb = () => {
  const routeur = useRouter();
  //const query = routeur.query;

  const breadPath = [
    {name: "Home", path: "/"}
  ];

  return (
    <>
      {
        breadPath.map((el, index) => {
          return el.path === routeur.asPath
            ? <div key={index}>{el.name}</div>
            : <div key={index}><Link href={el.path}> Home </Link></div>;
        })
      }
    </>
  );
};

export default Breadcrumb;