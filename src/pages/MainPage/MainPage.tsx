import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { useGetClientsQuery } from "../../store/domain";
import { TabBar } from "../../components";
import { availableTabs } from "../../constants";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useGetClientsQuery();

  const onTabClicked = (tabLink: string) => {
    navigate(tabLink);
  };

  return (
    <>
      <TabBar
        tabs={availableTabs}
        currentLocation={location.pathname}
        onTabClicked={onTabClicked}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
