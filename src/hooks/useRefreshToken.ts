import axios from "../api/axios";
import { authActions } from "../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import { AuthResponse } from "../redux/reducers/types/auth";

const useRefreshToken = () => {
  const dispatch = useDispatch();

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
