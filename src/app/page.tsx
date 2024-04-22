"use client";

import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch gap-3">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Srivatsav&apos;s GPT
      </h1>

      {messages.length > 0
        ? messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-4">
              <b>{m.role === "user" ? "User: " : "AI: "}</b>
              {m.content}
            </div>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <Input
          className="fixed max-w-md bottom-0 mb-8"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
