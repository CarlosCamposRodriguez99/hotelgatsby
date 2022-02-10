import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";


const UsingSSR = ({ serverData }) => {
  return (
    <Layout>

    </Layout>
  )
}

export default UsingSSR;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
