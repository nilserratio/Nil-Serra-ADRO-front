import { useEffect } from "react";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import useToken from "../../hooks/token/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const { decodeToken } = useToken();

  useEffect(() => {
    const token = getToken("token");
    if (token) {
      const userData = decodeToken(token);

      dispatch(loginUserActionCreator(userData));
    }
  }, [decodeToken, dispatch, getToken]);

  return <Layout />;
};

export default App;
