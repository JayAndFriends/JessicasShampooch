import { useState, useEffect } from 'react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Change this password to whatever you want
  const CORRECT_PASSWORD = 'shampooch2026';

  useEffect(() => {
    // Check if user is already authenticated in this session
    const auth = sessionStorage.getItem('shampooch_authenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('shampooch_authenticated', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-pink p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Jessica's Shampooch"
            className="h-40 w-auto mx-auto mb-6 object-contain"
          />
          <p className="text-zinc-600 text-lg font-medium">This site is password protected</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-zinc-700 mb-2"
            >
              Enter Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border-2 border-zinc-200 focus:border-pink-primary focus:ring-4 focus:ring-pink-100 outline-none transition-all"
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-primary text-white py-3 rounded-2xl font-bold text-lg hover:bg-pink-dark shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Unlock
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Contact the owner for access
        </p>
      </div>
    </div>
  );
}
