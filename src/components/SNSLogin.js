// @ts-nocheck
import React, { useState } from "react";
import KakaoLogin from "react-kakao-login";
require("dotenv").config();

let KAKAOTALK_LOGIN_JSKEY = "";

if (process.env.NODE_ENV === "development") {
    KAKAOTALK_LOGIN_JSKEY = process.env.REACT_APP_KAKAOTALK_LOGIN_JSKEY;
} else {
    KAKAOTALK_LOGIN_JSKEY = process.env.KAKAOTALK_LOGIN_JSKEY;
}

const LogoutButton = (props) => {
    const signOut = (e) => {
        if (!window.Kakao.Auth.getAccessToken()) {
            alert(`Please Login First`);
        }
        window.Kakao.Auth.logout(props.onLogOut());
    };

    return <button onClick={signOut}>SignOut</button>;
};

export const SNSKakaoLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSuccess = (e) => {
        //서버로 token 전송
        window.Kakao.Auth.login({
            scope: "account_email,gender,age_range",
            fail: function (e) {
                //error log를 서버로 전송하기.
                //TODO: error 항목 확인해서 로그인 되는데 문제없도록하기.
                alert(`Try Again. ErrorMsg: ${e}`);
            },
        });

        console.log(e);
        setIsLoggedIn(true);
    };

    const onFailure = (e) => {
        alert(`Error!! Try Again. ErrorMsg: ${e}`);
    };

    const onLogOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <LogoutButton onLogOut={onLogOut} />
            ) : (
                <KakaoLogin
                    jsKey={KAKAOTALK_LOGIN_JSKEY}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    getProfile
                    useDefaultStyle
                />
            )}
        </div>
    );
};
