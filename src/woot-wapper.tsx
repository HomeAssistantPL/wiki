import Layout from './components/layout'
import React from "react";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props} children={element} />
)
