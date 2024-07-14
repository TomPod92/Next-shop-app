"use client";

import Button from "@/components/Button/Button";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorBoundry = ({ error, reset }: Props) => {
  return (
    <div className="error-page">
      <p className="error-page__message">{error.message}</p>
      <Button text="Try again" onClick={reset} />
    </div>
  );
};

export default ErrorBoundry;
