import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Footer from "./footer"

const styles = {
  main: css`
    margin: 0 auto;
    max-width: 800px;
    padding: ${rhythm(2)};
  `,
  container: css`
      padding-top: ${rhythm(1.5)};
    `,
  header: css`
      margin-bottom: ${rhythm(2)};
      display: inline-block;
      font-style: normal;
    `,
  link: css`
    float: right;
    margin-left: 10px;
  `
}

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <main css={styles.main}>
      <div css={styles.container}>
        <Link to={`/`}>
          <h3 css={styles.header}>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          css={styles.link}
        >
          About
      </Link>
        <Link
          to={`/blogs/`}
          css={styles.link}
        >
          Blogs
      </Link>
        <Link
          to={`/projects/`}
          css={styles.link}
        >
          Projects
      </Link>
        {children}
      </div>
      <Footer />
    </main>
  )
}