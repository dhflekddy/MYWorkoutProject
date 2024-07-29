// import { Box, Grid } from "@mui/material";
// import { forwardRef } from "react";
// import { ChatDetail } from "../../types/interface/chat.interface";
// import { ChatMessageList } from "./chat-message-list";
// import React from "react";

// interface IChatAreaProps {
//   chatName: String;
//   chatMessages: ChatDetail[];
//   // ref: React.RefObject<HTMLDivElement>;
// }
// export const ChatArea = forwardRef<HTMLDivElement, IChatAreaProps>(
//   (props, ref) => {
//     console.log(ref);
//     return (
//       <Grid item lg={11} md={11} sm={10} xs={10}>
//         {props.chatName}
//         <Box
//           border={`1px solid black`}
//           height={`100%`}
//           maxHeight={{ lg: "750px", md: "750px", sm: "500px", xs: "500px" }}
//           sx={{ overflowY: "scroll" }}
//         >
//           <ChatMessageList chatMessages={props.chatMessages} />
//           <div ref={ref}></div>
//         </Box>
//       </Grid>
//     );
//   }
// );
