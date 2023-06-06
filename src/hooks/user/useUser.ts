import axios from "axios";
import { UserCredentials } from "../../types";
import { paths } from "../../utils/paths/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/iu/uiSlice";
import { feedbackMessages } from "../../utils/responseData/responseData";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoaderActionCreator());

      const { data } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      return data.token;
    } catch (error) {
      dispatch(hideLoaderActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.credentialsWrong,
        })
      );
    }
  };

  return { getToken };
};

export default useUser;
