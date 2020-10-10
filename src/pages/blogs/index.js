import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../../utils/typography"
import Layout from "../../components/layout"

const styles = {
  header: css`
    display: inline-block;
    border-bottom: 1px solid;
  `,
  link: css`
    text-decoration: none;
    color: inherit;
  `,
  blogTitle: css`
    margin-bottom: ${rhythm(1 / 4)};
  `,
  blogDate: css`
    color: #555;
  `,
}

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1 css={styles.header}>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={styles.link}
            >
              <h3
                css={styles.blogTitle}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={styles.blogDate}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`