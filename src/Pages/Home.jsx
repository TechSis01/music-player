import SearchBar from "../assets/Components/SearchBar"
import Shortcut from "../assets/Components/Shortcut"
function Home() {
  return (
    <section className="homepage">
            <div className="trending-section">
                <SearchBar />
            </div>
            <div>
                <Shortcut />
            </div>
    </section>
  )
}

export default Home