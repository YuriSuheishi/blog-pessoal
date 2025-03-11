export default function Home() {
    return (
      <div className="flex-1 w-full flex flex-col p-3 px-5 gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Bem vindo a blog page!</h2>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <h2 className="font-bold text-2xl mb-4 max-w-5xl">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.&quot;
          </h2>        
        </div>
      </div>
    );
  }
  