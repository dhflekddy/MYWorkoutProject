// import { useMutation } from "react-query";
// import { useNavigate } from "react-router-dom";
// import { ISignUpProps } from "types/interface/chat.interface";
// import { signUp } from "../apis";

// export const useSignup = (props: ISignUpProps) => {
//   const navigate = useNavigate();

//   const {
//     mutate: signup,
//     data,
//     isLoading,
//     isSuccess,
//   } = useMutation("signup", signUp, {
//     onSuccess: () => {
//       console.log(data);
//       // navigate({
//       //   pathname: '/signin',
//       // });
//     },
//     onError: (e) => {
//       console.log(e);
//       console.log(props);
//     },
//   });
//   const signupHandler = () => {
//     signup(props);
//   };
//   return { signupHandler, data, isLoading, isSuccess };
// };
