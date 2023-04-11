import { Tab } from "../types/tabTypes";

export const ROUTES = {
  HOME: "/",
  TEST_CASE: "/test-case",
  TEST_CASE_1: "/test-case/1",
  TEST_CASE_2: "/test-case/2",
  TEST_CASE_3: "/test-case/3",
  TEST_CASE_4: "/test-case/4",
};

export const availableTabs: Tab[] = [
  {
    link: ROUTES.TEST_CASE_1,
    label: "Test Case 1",
  },
  {
    link: ROUTES.TEST_CASE_2,
    label: "Test Case 2",
  },
  {
    link: ROUTES.TEST_CASE_3,
    label: "Test Case 3",
  },
  {
    link: ROUTES.TEST_CASE_4,
    label: "Test Case 4",
  },
];
