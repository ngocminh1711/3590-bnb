import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"

function GoogleLogin() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <button onClick={login}>
            <i class="fa-brands fa-google"></i>
            Continue with google
          </button>
        </header>
      </div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
}

export default GoogleLogin;
