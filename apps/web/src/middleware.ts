import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return req.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
        res = NextResponse.next({
          request: {
            headers: req.headers,
          },
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          res.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = req.nextUrl.pathname;

  // Lista de rotas protegidas que exigem login
  const protectedRoutes = ["/dashboard", "/biblioteca", "/receitas", "/perfil", "/plano-alimentar"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Lista de rotas públicas de autenticação
  const authRoutes = ["/login", "/signup", "/forgot-password"];
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirecionar usuário não autenticado que tenta acessar rota protegida
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL("/login", req.url);
    redirectUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirecionar usuário autenticado que tenta acessar login/signup
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/biblioteca/:path*",
    "/receitas/:path*",
    "/perfil/:path*",
    "/plano-alimentar/:path*",
    "/login",
    "/signup",
    "/forgot-password",
  ],
};
