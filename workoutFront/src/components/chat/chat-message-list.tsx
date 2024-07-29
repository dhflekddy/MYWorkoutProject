// import { Grid } from "@mui/material";
// import { useRef } from "react";
// import { Fade } from "react-awesome-reveal";
// import { useUserState } from "../../context/user-context";
// import { ChatDetail } from "../../types/interface/chat.interface";
// import { MessageBox } from "./message-box";
// import React from "react";

// interface IChatMessageListProps {
//   chatMessages: ChatDetail[];
// }
// export const ChatMessageList = ({ chatMessages }: IChatMessageListProps) => {
//   const user = useUserState();
//   console.log(chatMessages);
//   return (
//     <>
//       {chatMessages.map((props) => {
//         return props.type === "ENTER" ? (
//           <Fade>
//             <Grid
//               key={props.roomId}
//               item
//               display={"flex"}
//               justifyContent={"center"}
//               margin={"20px"}
//             >
//               {props.message}
//             </Grid>
//           </Fade>
//         ) : (
//           <Fade>
//             <Grid
//               key={props.sender}
//               item
//               display={"flex"}
//               justifyContent={
//                 props.sender === user.name ? "flex-end" : "flex-start"
//               }
//             >
//               <MessageBox
//                 message={props.message}
//                 user={props.sender}
//                 isUser={false}
//               />
//             </Grid>
//           </Fade>
//         );
//       })}
//     </>
//   );
// };
