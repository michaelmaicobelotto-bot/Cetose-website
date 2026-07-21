"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card } from "@cetose/ui";
import { useAuth } from "@/hooks/useAuth";

export default function ForgotPasswordPage() {
  const { resetPasswordForEmail } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email) {
      setErrorMsg("Por favor, digite seu endereço de e-mail.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await resetPasswordForEmail(email);

      if (error) {
        setErrorMsg(error.message);
      } else {
        setSuccessMsg(
          "Enviamos um link de redefinição de senha para o seu e-mail. Verifique sua caixa de entrada e o lixo eletrônico."
        );
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Ocorreu um erro ao enviar o e-mail de recuperação.");
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
            Recuperação de Senha
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Digite seu e-mail para receber as instruções de acesso
          </p>
        </div>

        <Card variant="glass" className="p-6 md:p-8 backdrop-blur-xl bg-neutral-900/80 border border-neutral-800">
          {successMsg ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                🔑
              </div>
              <h2 className="text-lg font-semibold text-neutral-100">
                E-mail Enviado!
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {successMsg}
              </p>
              <Link href="/login">
                <Button variant="outline" className="w-full mt-4 justify-center">
                  Voltar para o Login
                </Button>
              </Link>
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
                id="forgot-email"
                label="Endereço de E-mail Cadastrado"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="primary"
                isLoading={loading}
                className="w-full justify-center text-base font-semibold py-3"
              >
                {loading ? "Enviando..." : "Enviar Link de Recuperação"}
              </Button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
            <p className="text-sm text-neutral-400">
              Lembrou sua senha?{" "}
              <Link
                href="/login"
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Voltar para o Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
