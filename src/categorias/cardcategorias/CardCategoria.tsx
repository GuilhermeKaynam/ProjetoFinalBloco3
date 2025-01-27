import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-2 border-blue-300 flex flex-col rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-blue-50 to-cyan-100">
      <header className="py-4 px-6 bg-blue-600 text-white font-bold text-2xl text-center">
        Categoria
      </header>
      <p className="p-8 text-2xl bg-cyan-200 text-blue-900 h-full">
        {categoria.descricao}
      </p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-blue-500 hover:bg-blue-700 flex items-center justify-center py-3 transition-all"
        >
          <button className="font-bold">Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center py-3 transition-all"
        >
          <button className="font-bold">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
