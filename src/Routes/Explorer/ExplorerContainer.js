import React from "react";
import ExplorerPresenter from "./ExplorerPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEE_FEED } from "./ExplorerQueries";

const ExplorerContainer = () => {
  const {
    data: { seeFeed },
    loading
  } = useQuery(SEE_FEED);
  return <ExplorerPresenter Feed={seeFeed} loading={loading} />;
};

export default ExplorerContainer;
