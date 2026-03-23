import { useEffect } from "react";
import "./App.scss";
import ConfigSessionProvider from "./infrastructure/ConfigSessionProvider";
import ConfigRenderer from "./infrastructure/ConfigRenderer";
import { ErrorBoundary } from "react-error-boundary";
import { initializeEvents, subscribe } from "./utils/events";
import { handleAnalytics } from "./utils/analytics";
import { setLanguage } from "./utils/format";
import { loadTranslations } from "./backend/translations";
import Translatable from "./components/Translatable";
import SampleOrderPageFlow from "./infrastructure/SampleOrderPageFlow";
import ConfigSessionProviderForSampleOrder from './infrastructure/ConfigSessionProviderForSampleOrder'

interface AppProps {
  container: HTMLElement
}

function App({
  container
}: AppProps) {

  const appInput = getInputParameters(container);
  //TODO: remove workaround for market prefix with "RW_"
  if (!appInput.market.startsWith("RW_"))
    appInput.market = "RW_" + appInput.market;

  //needs to be called before any component can publish/subscribe
  initializeEvents(container, appInput);
  setLanguage(appInput.language);
  loadTranslations(appInput.language);

  //register all event handlers
  useEffect(() => {
    let subscriptions: (() => void)[] = [];
    if (appInput.enableAnalytics)
      subscriptions.push(subscribe(handleAnalytics));

    return () => {
      for (let unsubscribe of subscriptions)
        unsubscribe();
    }
  }, []);

  return (
    <ErrorBoundary fallback={<Translatable name="error" />}>
      {appInput['sampleorder'] ?
        <ConfigSessionProviderForSampleOrder input={appInput} >
          <SampleOrderPageFlow {...appInput} />
        </ConfigSessionProviderForSampleOrder>
        :
        <div className="configurator-content">
          <ConfigSessionProvider input={appInput}>
            <ConfigRenderer />
          </ConfigSessionProvider>
        </div>}
    </ErrorBoundary>
  );
}

const getInputParameters = (elm: HTMLElement): IApplicationInput => ({
  model: elm.dataset["model"] || "",
  view: elm.dataset["view"] || "",
  market: elm.dataset["market"] || "",
  language: elm.dataset["language"] || "",
  theme: elm.dataset["theme"] || "",
  packageVersion: elm.dataset["packageVersion"] || "",
  wi: elm.dataset["wi"] || "",
  enableAnalytics: true, //TODO: load
  load: elm.dataset["load"] == "all" ? "all" : "current",
  sampleorder: elm.dataset['sampleorder'] === 'true' ? true : false
});

export default App;
