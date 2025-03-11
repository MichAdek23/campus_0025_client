import React, { useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <AuthContainer>
        <Title>{isSignup ? "Sign Up" : "Login"}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleAuth}>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>
        </Form>

        <Separator>OR</Separator>

        <GoogleButton onClick={handleGoogleLogin}>Sign in with Google</GoogleButton>

        <ToggleText onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
        </ToggleText>
      </AuthContainer>
    </Wrapper>
  );
};

export default Auth;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const AuthContainer = styled.div`
  width: 400px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
  color: #333;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const GoogleButton = styled.button`
  background: #dd4b39;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #c23321;
  }
`;

const Separator = styled.div`
  margin: 15px 0;
  font-weight: bold;
  color: #777;
`;

const ToggleText = styled.p`
  color: #007bff;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;
