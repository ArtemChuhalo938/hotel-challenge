import { FC } from "react";
import { useSelector } from "react-redux";
import { selectClients } from "../../store/domain";

const TestCasePage: FC<{ val: number }> = ({ val }) => {
  const clients = useSelector(selectClients);
  console.log("clients", clients);
  return (
    <>
      <h1>{val}</h1>
    </>
  );
};

export default TestCasePage;
