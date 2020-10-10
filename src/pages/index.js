import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

const styles = {
  header: css`
    display: inline-block;
  `
};

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1 css={styles.header}>
          Hi! I'm Justine Valmores.
        </h1>
        <h4>
          I'm Software Engineer from Cebu City, Philippines.
        </h4>
      </div>
    </Layout>
  )
}