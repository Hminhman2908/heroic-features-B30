import "./App.css";
import NavbarComponent from "./BaiTapThucHanhLayout/NavbarComponent";
import BannerComponent from "./BaiTapThucHanhLayout/BannerComponent";
import ItemComponent from "./BaiTapThucHanhLayout/ItemComponent";
import FooterComponent from "./BaiTapThucHanhLayout/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <header className="py-5">
        <BannerComponent />
      </header>
      <section>
        <ItemComponent />
      </section>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
