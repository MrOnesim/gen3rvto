"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase/client";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSupabaseBrowser()
      .auth.getUser()
      .then(({ data }) => setEmail(data.user?.email ?? ""));
  }, []);

  const logout = async () => {
    await getSupabaseBrowser().auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f2f1ed]">
      <header className="sticky top-0 z-20 flex items-center justify-between px-5 md:px-8 h-16 border-b border-[#1c1c1c] bg-[#0a0a0a]/90 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="font-display text-[22px] tracking-[1px]">GEN3RVTO</span>
          <span className="text-[8px] tracking-[3px] text-brand uppercase">Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#9a9a9a] hidden md:inline">{email}</span>
          <button
            onClick={logout}
            className="text-[10px] tracking-[1px] uppercase border border-[#333] px-4 py-2 hover:border-brand hover:text-brand transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </header>
      <main className="px-5 md:px-8 py-8 max-w-[1200px] mx-auto">{children}</main>
    </div>
  );
}
