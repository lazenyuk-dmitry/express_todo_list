# Boilerplate Node.js + Express + Typescript + PostgreSQL

Starting boilerplate for Node.js server.

## What is used

- Node.js + Express
- TypeScript
- PostgreSQL
- Prisma ORM
- Prettier
- ESLint
- ts-node-dev - for develop

## Scripts

```bash
  npm run dev
  npm run build
  npm run start
  npm run typecheck
  npm run migrate
  npm run migrate:dev
  npm run migrate:deploy
  npm run migrate:reset
  npm run db:generate
  npm run lint
  npm run lint:fix
```

## Structure

```bash
/
├─ 📂 dist/
│ └─ ...
├─ 📂 prisma/
│ └─ 📄 schema.prisma
├─ 📂 src/
│ ├─ 📂 config/
│ │ └─ 📄 db.ts
│ ├─ 📄 app.ts
│ ├─ 📄 router.ts
│ └─ 📄 server.ts # entry point
├─ 📂 types/
│ └─ 📄 env.d.ts
├─ 📄 .env
├─ 📄 .gitignore
├─ 📄 .prettierrc
├─ 📄 eslint.config.ts
├─ 📄 package-lock.json
├─ 📄 package.json
├─ 📄 README.md
└─ 📄 tsconfig.json
```

## To usage boilerplate

Click `Use this template` at the top of the page.

## Launch

**1.** Install dependencies:

```bash
npm install
```

**2.** Create basic `.env` file:

```env
DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"
PORT=4000
```

**3.** Apply migrations:

  ```bash
  npm run migrate:dev|deploy|reset
  ```

**4.** Start for develop:

```bash
npm run dev
```

**5.** Start for production:

```bash
npm run build
npm start
```
