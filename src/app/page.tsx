import {PromptForm} from "@/app/PromptForm";
import {prisma} from "@/db";
import {RunPrompt} from "@/app/OpenAI";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Text Prompt Input</h1>
      <PromptForm onSubmit={handlePromptSubmit} />
    </div>
  )
}

// @ts-ignore
BigInt.prototype.toJSON = function() {
  return this.toString()
}

async function handlePromptSubmit(text: string): Promise<{ error?: string, result: string }> {
  'use server'
  // const tasks = await prisma.todoItem.findMany();
  // return {result: tasks.map((task: TodoItem) => task.title).join(', ')};
  const sqlQueryText = await RunPrompt(text);
  let result: object | undefined;
  if (sqlQueryText) {
    result = await prisma.$queryRawUnsafe(sqlQueryText)
  }
  return {result: result ? JSON.stringify(result, null, 2) : 'No result'};
}
