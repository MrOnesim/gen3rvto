"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = getSupabaseBrowser();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="min-h-screen grid place-items-center bg-[#050505] px-5">
      <form onSubmit={submit} className="w-full max-w-[360px] bg-[#0b0b0b] border border-[#222] p-8">
        <p className="text-[9px] tracking-[3px] text-brand uppercase mb-2">GEN3RVTO · ADMIN</p>
        <h1 className="font-display text-[40px] leading-none mb-7">Connexion</h1>

        <label className="block text-[9px] tracking-[1.4px] uppercase text-[#cfcfcf] mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full bg-transparent border border-[#333] px-3 py-[10px] text-white outline-none focus:border-brand mb-5"
        />

        <label className="block text-[9px] tracking-[1.4px] uppercase text-[#cfcfcf] mb-2">Mot de passe</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full bg-transparent border border-[#333] px-3 py-[10px] text-white outline-none focus:border-brand mb-6"
        />

        {error && <p className="text-[11px] text-[#ff5a5a] mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-brand text-white uppercase text-[9px] font-extrabold tracking-[1.5px] hover:bg-white hover:text-[#111] transition-colors disabled:opacity-60"
        >
          {loading ? "…" : "Se connecter"}
        </button>
      </form>
    </main>
  );
}
