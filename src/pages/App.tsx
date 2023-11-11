import React, {useState} from "react";
import Layout from "../components/layout/layout";
import {ThemeEnum} from "../domain/domain";

function App() {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.dark);
  return (
    <Layout setTheme={setTheme} theme={theme}>
      Bonjour
    </Layout>
  );
}

export default App;
