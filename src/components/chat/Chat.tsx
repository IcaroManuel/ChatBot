'use client'
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "../ui/scroll-area";

export type ChatProps = {} 

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })
  return(
  <div>
    <Card className="w-[440px] grid  bg-slate-950 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-200">Chat AI</CardTitle>
          <CardDescription className="text-slate-300">Using Versel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="">
          <ScrollArea className="h-[550px] w-full space-y-4 p-2">
          { messages.map( message => {
            return (
              <div className="flex gap-2 text-slate-500 text-sm" key={message.id}>
                {
                message.role === 'user' && 
                <Avatar>
                <AvatarFallback>IM</AvatarFallback>
                <AvatarImage src="https://github.com/IcaroManuel.png"/>
                </Avatar>
              }

                {message.role === 'assistant' && 
                <Avatar>
                <AvatarFallback>IA</AvatarFallback>
                <AvatarImage src="https://blogs.perficient.com/files/openai-avatar.png"/>
                </Avatar>
              }
              
              <p className="leading-relaxed text-slate-300">
                <span className="block font-bold text-slate-200">
                  {message.role === 'user' ? 'User' : 'AI'}
                </span>
                {message.content}
                </p>
            </div>
            )
          })}
          </ScrollArea>
        </CardContent>
        <CardFooter >
          <form className="gap-3 flex w-full" onSubmit={handleSubmit}>
          <Input placeholder="How can i help you??" className="bg-slate-900 border-slate-800 text-slate-300" value={input} onChange={handleInputChange}/>
          <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
  </div>
  );
}
