import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "@/store/store";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
