import axios from "axios";
import { UserCredentials } from "../../types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUser = () => {
  const getToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    const { data } = await axios.post<{ token: string }>(
      `${apiUrl}/user/login`,
      userCredentials
    );

    return data.token;
  };

  return { getToken };
};

export default useUser;
