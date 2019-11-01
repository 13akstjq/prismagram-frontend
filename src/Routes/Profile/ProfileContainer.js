import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useQuery, useMutation } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import { SEE_USER, LOCAL_LOG_Out } from "./ProfileQueries";

export default withRouter(({ match: { params: { username } } }) => {
  const { data, loading } = useQuery(SEE_USER, {
    variables: {
      username
    }
  });
  let isMobile = window.screen.width < 425 ? true : false;
  const changeAvatar = () => {
    isMobile = window.screen.width < 425 ? true : false;
  };

  window.addEventListener("resize", changeAvatar);
  const logOut = useMutation(LOCAL_LOG_Out);

  return <ProfilePresenter logOut={logOut} data={data} loading={loading} />;
});
