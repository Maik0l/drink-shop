import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
