import * as React from "react"

import Main from "../components/main"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Main>
    <Seo title="404: Nie znaleziono" />
    <h1>404: Brak strony</h1>
    <p>Nie ma takiej strony. Szukaj dalej.</p>
  </Main>
)

export default NotFoundPage
