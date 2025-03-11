export default function Footer() {
    return (        
    <footer className="bg-footer-bg text-white py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-footer-title text-xl font-bold">Yuri Suheishi</h2>
            <p className="text-footer-text mt-2">Criando aplicações performáticas e escalaveis.</p>
          </div>
          
          <div>
          </div>
          
          <div>
            <h3 className="text-footer-title text-lg font-semibold">Contato</h3>
            <p className="text-footer-text mt-2">yuri.suhet@gmail.com</p>
            <p className="text-footer-text">+55 (11) 95224-7250</p>
          </div>
        </div>
        <div className="border-t border-gray-dash mt-8 pt-4 text-center text-footer-subtext">
          © 2025 Yuri Suheishi. Todos os direitos reservados.
        </div>
      </footer>        
    );
  }