import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetups";
import NewMeetUps from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />

        <Route path="/new-meetups" element={<NewMeetUps />} />

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
