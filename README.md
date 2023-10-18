This is a standard Next.js + Prisma + TailwindCSS + TypeScript project setup, which I used to connect with OpenAI and experiment with making Q&A on top of the existing Relational database.

[![Video](https://img.youtube.com/vi/KcFaj2jNLuo/maxresdefault.jpg)](https://www.youtube.com/watch?v=KcFaj2jNLuo)

## Getting Started

Don't forget to install packages first before running the development server 🙌

```bash
# Install packages
npm i
```

First, we must ensure we have Prisma generated and the DB file created. By default, this project uses SQLite for the simplicity of setup in the development process. You can change the DB to Postgres or MySQL by following the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors).

```bash
npx prisma db push
npx prisma generate client
```

Secondly, we have to ensure we have an OpenAI API key. You can get one by signing up on [OpenAI](https://openai.com/). After that, we can create a `.env` file and put the API key in there.

```bash
# .env

OPENAI_API_KEY=<YOUR_API_KEY>
```

Lastly, we can run the development server.

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
