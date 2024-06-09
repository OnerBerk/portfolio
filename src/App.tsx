import React, {useCallback} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./pages/router/router";
import {Worker} from "@react-pdf-viewer/core";
import {IntlProvider} from "react-intl";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store/store";

import {Lang} from "./domain/domain";
import enMessages from "./lang/en.json";
import frMessages from "./lang/fr.json";

function App() {
  const locale = "fr";
  const lang = useSelector((state: RootState) => state.lang?.lang);

  const messages = useCallback(() => {
    return lang === Lang.en ? enMessages : frMessages;
  }, [lang]);
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <IntlProvider locale={locale} messages={messages()}>
        <RouterProvider router={router} />
      </IntlProvider>
    </Worker>
  );
}
export default App;
