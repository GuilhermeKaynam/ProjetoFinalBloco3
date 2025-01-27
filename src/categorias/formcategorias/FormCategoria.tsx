import { ChangeEvent, useEffect, useState } from "react";
import { atualizar, buscar, cadastrar } from "../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {});
    } catch (error: any) {
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {});
        alert("A categoria foi atualizada com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar categoria.");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {});
        alert("A categoria foi cadastrada com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto p-6 bg-gradient-to-b from-blue-200 to-blue-500 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-white text-center my-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="w-full max-w-md flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeCategoria" className="text-white font-semibold">
            Nome
          </label>
          <input
            type="text"
            placeholder="Descreva aqui o nome da categoria"
            name="nomeCategoria"
            value={categoria.nomeCategoria || ""}
            onChange={atualizarEstado}
            className="border-2 border-blue-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-white font-semibold">
            Descrição
          </label>
          <input
            type="text"
            placeholder="Descreva aqui a categoria do produto"
            name="descricao"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
            className="border-2 border-blue-600 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
          />
        </div>
        <button
          className="rounded bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 w-full transition-all"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Processando..." : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
