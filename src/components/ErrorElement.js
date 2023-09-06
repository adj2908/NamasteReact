import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong</h2>
      <h3>{error.statusText}</h3>
    </div>
  );
};

export default ErrorElement;
