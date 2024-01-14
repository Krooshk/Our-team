import Registration from "./components/registration-field/registration";
import Page from "./components/main-page/page";

function App() {
  const isAuth = false;

  if (isAuth) {
    return <Registration />;
  }

  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
