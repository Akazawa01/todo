import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { todo } from "node:test";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Home() {
  // const todos = ["Reactを学ぶ", "TypeScriptを学ぶ", "Viteを学ぶ"];
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>TODO APP</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <input className="block w-full" placeholder="内容を追加" onChange={
              (e) => setTodo(e.target.value)}
              value={todo}
            />
          <Button className="w-full" 
          onClick={() => {
            setTodos([...todos, todo]);
            // setTodos(todos) ※駄目パターン
            setTodo("");
          }}>追加</Button>
          </div>
          <ul className="mt-4">
            {todos.map((todo, index) => (
              <div className="flex">
                <li>{todo}</li>
                <button 
                  className="ml-3" 
                  onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index));
                  }}
                >
                  <MdDelete className="h-3 w-3" color="red" />
                </button>
              </div>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
