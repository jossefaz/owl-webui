import { useEffect, useState } from 'react'
import { fetchConfig } from "../../configuration";
import Page404 from "../../components/ErrorPages/404/404"
import OwlWebUi from "../OwlWebUi/OwlWebUi"
const App = () => {
  const [config, setConfig] = useState(null)

  const renderApp = () => {
    return config === null ? null : config ? <OwlWebUi /> : <Page404 />
  }

  useEffect(() => {
    fetchConfig().then((config) => {
      setConfig(config)
    });
  }, [])

  return <div>{renderApp()}</div>;
};

export default App;
