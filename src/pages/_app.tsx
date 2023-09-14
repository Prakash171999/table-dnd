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
        <a href={"/basic-table"}>
          <u>{"Basic Table"}</u>
        </a>
        <a href={"/row-column-dnd"}>
          <u>{"Row Column Dnd Table"}</u>
        </a>
        <a href={"/expand-hide-table"}>
          <u>{"Show/Hide Table Row"}</u>
        </a>
      </div>
      <Component {...pageProps} />
    </>
  );
}
