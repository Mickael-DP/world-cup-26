import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Calendar from "./pages/Calendar.tsx";

import Layout from "./layout/Layout.tsx";
import Groups from "./pages/Groups.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
