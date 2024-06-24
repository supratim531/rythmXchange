import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import SongList from "../components/SongList";
import UploadSong from "../components/UploadSong";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/songs" element={<SongList />} />
      <Route path="/upload" element={<UploadSong />} />
    </Route>
  )
);

export default router;
