import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserTokenStructure } from "../../store/types";

const useToken = () => {
  const decodeToken = useCallback((token: string): UserTokenStructure => {
    const tokenData: { sub: string } = jwt_decode(token);
    const userData: UserTokenStructure = {
      id: tokenData.sub,
      token,
    };

    return userData;
  }, []);

  return { decodeToken };
};

export default useToken;
