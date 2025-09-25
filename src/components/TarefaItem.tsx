import type { Tarefa } from "../types";

interface TarefaItemProps {
  tarefa: Tarefa;
  toggleTarefa: (id: string) => void;
}

export default function tarefaItem({ tarefa, toggleTarefa }: TarefaItemProps) {
  return (
    <li
      onClick={() => toggleTarefa(tarefa.id)}
      className={tarefa.isDone ? "completed" : ""}
    >
      {tarefa.text}
    </li>
  );
}
