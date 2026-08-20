import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AppShell from "./Components/AppShell";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import Sprints from "./pages/Sprints";
import Timeline from "./pages/Timeline";
import Intelligence from "./pages/Intelligence";
import Reports from "./pages/Reports";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="issues" element={<Issues />} />
          <Route path="sprints" element={<Sprints />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="intelligence" element={<Intelligence />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
