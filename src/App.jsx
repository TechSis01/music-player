import { createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider}
   from "react-router-dom";

  //  LAYOUT PAGE
import SideBarLayout from "./Layout/SideBarLayout";

// WEBSITE PAGES
import Home from "./Pages/Home";
import Trends from "./Pages/Trends";
import Feed from "./Pages/Feed";
import New from "./Pages/New";
import Calendar from "./Pages/Calendar";
import Events from "./Pages/Events";
import FaveSongs from "./Pages/FaveSongs";
import Artist from "./Pages/Artist";
import Albums from "./Pages/Albums";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideBarLayout />}>
      <Route path="" index element={<Home />}></Route>
      <Route path="trends" element={<Trends />}></Route>
      <Route path="feed" element={<Feed />}></Route>
      <Route path="new" element={<New />}></Route>
      <Route path="calendar" element={<Calendar />}></Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="favesongs" element={<FaveSongs />}></Route>
      <Route path="artists" element={<Artist />}></Route>
      <Route path="albums" element={<Albums />}></Route>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
