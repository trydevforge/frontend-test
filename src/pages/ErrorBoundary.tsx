import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "../ui";
import { ErrorBoundaryContainer, ErrorBoundaryTitle } from "../styled";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <ErrorBoundaryTitle>Something went wrong.</ErrorBoundaryTitle>
          <p
            style={{
              fontSize: "16px",
            }}
          >
            An unexpected error has occurred. Please try again later.
          </p>
          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="contained"
            style={{
              marginTop: "10px",
            }}
          >
            Reload Page
          </Button>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
