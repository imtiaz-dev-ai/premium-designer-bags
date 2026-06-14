import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminLogin, isAdminLoggedIn } from "@/lib/store";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (isAdminLoggedIn()) navigate({ to: "/admin" });
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (adminLogin(pw)) {
      navigate({ to: "/admin" });
    } else {
      setErr(true);
      setPw("");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-burgundy/10">
            <Lock className="h-7 w-7 text-burgundy" />
          </div>
          <h1 className="text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>Admin Panel</h1>
          <p className="mt-1 text-sm text-muted-foreground">Premium Designer Bags</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Password</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(false); }}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-burgundy"
              placeholder="Enter admin password"
              autoFocus
            />
            {err && <p className="mt-2 text-xs text-red-500">Incorrect password. Try again.</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold uppercase tracking-widest text-cream transition hover:opacity-90"
            style={{ background: "var(--gradient-luxe)" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
