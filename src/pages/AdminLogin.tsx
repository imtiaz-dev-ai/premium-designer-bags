import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin, isAdminLoggedIn } from "@/lib/store";
import { Lock, User } from "lucide-react";
import logoImg from "@/assets/Logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isAdminLoggedIn()) navigate("/admin");
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (adminLogin(username, password)) {
      navigate("/admin");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <img src={logoImg} alt="Logo" className="mx-auto mb-4 h-16 w-16 rounded-full object-cover shadow-lg" />
          <h1 className="text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Admin Panel</h1>
          <p className="mt-1 text-sm text-muted-foreground">Premium Designer Bags</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm outline-none focus:border-burgundy"
                placeholder="Enter username"
                autoFocus
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm outline-none focus:border-burgundy"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-xs font-medium text-red-600">
              Incorrect username or password.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
            style={{ background: "var(--gradient-luxe)" }}
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Default: <span className="font-mono font-semibold">admin</span> / <span className="font-mono font-semibold">designer2024</span>
        </p>
      </div>
    </div>
  );
}
