import Category from "../components/menu/category";
import { Navigation } from "../components/menu/navigation";
import PlacesGroup from "../components/places/places";
import Footer from "../components/template/footer";

const App = () => {
  return(
    <>
      <Navigation />
      <Category />
      <PlacesGroup />
      <Footer />
    </>
  )
}

export default App;