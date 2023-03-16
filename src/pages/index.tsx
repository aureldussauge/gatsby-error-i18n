import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Trans>Hello</Trans>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby Error i18n</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
