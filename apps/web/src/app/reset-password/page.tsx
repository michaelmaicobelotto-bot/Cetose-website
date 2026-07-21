"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Input, Card } from "@cetose/ui";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!password || !confirmPassword) {
      setErrorMsg("Por favor, preencha a nova senha e a confirmação.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("As senhas informadas não coincidem.");
      return;
    }

    if (password.length < 8) {
      setErrorMsg("A nova senha deve ter no mínimo 8 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg("Sua senha foi redefinida com sucesso! Você será redirecionado para o login.");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Ocorreu um erro ao atualizar a senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4">
      {/* Background Decorativo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header da Marca */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold text-emerald-400 tracking-tight">
            Cetose <span className="text-neutral-100">Consciente</span>
          </Link>
          <h1 className="text-xl font-medium text-neutral-200 mt-4">
            Definir Nova Senha
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Escolha uma senha forte para proteger sua conta
          </p>
        </div>

        <Card variant="glass" className="p-6 md:p-8 backdrop-blur-xl bg-neutral-900/80 border border-neutral-800">
          {successMsg ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                ✅
              </div>
              <h2 className="text-lg font-semibold text-neutral-100">
                Senha Alterada!
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {successMsg}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <Input
                id="reset-password"
                label="Nova Senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Input
                id="reset-confirm-password"
                label="Confirme a Nova Senha"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="primary"
                isLoading={loading}
                className="w-full justify-center text-base font-semibold py-3"
              >
                {loading ? "Salvando..." : "Salvar Nova Senha"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
