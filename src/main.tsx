import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false, error: undefined as Error | undefined };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('App error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 560 }}>
          <h1 style={{ color: '#1f1d1b' }}>Something went wrong</h1>
          <p style={{ color: '#57534e', marginTop: 8 }}>
            {this.state.error?.message ?? 'Unknown error'}
          </p>
          <p style={{ color: '#78716c', marginTop: 16, fontSize: 14 }}>
            Try running <code>npm run dev</code> again. If you just added a new blog post, make sure
            <code> src/content/posts/index.generated.json</code> was created (predev runs before dev).
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
