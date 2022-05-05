import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewFireBaseEventPage from "./pages/NewFireBaseEventPage";

import MainPage from "./pages/MainPage";
import NewEventPage from "./pages/NewEventPage";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/new-event" element={<NewEventPage />} />
      <Route path="/new-firestore-event" element={<NewFireBaseEventPage />} />
    </Routes>
    </Layout>
  );
}

export default App;
