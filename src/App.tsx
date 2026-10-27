import { Route, Routes } from "react-router";
import PortfolioLayout from "./layout/PortfolioLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />} />
    </Routes>
  );
};

export default App;
