import { useNavigate } from "react-router-dom";
import { ShoppingBag, Clock, ChevronRight, Star, Users } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
            alt="Pharmacy Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Farmácia Guilherme Kaynam
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
              Cuidando da sua saúde com excelência e compromisso. Encontre os
              melhores produtos farmacêuticos com preços competitivos.
            </p>
            <button
              onClick={() => navigate("/categorias")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Ver Categorias
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossa farmácia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma experiência completa em saúde e bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Produtos de Qualidade
              </h3>
              <p className="text-gray-600">
                Ampla variedade de medicamentos e produtos de cuidados pessoais
                das melhores marcas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Atendimento Especializado
              </h3>
              <p className="text-gray-600">
                Equipe de farmacêuticos qualificados para melhor atender suas
                necessidades.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Entrega Rápida</h3>
              <p className="text-gray-600">
                Receba seus produtos no conforto da sua casa com rapidez e
                segurança.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Excelente atendimento e produtos de qualidade. Sempre encontro o que preciso!",
                rating: 5,
              },
              {
                name: "João Santos",
                text: "Entrega rápida e preços competitivos. Recomendo fortemente!",
                rating: 5,
              },
              {
                name: "Ana Oliveira",
                text: "Farmacêuticos muito atenciosos e prestativos. Ótima experiência!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-medium text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
