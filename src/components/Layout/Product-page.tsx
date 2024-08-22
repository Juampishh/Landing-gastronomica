import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Layout from "./Layout";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-12">
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
