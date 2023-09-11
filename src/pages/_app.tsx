import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 30,
          padding: "20px",
          background: "pink",
          fontWeight: "bold",
        }}
      >
        <a href={"/basic-table"}>{"Basic Table"}</a>
        <a href={"/row-column-dnd"}>{"Row Column Dnd Table"}</a>
      </div>
      <Component {...pageProps} />
    </>
  );
}
