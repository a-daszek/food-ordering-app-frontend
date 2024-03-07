import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser(); //it's the mutateAsync function we are exposing in the MyUserApi file

  const hasCreatedUser = useRef(false); //useRef stores a state value and whenever the state changes it does not trigger the component to re-render

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email }); //user.sub is the users id
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <>Ładowanie...</>;
};

export default AuthCallbackPage;
