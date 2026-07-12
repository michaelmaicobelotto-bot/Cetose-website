export default function AdminPage() {
  const stats = [
    {
      label: "Usuários Totais",
      value: "1.247",
      change: "+12.5%",
      positive: true,
      icon: "👥",
      description: "vs. mês anterior",
    },
    {
      label: "Receita MRR",
      value: "R$ 8.940",
      change: "+8.3%",
      positive: true,
      icon: "💰",
      description: "vs. mês anterior",
    },
    {
      label: "Taxa de Ativação",
      value: "68%",
      change: "+5.2%",
      positive: true,
      icon: "🚀",
      description: "vs. mês anterior",
    },
    {
      label: "Churn Rate",
      value: "3.2%",
      change: "-1.1%",
      positive: true,
      icon: "📉",
      description: "vs. mês anterior",
    },
  ];

  const recentUsers = [
    { name: "Maria Silva", email: "maria@email.com", plan: "Pro", status: "Ativo", date: "12/07/2026" },
    { name: "João Souza", email: "joao@email.com", plan: "Basic", status: "Ativo", date: "11/07/2026" },
    { name: "Ana Costa", email: "ana@email.com", plan: "Pro", status: "Trial", date: "11/07/2026" },
    { name: "Pedro Lima", email: "pedro@email.com", plan: "Basic", status: "Ativo", date: "10/07/2026" },
    { name: "Lucia Martins", email: "lucia@email.com", plan: "Pro", status: "Inativo", date: "09/07/2026" },
  ];

  const quickActions = [
    { label: "Adicionar Receita", icon: "🍽️", href: "#" },
    { label: "Criar Notificação", icon: "🔔", href: "#" },
    { label: "Exportar Relatório", icon: "📊", href: "#" },
    { label: "Gerenciar E-book", icon: "📖", href: "#" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "var(--sidebar-bg)",
          borderBottom: "1px solid var(--sidebar-border)",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              🥑
            </div>
            <div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Cetose Consciente
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                Painel Admin
              </span>
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {["Dashboard", "Usuários", "Conteúdo", "Analytics", "Configurações"].map(
            (item, index) => (
              <a
                key={item}
                href="#"
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: index === 0 ? "white" : "var(--text-muted)",
                  background: index === 0 ? "var(--primary)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🔔
          </button>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            A
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "32px 24px", maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        {/* Page Header */}
        <div style={{ marginBottom: "32px", animation: "fadeIn 0.4s ease" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 800,
              margin: "0 0 8px",
              background: "linear-gradient(135deg, #f0f0f5, var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Visão Geral
          </h1>
          <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "14px" }}>
            Bem-vindo ao painel de administração · Sábado, 12 de julho de 2026
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="hover-lift"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "24px",
                animation: `fadeIn 0.4s ease ${index * 0.08}s both`,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow de fundo */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "var(--primary-glow)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "13px", margin: "0 0 8px", fontWeight: 500 }}>
                    {stat.label}
                  </p>
                  <p style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px", color: "#f0f0f5" }}>
                    {stat.value}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: stat.positive ? "var(--success)" : "var(--danger)",
                        background: stat.positive
                          ? "rgba(16, 185, 129, 0.1)"
                          : "rgba(239, 68, 68, 0.1)",
                        padding: "2px 8px",
                        borderRadius: "20px",
                      }}
                    >
                      {stat.change}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{stat.description}</span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(108, 99, 255, 0.08)",
                    borderRadius: "12px",
                    border: "1px solid rgba(108, 99, 255, 0.15)",
                  }}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Recent Users Table */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "16px",
              overflow: "hidden",
              animation: "fadeIn 0.4s ease 0.3s both",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--card-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#f0f0f5" }}>
                  Usuários Recentes
                </h2>
                <p style={{ margin: "2px 0 0", fontSize: "13px", color: "var(--text-muted)" }}>
                  Últimos cadastros na plataforma
                </p>
              </div>
              <button
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "transparent",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-muted)",
                  fontSize: "12px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Ver todos →
              </button>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.02)" }}>
                    {["Usuário", "Plano", "Status", "Data"].map((col) => (
                      <th
                        key={col}
                        style={{
                          padding: "12px 24px",
                          textAlign: "left",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          borderBottom: "1px solid var(--card-border)",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user, index) => (
                    <tr
                      key={user.email}
                      style={{
                        borderBottom: index < recentUsers.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        transition: "background 0.15s ease",
                        cursor: "pointer",
                      }}
                    >
                      <td style={{ padding: "16px 24px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              background: `linear-gradient(135deg, hsl(${index * 60}, 70%, 60%), hsl(${index * 60 + 60}, 70%, 50%))`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "13px",
                              fontWeight: 700,
                              color: "white",
                              flexShrink: 0,
                            }}
                          >
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p style={{ margin: 0, fontSize: "14px", fontWeight: 500, color: "#f0f0f5" }}>
                              {user.name}
                            </p>
                            <p style={{ margin: 0, fontSize: "12px", color: "var(--text-muted)" }}>
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            padding: "3px 10px",
                            borderRadius: "20px",
                            background: user.plan === "Pro"
                              ? "rgba(108, 99, 255, 0.15)"
                              : "rgba(107, 114, 128, 0.15)",
                            color: user.plan === "Pro" ? "var(--primary)" : "var(--text-muted)",
                          }}
                        >
                          {user.plan}
                        </span>
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background:
                                user.status === "Ativo"
                                  ? "var(--success)"
                                  : user.status === "Trial"
                                  ? "var(--warning)"
                                  : "var(--danger)",
                            }}
                          />
                          <span
                            style={{
                              fontSize: "13px",
                              color:
                                user.status === "Ativo"
                                  ? "var(--success)"
                                  : user.status === "Trial"
                                  ? "var(--warning)"
                                  : "var(--danger)",
                              fontWeight: 500,
                            }}
                          >
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{user.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Quick Actions */}
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "20px",
                animation: "fadeIn 0.4s ease 0.35s both",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: "#f0f0f5" }}>
                Ações Rápidas
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="hover-lift"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{action.icon}</span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "#e0e0ea" }}>
                      {action.label}
                    </span>
                    <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "12px" }}>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "20px",
                animation: "fadeIn 0.4s ease 0.4s both",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: "#f0f0f5" }}>
                Status do Sistema
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "API Backend", status: "Operacional", ok: true },
                  { label: "Supabase DB", status: "Operacional", ok: true },
                  { label: "CDN Assets", status: "Operacional", ok: true },
                  { label: "IA (OpenAI)", status: "Degradado", ok: false },
                ].map((service) => (
                  <div
                    key={service.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{service.label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: service.ok ? "var(--success)" : "var(--warning)",
                          boxShadow: service.ok
                            ? "0 0 6px var(--success)"
                            : "0 0 6px var(--warning)",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: service.ok ? "var(--success)" : "var(--warning)",
                        }}
                      >
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "16px 24px",
          borderTop: "1px solid var(--sidebar-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © 2026 Cetose Consciente · Admin v1.0
        </span>
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          Ambiente: <span style={{ color: "var(--warning)" }}>Desenvolvimento</span>
        </span>
      </footer>
    </div>
  );
}
