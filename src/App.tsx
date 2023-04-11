import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.FLOOR} />} />
        <Route path={ROUTES.FLOOR} element={<MainPage />}>
          <Route
            path={ROUTES.FIRST_FLOOR}
            element={<FloorPage floorNumber={1} />}
          />
          <Route
            path={ROUTES.SECOND_FLOOR}
            element={<FloorPage floorNumber={2} />}
          />
          <Route
            path={ROUTES.THIRD_FLOOR}
            element={<FloorPage floorNumber={3} />}
          />
          <Route
            path={ROUTES.FOURTH_FLOOR}
            element={<FloorPage floorNumber={4} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const FloorPage = lazy(() => import("./pages/FloorPage/FloorPage"));

export default App;
