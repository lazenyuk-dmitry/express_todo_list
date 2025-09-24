# Boilerplate Node.js + Express + Typescript

Starting boilerplate for Node.js server.

## What is used

- Node.js + Express
- TypeScript
- MongoDB
- Mongoose ODM
- Prettier
- ESLint
- ts-node-dev - for develop

## Scripts

```bash
  npm run dev
  npm run build
  npm run start
  npm run typecheck
  npm run lint
  npm run lint:fix
```

## Structure

```bash
/
├─ 📂 dist/
│ └─ ...
├─ 📂 src/
│ ├─ 📂 config/
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
DATABASE_URL="mongodb+srv://<db_user>:<db_password>@<cluster>.ush1nq9.mongodb.net/?retryWrites=true&w=majority&appName=<cluster>"
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
