'use server'

import OpenAI from 'openai';
import * as fs from "fs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function RunPrompt(text: string) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content:
          `I have a Prisma.js Schema that you can read below:
${fs.readFileSync('./prisma/schema.prisma', 'utf8')}
` },
      { role: 'user', content: `Write an SQL Query that will satisfy question: ${text}

Respond only with an SQL Query that will satisfy the question.` },
    ],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message.content;
}

