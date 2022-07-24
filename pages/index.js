import Head from "next/head";
import Image from "next/image";
import SearchBox from "../components/SearchBox";
import GoogleBox from "./index.styles";

export default function Home() {
  return (
    <GoogleBox>
      <Image
        src="/googlelogo_color_272x92dp.png"
        className="App-logo"
        alt="logo"
        width="90vw"
        height="50vh"
      />
      <SearchBox />
    </GoogleBox>
  );
}
