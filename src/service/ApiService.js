import { API_BASE_URL } from "../app-config.js";

export function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        url: API_BASE_URL + api,
        method: method
    }
    if (request) {
        // GET Method
        options.body = JSON.stringify(request)
    }
    return fetch(options.url, options).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                if(!response.ok) {
                    // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은 것입
                    return Promise.reject(json)
                }
                return json;
            })
        } else if(response.status === 403) {
            window.location.href = "/login"
        }
    }
    ).catch((err) => {
        console.log(err.status);
        if(err.status === 403) {
            window.location.href = "/login"
        }
        return Promise.reject(err)
    })
}

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
        .then((response) => {
            console.log("response : ", response)
            alert("로그인 토큰:" + response.token)
        })
}