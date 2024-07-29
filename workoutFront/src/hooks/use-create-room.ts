// //오직 chat을 위해서만듬
// import { useMutation } from "react-query";
// import { useUserState } from "../context/user-context";
// import { CreateRoomProps } from "../types/interface/chat.interface";
// import { createRoom } from "../apis";

// export const useCreateRoom = (props: CreateRoomProps) => {
//   const user = useUserState();
//   // const formData = new FormData();
//   // formData.append("pictureFile", props.pictureFile);
//   // formData.append("name", props.name);
//   const {
//     mutate: createroom,
//     data,
//     isLoading,
//     isSuccess,
//   } = useMutation("createRoom", createRoom, {
//     onSuccess: (data) => {
//       console.log(data)
//       if (data) {
//         console.log(data);
//         user.rooms = user.rooms.concat(data);
//       }
//     },
//     onError: (e) => {
//       console.log(e);
//     },
//   });
//   const createRoomHandler = () => {
//     createroom(props);
//   };
//   return { createRoomHandler, data, isLoading, isSuccess };
// };
