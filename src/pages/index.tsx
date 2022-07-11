import * as React from "react";
import {Helmet} from "react-helmet";
import '../styles/main.sass';
import Layout from "../components/layout";
import ExpressMacConsultation from "../components/express-mac-consultation/express-mac-consultation";

const IndexPage = () => {
  return (
      <Layout>
        <Helmet>
            <title>Экспресс-консультация на МАКартах</title>
            <meta name="description" content="экспресс-консультация с использованием метафорических ассоциативных карт" />
        </Helmet>
        <ExpressMacConsultation />
      </Layout>
  )
}

export default IndexPage
