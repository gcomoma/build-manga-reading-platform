import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ReactAppErrorReport {
  type: "buildify:app:error";
  name: string;
  message: string;
  stack?: string;
  componentStack: string;
  timestamp: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): {
    hasError: boolean;
    error: Error;
  } {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });

    try {
      const errorMessage: ReactAppErrorReport = {
        type: "buildify:app:error",
        name: error.name,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      };

      if (window.parent !== window) {
        window.parent.postMessage(errorMessage, "*");
        console.log("Error report sent");
      }
    } catch (reportingError) {
      console.error("Failed to report error to parent window:", reportingError);
    }
  }

  triggerErrorOverlay(err) {
    const ErrorOverlay = customElements.get("vite-error-overlay");

    if (ErrorOverlay) {
      const overlay = document.querySelector(
        "vite-error-overlay"
      ) as HTMLElement & { err: Error };
      if (overlay) {
        overlay.err = err;
      } else {
        const overlay = new ErrorOverlay(err);
        document.body.appendChild(overlay);
      }
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      this.triggerErrorOverlay(this.state.error);
      return <></>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
