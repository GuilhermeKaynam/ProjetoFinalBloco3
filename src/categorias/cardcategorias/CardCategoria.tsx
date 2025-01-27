import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-2 border-gray-300 flex flex-col rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-white to-blue-100">
      <header className="py-4 px-6 bg-blue-500 text-white font-semibold text-2xl text-center rounded-t-xl shadow-md">
        Categoria
      </header>
      <p className="p-8 text-xl bg-blue-50 text-blue-800 h-full">
        {categoria.descricao}
      </p>

      <div className="flex space-x-4 p-4">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full bg-blue-400 hover:bg-blue-600 text-white flex items-center justify-center py-3 rounded-lg shadow-md transition-all duration-300"
        >
          <FaEdit className="mr-2 text-lg" />
          <button className="font-semibold">Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full bg-red-400 hover:bg-red-600 text-white flex items-center justify-center py-3 rounded-lg shadow-md transition-all duration-300"
        >
          <FaTrashAlt className="mr-2 text-lg" />
          <button className="font-semibold">Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
