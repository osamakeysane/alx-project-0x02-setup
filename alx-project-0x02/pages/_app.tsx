import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}
