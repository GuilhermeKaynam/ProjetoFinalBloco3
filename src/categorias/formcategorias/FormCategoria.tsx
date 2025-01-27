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
    <div className="container flex flex-col items-center justify-center mx-auto p-8 bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-400 rounded-3xl shadow-2xl">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="w-full max-w-md flex flex-col gap-6 bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="nomeCategoria"
            className="text-indigo-800 font-semibold"
          >
            Nome
          </label>
          <input
            type="text"
            placeholder="Descreva aqui o nome da categoria"
            name="nomeCategoria"
            value={categoria.nomeCategoria || ""}
            onChange={atualizarEstado}
            className="border-2 border-indigo-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 text-gray-700 transition-all duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-indigo-800 font-semibold">
            Descrição
          </label>
          <input
            type="text"
            placeholder="Descreva aqui a categoria do produto"
            name="descricao"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
            className="border-2 border-indigo-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 text-gray-700 transition-all duration-200 ease-in-out"
          />
        </div>
        <button
          className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 w-full transition-all duration-300 ease-in-out shadow-lg"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Processando..." : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
      <button
        className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800"
        onClick={retornar}
      >
        Voltar
      </button>
    </div>
  );
}

export default FormCategoria;
