// If you don't want to use TypeScript you can delete this file!
import * as React from "react";

import Layout from "../components/layout";


type DataProps = {
  site: {
    buildTime: string
  }
}


  <Layout>
  </Layout>
)

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
