import React from 'react';
 class ErrorBoundary extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       hasError: false
     }
   }
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`Cause: ${error}.\nStackTrace: ${errorInfo.componentStack}`);
  }

  render() {
    return this.state.hasError ? (
      <div className="ErrorBoundary text-center">
        <h3>Sorry there was a problem loading this page</h3>

      </div>
    ) : (
      this.props.children
    );
  }
}
export {ErrorBoundary as default};