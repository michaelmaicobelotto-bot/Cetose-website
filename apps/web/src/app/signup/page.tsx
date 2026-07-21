"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Input, Card } from "@cetose/ui";
import { useAuth } from "@/hooks/useAuth";

export default function SignupPage() {
  const router = useRouter();
  const { signUp } = useAuth();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Validação de Requisitos da Senha
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.exec(password) !== null;
  const hasLower = /[a-z]/.exec(password) !== null;
  const hasNumber = /[0-9]/.exec(password) !== null;
  const hasSpecial = /[^A-Za-z0-9]/.exec(password) !== null;

  const isPasswordValid =
    hasMinLength && hasUpper && hasLower && hasNumber && hasSpecial;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!nome || !email || !password || !confirmPassword) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("As senhas informadas não coincidem.");
      return;
    }

    if (!isPasswordValid) {
      setErrorMsg("Sua senha deve atender a todos os requisitos de segurança.");
      return;
    }

    if (!acceptedTerms) {
      setErrorMsg("Você deve aceitar os Termos de Uso e a Política de Privacidade.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signUp(email, password, { nome });

      if (error) {
        setErrorMsg(error.message);
      } else {
        if (data?.session) {
          router.push("/dashboard");
        } else {
          setSuccessMsg(
            "Conta criada com sucesso! Verifique sua caixa de entrada para confirmar seu e-mail."
          );
        }
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Ocorreu um erro ao realizar o cadastro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4 py-12">
      {/* Background Decorativo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold text-emerald-400 tracking-tight">
            Cetose <span className="text-neutral-100">Consciente</span>
          </Link>
          <h1 className="text-xl font-medium text-neutral-200 mt-4">
            Crie sua Conta
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Comece hoje a sua jornada para uma vida com mais energia e saúde
          </p>
        </div>

        <Card variant="glass" className="p-6 md:p-8 backdrop-blur-xl bg-neutral-900/80 border border-neutral-800">
          {successMsg ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto">
                ✉️
              </div>
              <h2 className="text-lg font-semibold text-neutral-100">
                Verifique seu E-mail
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {successMsg}
              </p>
              <Link href="/login">
                <Button variant="primary" className="w-full mt-4 justify-center">
                  Ir para Login
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <Input
                id="signup-nome"
                label="Nome Completo"
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />

              <Input
                id="signup-email"
                label="Endereço de E-mail"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                id="signup-password"
                label="Crie uma Senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Indicador de Força da Senha */}
              {password.length > 0 && (
                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs space-y-1.5">
                  <p className="font-medium text-neutral-400">Requisitos da Senha:</p>
                  <div className="grid grid-cols-2 gap-1 text-[11px]">
                    <span className={hasMinLength ? "text-emerald-400" : "text-neutral-500"}>
                      {hasMinLength ? "✓" : "○"} Mínimo 8 caracteres
                    </span>
                    <span className={hasUpper ? "text-emerald-400" : "text-neutral-500"}>
                      {hasUpper ? "✓" : "○"} Letra Maiúscula
                    </span>
                    <span className={hasLower ? "text-emerald-400" : "text-neutral-500"}>
                      {hasLower ? "✓" : "○"} Letra Minúscula
                    </span>
                    <span className={hasNumber ? "text-emerald-400" : "text-neutral-500"}>
                      {hasNumber ? "✓" : "○"} Número (0-9)
                    </span>
                    <span className={`col-span-2 ${hasSpecial ? "text-emerald-400" : "text-neutral-500"}`}>
                      {hasSpecial ? "✓" : "○"} Caractere Especial (!@#$)
                    </span>
                  </div>
                </div>
              )}

              <Input
                id="signup-confirm-password"
                label="Confirme a Senha"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <label className="flex items-start gap-3 cursor-pointer pt-2 text-xs text-neutral-300">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-0.5 rounded border-neutral-700 bg-neutral-800 text-emerald-500 focus:ring-emerald-500/20"
                />
                <span>
                  Eu li e aceito os{" "}
                  <a href="#" className="text-emerald-400 underline">
                    Termos de Uso
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-emerald-400 underline">
                    Política de Privacidade
                  </a>
                  .
                </span>
              </label>

              <Button
                type="submit"
                variant="primary"
                isLoading={loading}
                className="w-full justify-center text-base font-semibold py-3 mt-4"
              >
                {loading ? "Criando conta..." : "Cadastrar Gratuitamente"}
              </Button>
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
            <p className="text-sm text-neutral-400">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Faça login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
