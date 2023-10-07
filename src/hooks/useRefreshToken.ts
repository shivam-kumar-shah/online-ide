import axios from "../api/axios";
import { authActions } from "../redux/reducers/authReducer";
import { AuthResponse } from "../redux/reducers/types/auth";
import { useAppDispatch } from "../redux/store";

const useRefreshToken = () => {
  console.log("2.1");
  const dispatch = useAppDispatch();
  console.log("2.2");

  const refresh = async () => {
    const response = await axios.get<AuthResponse>("/users/refresh", {
      withCredentials: true,
    });
    const data = response.data;
    dispatch(authActions.setAccessToken(data.accessToken!));

    return data.accessToken!;
  };

  return refresh;
};
export default useRefreshToken;
