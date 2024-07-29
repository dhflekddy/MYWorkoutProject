// import axios from "axios";
// import { useMutation } from "react-query";
// import { useUserDispatch } from "../context/user-context";
// import { SignInProps } from "types/interface/chat.interface";
// import {signIn} from "../apis"
// export const useSignIn = (props: SignInProps) => {
//   const dispatch = useUserDispatch();
//   const {
//     mutate: signin,
//     data,
//     isLoading,
//     isSuccess,
//     isError,
//   } = useMutation("signin", signIn, {
//     onSuccess: (res) => {
//       console.log(`Response: `, res);
//       if (res) {
//         if (res.accessToken) {
//           console.log(res);
//           axios.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${res.accessToken}`;
//         }

//         dispatch({ type: "SET_NAME", name: res.name });
//         dispatch({ type: "SET_ROOMS", rooms: [] });
//         // dispatch({ type: "SET_ROOMS", rooms: res.rooms });
//         // dispatch({ type: "SET_URLS", urls: res.urls });
//       }
//     },
//     onError: (error) => {
//       console.log(`Use Signin Error: `, error);
//     },
//   });

//   const signinHandler = () => {
//     signin(props);
//   };
//   return { signinHandler, data, isLoading, isSuccess, isError };
// };
