import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import UploadSong from "../components/UploadSong";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/upload" element={<UploadSong />} />
    </Route>
  )
);

export default router;
