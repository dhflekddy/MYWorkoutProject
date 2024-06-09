import { create } from "zustand";
/*Board의 작성과 수정에 관해서만 볼것이므로 API명세서에서 Board방면에서 가장 처음에 나오는 "최신게시물 리스트"의 Response에 있는 내용이
아닌 "게시물 작성"과 "게시물 수정"의 Request를 보면 된다.(Board의 작성과 수정에 관련된 것이므로 DB의 테이블구조를 보는 것이 아닌 서버로 
    데이터를 날리는 API명세를 보는 것이 이치에 맞음))*/
interface BoardStore{
    title:string;
    content:string;
    boardImageFileList:File[];//게시물 작성시 File을 URL로 바꾸어 업로드 하도록 함. 여기서는 일단 File로 저장!
    setTitle:(title:string)=>(void);
    setContent:(content:string)=>(void);
    setBoardImageFileList:(boardImageFileList:File[]) =>(void);
    resetBoard:()=>void;
};


const useBoardStore=create<BoardStore>(set=>({
    title:'',
    content:'',
    boardImageFileList:[],
    setTitle:(title)=>set((state)=>({...state, title})),
    setContent:(content)=>set((state)=>({...state, content})),
    setBoardImageFileList:(boardImageFileList)=>set((state)=>({...state, boardImageFileList})),
    resetBoard:()=>set((state)=>({...state, title:'', content:'', boardImageFileList: []})),
}));

export default useBoardStore;   
