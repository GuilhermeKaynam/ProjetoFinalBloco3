import Produtos from "./Produtos";

export default interface Categoria {
  id: number;
  nomeCategoria: string;
  descricao: string;
  produtos: Produtos | null;
}
