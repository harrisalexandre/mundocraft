# 🌟 Mundocraft

> **Transformando mundos digitais em experiências reais, com tecnologia de ponta e arquitetura escalável.**

---

## 💡 Sobre o projeto

O **Mundocraft** é uma plataforma moderna e robusta para gestão e interação em servidores de Minecraft, desenvolvida com foco em **performance**, **segurança**, **usabilidade** e **experiência do desenvolvedor (DX)**.

Com uma stack fullstack moderna, o projeto foi planejado para ser rápido, modular e altamente escalável, refletindo práticas avançadas de engenharia de software.

---

## 🚀 Tecnologias utilizadas

### 💻 **Frontend**

- ⚛️ **React 18** — Criação de interfaces declarativas, reativas e componentizadas.
- ⚡ **Vite** — Bundler moderno, build instantâneo, excelente DX.
- 💬 **TypeScript** — Tipagem estática, maior segurança e previsibilidade.
- 🎨 **Tailwind CSS** — Estilo utilitário, ágil e responsivo.
- 🌀 **Radix UI** — Componentes acessíveis, consistentes e personalizáveis.
- 🌐 **React Router Dom** — Gerenciamento intuitivo de rotas com suporte a basename para deploy em GitHub Pages.
- ✨ **Framer Motion** — Animações fluidas e interativas.
- 🔒 **CryptoJS** — Criptografia client-side para dados sensíveis temporários.

### ⚙️ **Backend**

- 🟢 **Node.js + Express** — API leve, modular e extensível.
- 🍃 **MongoDB (Atlas)** — Banco NoSQL, altamente escalável e flexível.
- 🔐 **bcryptjs** — Hash seguro para senhas, garantindo segurança dos usuários.
- 🌍 **Mongoose** — Modelagem de dados poderosa e intuitiva.

---

## 🏗️ Arquitetura do projeto

```plaintext
/mundocraft
├── /client       ← Frontend (React + Vite)
├── /server       ← Backend (Node.js + Express + MongoDB)
├── .gitignore
├── README.md
└── package.json
```

---

## 🔒 Preocupações de segurança

- Criptografia de senhas com **bcrypt** no backend.
- Prevenção de acesso não autorizado via validações robustas.
- Validação e sanitização dos dados enviados via API.
- Hashing e criptografia de campos sensíveis (e-mails, senhas).

---

## ⚡ Performance e boas práticas

- Carregamento rápido graças ao Vite.
- Componentização e renderização otimizada com React.
- Lazy loading de rotas e recursos pesados.
- Animações suaves e acessíveis (Framer Motion).
- Responsividade total (mobile, tablet e desktop).
- Código limpo, padronizado com **ESLint** e **Prettier**.

---

## 🗺️ Rotas principais

| Rota        | Página       | Descrição                     |
| ----------- | ------------ | ----------------------------- |
| `/`         | Home         | Página inicial e vitrine.     |
| `/about`    | Sobre        | Informações do projeto.       |
| `/connect`  | Conectar     | Como se conectar ao servidor. |
| `/gallery`  | Galeria      | Imagens e artes do mundo.     |
| `/stats`    | Estatísticas | Métricas e dados do servidor. |
| `/register` | Cadastro     | Registro em etapas avançado.  |
| `/login`    | Login        | Acesso seguro de usuários.    |
| `/profile`  | Perfil       | Dashboard pessoal do jogador. |

---

## 💻 Ambiente de desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar frontend (client)
cd client
npm install
npm run dev

# Iniciar backend (server)
cd ../server
npm install
npm run dev
```

- **Frontend:** Vite rodando por padrão em `http://localhost:5173`.
- **Backend:** Express rodando em `http://localhost:5000`.

---

## 🚀 Deploy e produção

- **Frontend**: Deploy via GitHub Pages (branch `gh-pages`) já configurado com `basename`.
- **Backend**: MongoDB Atlas (cloud) e API Express.

### 🌐 Link em produção

> [**Acessar Mundocraft**](https://harrisalexandre.github.io/mundocraft/)

---

## ✅ Diferenciais que se destacam

- Projeto fullstack real, incluindo API e persistência.
- Segurança robusta (hash de senha, validações).
- Componentização e design system unificado (Radix + Tailwind).
- Arquitetura modular, fácil de evoluir.
- Pensado para análise automática (IA, code scanning, CI/CD).
- Automação de builds e deploys via GitHub Actions.
- Experiência de usuário fluida e intuitiva.
- Documentação clara para novos devs.

---

## 🤝 Contribuições e contato

Quer sugerir melhorias ou saber mais?

📧 **Email**: harrisalexandre308@gmail.com
💼 **LinkedIn**: [harrisalexandre](https://www.linkedin.com/in/harris-alexandre/)

---

### 💙 Feito com paixão, disciplina, tecnologia e muito café! ☕🚀
