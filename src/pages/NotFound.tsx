import { Navigate } from 'react-router-dom';

export function NotFound() {
  return <Navigate to="/" replace />;
}
