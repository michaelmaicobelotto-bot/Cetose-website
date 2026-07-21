"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button, Input, Card, Loading } from "@cetose/ui";
import { useAuth } from "@/hooks/useAuth";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const { signInWithPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await signInWithPassword(email, password);

      if (error) {
        setErrorMsg(
          error.message === "Invalid login credentials"
            ? "E-mail ou senha incorretos."
            : error.message
        );
      } else {
        router.push(redirectTo);
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Ocorreu um erro ao realizar o login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="glass" className="p-6 md:p-8 backdrop-blur-xl bg-neutral-900/80 border border-neutral-800">
      <form onSubmit={handleSubmit} className="space-y-5">
        {errorMsg && (
          <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
            <span>⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        <Input
          id="login-email"
          label="Endereço de E-mail"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div>
          <Input
            id="login-password"
            label="Sua Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right mt-1.5">
            <Link
              href="/forgot-password"
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          isLoading={loading}
          className="w-full justify-center text-base font-semibold py-3"
        >
          {loading ? "Entrando..." : "Entrar no Aplicativo"}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-neutral-800 text-center">
        <p className="text-sm text-neutral-400">
          Ainda não possui uma conta?{" "}
          <Link
            href="/signup"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default function LoginPage() {
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
            Acesse sua Área de Membros
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Entre com suas credenciais para continuar sua jornada
          </p>
        </div>

        <Suspense fallback={
          <Card variant="glass" className="p-8 text-center border border-neutral-800">
            <Loading size="md" label="Carregando formulário..." />
          </Card>
        }>
          <LoginForm />
        </Suspense>

        <p className="text-center text-xs text-neutral-500 mt-8">
          © {new Date().getFullYear()} Cetose Consciente. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
