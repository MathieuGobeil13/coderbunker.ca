import * as React from "react";
import { graphql } from 'gatsby';
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SiteBorderStyles from "../styles/SiteBorderStyles";

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404" />
      <SiteBorderStyles>
        <section>
          <div className="text-left md:text-center py-4 md:pt-16 md:pb-8 lg:pt-24 md:pb-8">
            <h2 className="text-3xl lg:text-4xl">
              <span className="highlight-red">
                404
              </span>
              <Trans> Page Not Found</Trans>
            </h2>
            <p className="text-xl lg:text-2xl my-4" style={{color: `var(--darkgrey)`}}>
              <Trans>You just hit a route that doesn&#39;t exist... the sadness.</Trans>
            </p>
          </div>
        </section>
      </SiteBorderStyles>
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
