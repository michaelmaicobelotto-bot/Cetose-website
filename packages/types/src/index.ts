// ============================================================
// @cetose/types — Tipos compartilhados da plataforma
// Cetose Consciente
// ============================================================

// --- Usuário / Auth ---
export interface User {
  id: string;
  email: string;
  nome?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface UserProfile extends User {
  // Dados pessoais
  peso_kg?: number;
  altura_cm?: number;
  idade?: number;
  sexo?: "masculino" | "feminino" | "outro";
  nivel_atividade?:
    | "sedentario"
    | "leve"
    | "moderado"
    | "ativo"
    | "muito_ativo";

  // Objetivos
  objetivo?: "emagrecer" | "manter" | "ganhar_massa";
  restricoes_alimentares?: string[];

  // Progresso
  plano?: "free" | "basic" | "pro";
  data_compra?: string;
}

// --- Macros / Nutrição ---
export interface Macros {
  calorias: number;
  proteina_g: number;
  gordura_g: number;
  carboidrato_g: number;
  fibra_g?: number;
}

export interface CalculoMacros {
  tmb: number; // Taxa Metabólica Basal
  tdee: number; // Total Daily Energy Expenditure
  meta_calorias: number;
  macros: Macros;
}

// --- Receitas ---
export interface Receita {
  id: string;
  titulo: string;
  descricao: string;
  imagem_url?: string;
  tempo_preparo_min: number;
  porcoes: number;
  dificuldade: "facil" | "medio" | "dificil";
  categorias: string[];
  ingredientes: Ingrediente[];
  modo_preparo: string[];
  macros_por_porcao: Macros;
  favorito?: boolean;
  created_at: string;
}

export interface Ingrediente {
  nome: string;
  quantidade: string;
  unidade: string;
}

// --- Plano Alimentar ---
export interface RefeicaoDiaria {
  tipo:
    | "cafe_da_manha"
    | "lanche_manha"
    | "almoco"
    | "lanche_tarde"
    | "jantar"
    | "ceia";
  hora_sugerida?: string;
  receitas: Receita[];
  macros_totais: Macros;
}

export interface DiaSemana {
  dia:
    | "segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo";
  refeicoes: RefeicaoDiaria[];
  macros_dia: Macros;
}

// --- IA / Chat ---
export interface Mensagem {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export interface Conversa {
  id: string;
  user_id: string;
  mensagens: Mensagem[];
  created_at: string;
  updated_at: string;
}

// --- Compras / Assinatura ---
export interface Purchase {
  id: string;
  user_id: string;
  product: "basic" | "pro" | "lifetime";
  amount: number;
  currency: "BRL";
  status: "pending" | "active" | "cancelled" | "refunded";
  payment_method?: string;
  created_at: string;
  expires_at?: string;
}

// --- E-book ---
export interface Capitulo {
  id: string;
  numero: number;
  titulo: string;
  conteudo: string;
  progresso_leitura?: number; // 0-100%
}

// --- API Responses ---
export type ApiResponse<T> =
  | { data: T; error: null }
  | { data: null; error: string };

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
};

// --- Admin ---
export interface AdminStats {
  usuarios_totais: number;
  usuarios_ativos: number;
  mrr: number;
  arr: number;
  taxa_ativacao: number;
  churn_rate: number;
  nps?: number;
}
