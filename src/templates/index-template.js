import React from "react"
import Main from "../components/main"
import Seo from "../components/seo"

const IndexTemplate = props => {
  return (
    <Main>
      <Seo />
      {props.children}
    </Main>
  )
}

export default IndexTemplate
