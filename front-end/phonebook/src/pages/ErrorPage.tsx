import { useRouteError, isRouteErrorResponse  } from "react-router-dom";
import ErrorCapsule from "../components/ErrorCapsule";

export default function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
        <ErrorCapsule>
                <h1>Oops!</h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
        </ErrorCapsule>
    );
  } else {
    return (
        <ErrorCapsule>
            <div>Oops</div>
        </ErrorCapsule>
    );    
  }
}