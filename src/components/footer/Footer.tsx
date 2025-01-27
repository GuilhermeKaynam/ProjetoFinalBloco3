import { Phone, Mail, MapPin, Instagram, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Farmácia comprometida com sua saúde e bem-estar, oferecendo
              produtos de qualidade e atendimento especializado há mais de 20
              anos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                (11) 1234-5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                farmacia@guilhermekaynam.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                Rua Example, 123 - São Paulo
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Horário de Funcionamento
            </h3>
            <div className="space-y-2">
              <p>Segunda a Sexta: 8h às 20h</p>
              <p>Sábado: 8h às 18h</p>
              <p>Domingo: 8h às 12h</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/GuilhermeKaynam"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/guikaynam/"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-kaynam"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Farmácia Guilherme Kaynam. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
