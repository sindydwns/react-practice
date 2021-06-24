import React from "react";
import { useInput } from "../hooks/formInput";
import menuStyle from "./SideNavigator.module.css";

function SubmitForm() {

    const name = useInput("");

    return (
        <div className={menuStyle.main}>
            <h3>Form 의 각 value 를 유효성 검사를 하고 submit. (미완성. 데이터는 어디에도 저장되지 않습니다.)</h3>
            <form>
                <div>
                    <span>이름 : </span>
                    <input {...name} name="userName" />
                </div>
                <div>
                    <span>성별 : </span>
                    <input id="male" type="radio" name="gender" /><label id="male">남</label>
                    <input id="female" type="radio" name="gender" /><label id="female">여</label>
                </div>
                <div>
                    <span>사진 : </span>
                    <input type="file" />
                </div>
                <div>
                    <span>이메일 : </span>
                    <input></input>
                    <span>(focus 를 잃을 때 이메일 형식인지 유효성 검사 필요)</span>
                </div>
                <div>
                    <span>휴대전화 : </span>
                    <input></input>
                    <span>(숫자, - 외의 문자는 받지 않도록 만들어야 함)</span>
                </div>
                <div>
                    <span>취미 : </span>
                    <select>
                        <option>그림</option>
                        <option>운동</option>
                        <option>음악감상</option>
                        <option>프로그래밍</option>
                        <option>기타</option>
                    </select>
                    <span>(최대 5 가지의 취미를 선택할 수 있도록 만들어야 함)</span>
                </div>
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default SubmitForm;