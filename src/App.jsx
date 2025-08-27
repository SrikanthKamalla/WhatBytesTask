import Header from "../src/components/Header.jsx";
import Home from "../src/pages/Home.jsx";
import Footer from "../src/components/Footer.jsx";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
