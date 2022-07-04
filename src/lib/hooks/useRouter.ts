import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useMemo } from "react";

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  // const history = useHistory();
  // const match = useRouteMatch();
  // const goBack = () => history.goBack();

  return useMemo(() => {
    return {
      // push: history.push,
      // replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      } as any,
      //match,
      location,
      history,
      //goBack,
      //Redirect,
    };
  }, [params, location, history]);
};
