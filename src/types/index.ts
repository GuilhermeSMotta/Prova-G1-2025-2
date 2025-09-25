export interface Tarefa {
    id: string;
    text: string;
    isDone: boolean;
    isFavorite: boolean;
}

export type TarefaItem = Tarefa;