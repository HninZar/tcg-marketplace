import { PokemonCard } from "./Card";

export interface Cart {
    id: number;
    card: PokemonCard,
    qty: number
}