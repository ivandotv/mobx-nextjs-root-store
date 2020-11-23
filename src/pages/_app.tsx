import "../../styles/globals.css";
import "../../styles/page.css";
import { RootStoreProvider } from "../providers/RootStoreProvider";
import { NextPage } from "next";

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <Component {...pageProps} />;
    </RootStoreProvider>
  );
}

export default MyApp;
