import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import comics from "./comics"


const App = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />

      <div className="App">
        <Header links={comics} />

        <h2>Benvenuto nella DC Comics App!</h2>
      </div>
    </>
  )
}

export default App;