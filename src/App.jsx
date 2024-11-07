import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MapComponent from "./components/MapComponent";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import UpdatePage from "./pages/UpdatePage";
import SignUpPage from "./pages/SignUpPage";
import "./firebase-config";

function App() {
  return (
    <>
      <Nav />
      <main>
        <div className="map-container">
          <MapComponent />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/posts/:id/update" element={<UpdatePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
