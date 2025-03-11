export default function Footer() {
    return (        
    <footer className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">Yuri Suheishi</h2>
            <p className="text-gray-400 mt-2">Criando aplicações performáticas e escalaveis.</p>
          </div>
          
          <div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contato</h3>
            <p className="text-gray-400 mt-2">yuri.suhet@gmail.com</p>
            <p className="text-gray-400">+55 (11) 95224-7250</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © 2025 Yuri Suheishi. Todos os direitos reservados.
        </div>
      </footer>        
    );
  }