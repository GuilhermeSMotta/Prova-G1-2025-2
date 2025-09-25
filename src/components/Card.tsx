import React from "react";
import type { DataItem } from "../types";
import './Card.css';

interface CardProps {
    item: DataItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const favorito = item.isFavorite;
    const done = item.isDone

    const handleToggleFavorito = () => {
        item.isFavorite = item.isFavorite!;
    }

    const handleToggleDone = () => {
        item.isDone = item.isDone!;
    }

    return (
        <div className="card">
            <>
                <h3>{item.text} (Tarefa)</h3>
                <button onClick={handleToggleDone}>
                    {done ? 'Marcar como feito' : 'Desmarcar como feito'}
                </button>
            </>
            <button onClick={handleToggleFavorito}>
                {favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        </div>
    )
}

export default Card;