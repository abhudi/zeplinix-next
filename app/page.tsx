import Banner from "./components/Banner";
import Brandssection from "./components/Brandssection";
import StandardProduct from "./components/StandardProduct";

export default function Home() {
  return (
    <div className="min-h-[50%] text-white">
      <Banner />
      <Brandssection />
      <StandardProduct />
    </div>
  );
}
