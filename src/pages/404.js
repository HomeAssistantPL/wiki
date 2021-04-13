import * as React from "react";

import Main from "../components/main";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <Main title="404: Brak strony">
    <Seo title="404: Nie znaleziono" />
    <p>Nie ma takiej strony. Szukaj dalej.</p>
  </Main>
);

export default NotFoundPage;
