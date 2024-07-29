// //오직 chat을 위해서만듬

// import axios from "axios";
// import { useMutation } from "react-query";
// import { useUserDispatch } from "../context/user-context";
// // import { SignInProps } from "../../interface/user";
// import { refresh } from "../apis";

// export const useRefresh = () => {
//   const dispatch = useUserDispatch();
//   const { mutate: refreshToken, data } = useMutation("refresh", refresh, {
//     onSuccess: (res) => {
//       if (res) {
//         if (res.accessToken) {
//           console.log(res);
//           axios.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${res.accessToken}`;
//         }
//         dispatch({ type: "SET_NAME", name: res.name });
//         // dispatch({ type: "SET_ROOMS", rooms: [] });
//       }
//     },
//     onError: (error) => {
//       console.log(`Use Signin Error: `, error);
//     },
//   });

//   const refreshHandler = () => {
//     refreshToken();
//   };
//   return { refreshHandler, data };
// };
