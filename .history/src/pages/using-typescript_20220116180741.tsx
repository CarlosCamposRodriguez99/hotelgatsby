// If you don't want to use TypeScript you can delete this file!
import * as React from "react";

import Layout from "../components/layout";


const UsingTypescript: React.FC<= () => (
  <Layout>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>tsconfig</em> file.
    </p>
  </Layout>
)

export default UsingTypescript;
