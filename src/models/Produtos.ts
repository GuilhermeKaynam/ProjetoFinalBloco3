import Categoria from "./Categoria";

export default interface Produtos {
  id: number;
  nome: string;
  marca: string;
  preço: string;
  quantidade: number;
  categoria: Categoria | null;
}
