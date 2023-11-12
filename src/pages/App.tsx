import React, {useState} from "react";
import Layout from "../components/layout/layout";
import {ThemeEnum} from "../domain/domain";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";

function App() {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.dark);

  return (
    <Layout setTheme={setTheme} theme={theme}>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
