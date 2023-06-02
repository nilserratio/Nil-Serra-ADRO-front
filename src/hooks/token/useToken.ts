import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserTokenStructure } from "../../store/user/types";

const useToken = () => {
  const decodeToken = useCallback(
    (token: string): Partial<UserTokenStructure> => {
      const tokenData: { sub: string } = jwt_decode(token);
      const userData: Partial<UserTokenStructure> = {
        id: tokenData.sub,
      };

      return userData;
    },
    []
  );

  return { decodeToken };
};

export default useToken;
