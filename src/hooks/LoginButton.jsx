import React, { useEffect } from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1cd5b3172b3e48cd9bccd0434c479e65&response_type=token&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const getReturnedParams = (hash) => {
  const stringAfterHashing = hash.substring(1);
  const paramsInUrl = stringAfterHashing.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});
  return paramsSplitUp;
};

function LoginButton(props) {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } = getReturnedParams(
        window.location.hash
      );
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("tokenType", token_type);
    }
  });
  return (
    <div>
      <a
        className="btn btn-outline-dark btn-social text-center"
        role="button"
        href={AUTH_URL}
      >
        Login
      </a>
    </div>
  );
}

export default LoginButton;
