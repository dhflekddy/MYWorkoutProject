import {ChangeEvent, KeyboardEvent, forwardRef} from 'react'
import './style.css'
import React from 'react';
//         interface: Input Box 컴포넌트 Properties        //
interface Props{
    label:string;
    type: 'text'|'password';
    placeholder:string;
    value:string;
    onChange: (event:ChangeEvent<HTMLInputElement>)=>void;
    error:boolean;

    icon?: 'eye-light-off-icon'|'eye-light-on-icon'| 'expand-right-light-icon';//물음표는 선택의 의미임. icon은 있을수도 있고 없을 수도 있음
    onButtonClick?: ()=> void; //마찬가지로 버튼이 있을수도 있고 없을 수도 있으므로 물음표를 넣어줌

    message?:string;
    
    onKeyDown?:(event:KeyboardEvent<HTMLInputElement>)=>void;
}

// useRef를 사용하기 위해서, 직접적으로 input element들을 컨트롤하기 위해 forwardRef를 사용하고 있는 것!!!
//         component: InputBox 컴포넌트        //
const InputBox=forwardRef <HTMLInputElement, Props>((props:Props, ref)=>{

    //         state: properties        //
    const{label, type, placeholder, value, error, icon, message }=props;
    const {onChange, onButtonClick, onKeyDown }=props;
    
 
//        event handler: iput키 이벤트 처리 함수       //
const onKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(!onKeyDown)return;
    onKeyDown(event);
}

    //         render: Input Box 컴포넌트        //
    return (
        <div className='inputbox'>
        <div className='inputbox-label'>{label}</div>
        <div className={error?'inputbox-container-error':'inputbox-container'}>
            {/* ref를 지정한다는 것은 input에서 엔터키를 치면 다음 input으로 넘어가게 
            하거나 다음 과정인 로그인으로 넘어가게 하기 위한것. 즉 ref를 받으면 키보드에 관한 동작을 처리할 수 있음.
            키보드에 관한 상태가 onKeyDown이다 */}
            <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDownHandler}/>
            {onButtonClick !== undefined &&
            // 버튼도 아닌데 onClick이 있네? 일정한 버튼이 아닌 좀 특수한 생김새의 버튼이라서 그렇다. 그런 버튼은 이렇게 div태그에 붙어있는 것이다. 
            <div className='icon-button' onClick={onButtonClick} >   
            {/* 띄어쓰기를 기준으로 두개의 클래스를 적용받고 있다 */}
            {icon!==undefined &&(<div className={`icon ${icon}`}></div>)}
        </div>
            }
        </div>
        {message !== undefined && <div className='inputbox-message'>{message}</div>}
        </div>
    )
});
export default  InputBox;

