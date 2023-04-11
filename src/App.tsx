import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";
import "./index.css";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.TEST_CASE} />}
        />
        <Route path={ROUTES.TEST_CASE} element={<MainPage />}>
          <Route path={ROUTES.TEST_CASE_1} element={<TestCasePage val={1} />} />
          <Route path={ROUTES.TEST_CASE_2} element={<TestCasePage val={2} />} />
          <Route path={ROUTES.TEST_CASE_3} element={<TestCasePage val={3} />} />
          <Route path={ROUTES.TEST_CASE_4} element={<TestCasePage val={4} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const TestCasePage = lazy(() => import("./pages/TestCasePage/TestCasePage"));

export default App;
