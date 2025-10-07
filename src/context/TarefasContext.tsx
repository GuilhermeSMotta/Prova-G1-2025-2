import { createContext, useContext, useState, type ReactNode } from "react";
import type { TarefaItem } from "../types";

interface TarefasContextType {
  tarefas: TarefaItem[];
  addTarefa: (text: string) => void;
  toggleDone: (id: string) => void;
  toggleFavorite: (id: string) => void;
  favoritos: string[];
}

const TarefasContext = createContext<TarefasContextType | undefined>(undefined);

export const TarefasProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<TarefaItem[]>([]);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  function addTarefa(text: string) {
    setTarefas(prev => [
      ...prev,
      { id: Date.now().toString(), text, isDone: false, isFavorite: false }
    ]);
  }

  function toggleDone(id: string) {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  }

  function toggleFavorite(id: string) {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isFavorite: !t.isFavorite } : t
      )
    );
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(fid => fid !== id)
        : [...prev, id]
    );
  }

  return (
    <TarefasContext.Provider value={{ tarefas, addTarefa, toggleDone, toggleFavorite, favoritos }}>
      {children}
    </TarefasContext.Provider>
  );
};

export function useTarefas() {
  const ctx = useContext(TarefasContext);
  if (!ctx) throw new Error("useTarefas deve ser usado dentro de TarefasProvider");
  return ctx;
}