import { API_BASE_URL } from "../app-config.js";
const ACCESS_TOKEN = "ACCESS_TOKEN"

export function call(api, method, request) {
    let headers = new Headers({
        "Content-Type": "application/json"
    })
    
    // 로컬 스토리지에서 ACCESS_TOKEN 가져오기
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken)
    }
    
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };
    
    if (request) {
        //GET method
        options.body = JSON.stringify(request);
    } 
    return fetch(options.url, options)
        .then((response) => {
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
    return call("/api/auth/signin", "POST", userDTO)
        .then((response) => {
            console.log("response : ", response)
            if(response != null && response.token) {
                //로컬 스토리지에 토큰 저장
                localStorage.setItem(ACCESS_TOKEN, response.token)
                alert("로그인 토큰:" + response.token)
                window.location.href = "/";
            }
        })
}

export function signout() {
    localStorage.setItem(ACCESS_TOKEN, null)
    window.location.href = "/login"
}