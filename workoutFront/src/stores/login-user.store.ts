import { User } from "types/interface";
import { create } from "zustand";
//LoginUserStore이라는 타입을 위해 types폴더의 interface에 User타입(user.interface.ts)을 정의해 주었음
interface LoginUserStore{
    loginUser: User | null;
    setLoginUser:(loginUser:User) =>void;
    resetLoginUser:()=>void;
};

//전역적으로 사용하는 상태변수(useLoginUserStore)를 만드는 방법. 상태관리 라이브러리로 리덕스가 아닌 zustand를 사용
const useLoginUserStore=create<LoginUserStore>(set=>({
    loginUser:null,
    setLoginUser:(loginUser)=>set(state =>({...state, loginUser})),
    resetLoginUser: ()=>set(state =>({...state, loginUser:null}))
}));    

export default useLoginUserStore;

