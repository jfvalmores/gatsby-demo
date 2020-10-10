import React from 'react';
import { css } from "@emotion/core"

const styles = {
  footer: css`
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    position: absolute;
  `
};

export default function Footer(props) {
  return (
    <footer css={styles.footer}>
      <span>Made using Gatsby @ 2020</span>
    </footer>
  );
}