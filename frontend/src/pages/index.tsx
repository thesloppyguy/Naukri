import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useScrollTop } from "../hooks/useScrollTop";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const WrappedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const redirect = (path: string) => {
    navigate(path);
  };

  const isAuthenticated = useAuth();

  const handleRoute = async () => {
    if (isAuthenticated) {
      if (!location.pathname.includes("dashboard")) {
        redirect("/dashboard");
      }
    } else if (!location.pathname.includes("user")) {
      redirect("/user");
    }
  };

  useEffect(() => {
    handleRoute();
  }, []);
  return <Outlet />;
};

const httpLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: new Date() });
  return forward(operation);
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App() {
  useScrollTop();
  return (
    <ApolloProvider client={client}>
      <WrappedPage />
    </ApolloProvider>
  );
}
