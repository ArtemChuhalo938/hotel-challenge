import { render, screen } from "../../testUtils";
import TabBar from "./TabBar";
import { TabBarProps } from "../../types/tabTypes";
import { availableTabs } from "../../constants";

const tabBarMockedProps: TabBarProps = {
  currentLocation: availableTabs[0].link,
  tabs: availableTabs,
  onTabClicked: jest.fn(),
};

describe("<TabBar />", () => {
  it("should render properly", () => {
    render(<TabBar {...tabBarMockedProps} />);

    expect(screen.getByText("First Floor")).toBeVisible();
  });

  it("should navigate to other tab", async () => {
    const { user } = render(<TabBar {...tabBarMockedProps} />);
    const secondFloorTab = screen.getByText("Second Floor");
    await user.click(secondFloorTab);
    expect(tabBarMockedProps.onTabClicked).toBeCalledWith(
      tabBarMockedProps.tabs[1].link
    );
  });
});
