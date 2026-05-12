"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/admin/applications");
      } else {
        router.replace("/admin/login");
      }
    });
    return () => unsub();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
      <Loader2 className="animate-spin text-accent" size={28} />
    </div>
  );
}
