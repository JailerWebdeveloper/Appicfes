import { Link } from "react-router-dom";

const MenuDefault = () => {
  return (
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">Preparate para el Futuro con <br/><span class="text-blue-600 flex items-center gap-2"><img src="./Logoit.png" alt="Logo" className="w-12"/>Icfes Tracer</span></h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>

          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link to="pruebas" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Realizar Pruebas
              <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </Link>
            <Link to="/Menu/Perfil" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
              Mis Notas
            </Link>
          </div>
        </div>

        <div class="relative ms-4">
          <img class="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Image Description" />
          <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuDefault;
