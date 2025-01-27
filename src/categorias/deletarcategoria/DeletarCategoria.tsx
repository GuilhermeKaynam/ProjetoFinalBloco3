import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../models/Categoria";
import { buscar, deletar } from "../../services/Service";
import { FaTrashAlt } from "react-icons/fa"; // Ícone de excluir

function DeletarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {});
    } catch (error: any) {
      alert("Erro ao buscar a categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    if (!id) {
      alert("ID inválido para deletar a categoria.");
      return;
    }

    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {});
      alert("Categoria apagada com sucesso");
    } catch (error: any) {
      console.error(error);
      alert("Erro ao deletar a categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  if (!categoria.descricao) {
    return (
      <p className="text-center text-lg font-semibold text-gray-700">
        Categoria não encontrada.
      </p>
    );
  }

  return (
    <div className="container w-1/2 mx-auto py-12 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-xl">
      <h1 className="text-4xl text-center font-semibold text-indigo-800 mb-6">
        Deletar Categoria
      </h1>
      <p className="text-center font-semibold mb-6 text-gray-700">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="py-4 px-6 bg-red-600 text-white font-semibold text-xl rounded-t-lg flex items-center justify-between">
          <div className="flex items-center">
            <FaTrashAlt className="mr-2 text-2xl" />
            <span>Categoria</span>
          </div>
        </header>
        <p className="p-8 text-2xl text-center text-gray-800 bg-slate-50">
          {categoria.descricao}
        </p>
        <div className="flex gap-4 p-6">
          <button
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 flex items-center justify-center py-3 rounded-lg shadow-md transition-all duration-300"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white flex items-center justify-center py-3 rounded-lg shadow-md transition-all duration-300"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
