import Image from "next/image";
import Navbar from "./component/navbar";
import FrontBar from "./component/frontBar";
import Client from "./component/ourclient";
import ManageSystem from "./component/managesystem";
import LearnMore from "./component/learnMore";
import LocalBuss from "./component/localBuss";
export default function Home() {
  return (
    <>
      <Navbar />
      <FrontBar />
      <Client />
      <ManageSystem/>
      <LearnMore/>
      <LocalBuss/>
    </>
  );
}
