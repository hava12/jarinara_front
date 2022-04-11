import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [joinUserId, setJoinUserId] = useState("");
    const [joinPassword, setJoinPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        const userInfo = { userId: userId, password: password };
        axios.post("http://localhost:8000/user-service/v1/login", userInfo).then((res) => {
            console.log(res);
        });
        console.log(userId, password);
    };

    const join = () => {
        alert('회원가입 Modal')
    }

    return (
        <>
            <h1>Home</h1>
            <br/><br/><br/>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} /> <br />
                <input placeholder="Password" className="mt-2" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit" className="btn btn-success m-2" >로그인</button><br/>
                <Link to={`/findId`}>비밀번호를 잃어버리셨나요?</Link><br/>
                <hr/>
            </form>
            <button type="button" className="btn btn-secondary m-2" data-bs-toggle="modal" data-bs-target="#joinModal">회원가입</button>

            <div className="modal fade" id="joinModal" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" style={{display: "none"}} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">회원가입</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input className="m-2" placeholder="UserId" value={joinUserId} onChange={(e) => setJoinUserId(e.target.value)} /> <br />
                            <input className="mb-2" placeholder="Password" value={joinPassword} onChange={(e) => setJoinPassword(e.target.value)} /> <br />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                            <button type="button" className="btn btn-primary">가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
};

export default Home;
