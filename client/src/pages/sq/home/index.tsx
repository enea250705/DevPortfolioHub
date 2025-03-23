import { FC } from 'react';
import { Link } from 'wouter';

const AlbanianHomePage: FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Zhvillues Web Profesional në Shqipëri</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/sq/tirane">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Tiranë</h2>
              <p>Shërbime profesionale të zhvillimit web në Tiranë</p>
            </a>
          </Link>
          <Link href="/sq/durres">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Durrës</h2>
              <p>Shërbime profesionale të zhvillimit web në Durrës</p>
            </a>
          </Link>
          <Link href="/sq/vlore">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Vlorë</h2>
              <p>Shërbime profesionale të zhvillimit web në Vlorë</p>
            </a>
          </Link>
          <Link href="/sq/shkoder">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Shkodër</h2>
              <p>Shërbime profesionale të zhvillimit web në Shkodër</p>
            </a>
          </Link>
          <Link href="/sq/elbasan">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Elbasan</h2>
              <p>Shërbime profesionale të zhvillimit web në Elbasan</p>
            </a>
          </Link>
          <Link href="/sq/fier">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Fier</h2>
              <p>Shërbime profesionale të zhvillimit web në Fier</p>
            </a>
          </Link>
          <Link href="/sq/korce">
            <a className="block p-6 bg-card hover:bg-accent rounded-lg shadow-lg transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Korçë</h2>
              <p>Shërbime profesionale të zhvillimit web në Korçë</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbanianHomePage;
