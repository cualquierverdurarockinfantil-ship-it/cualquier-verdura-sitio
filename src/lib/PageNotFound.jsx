import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-light text-muted-foreground">404</h1>
        <h2 className="font-display text-3xl text-foreground">Página no encontrada</h2>
        <p className="text-muted-foreground">
          La página <span className="font-semibold">"{location.pathname}"</span> no existe.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center gap-2 px-6 py-3 bg-cv-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
