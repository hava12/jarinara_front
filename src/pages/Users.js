import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const userInfo = { usename: username, password: password };
        axios.post("http://localhost:8000/user-service/v1/login", userInfo).then((res) => {
            console.log(res);
        });
        console.log(username, password);
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <form onSubmit={onSubmit}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
            {loading ? <Spinner /> : <UserList users={users} />}
        </>
    );
};

export default Users;
