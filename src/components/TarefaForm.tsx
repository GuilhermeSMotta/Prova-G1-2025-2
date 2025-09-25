import { useState } from "react";

interface TarefaFormProps {
  addTarefa: (text: string) => void;
}

export default function TarefaForm({ addTarefa }: TarefaFormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTarefa(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded p-2 flex-1"
        placeholder="Digite uma tarefa..."
      />
      <button type="submit" className="bg-blue-500 text-white rounded px-4">
        Adicionar
      </button>
    </form>
  );
}
