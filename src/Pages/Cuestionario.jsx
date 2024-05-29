const Cuestionario = () => {
  return (
    <main className="w-full h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex justify-start badge badge-secondary ">
          <h1>Pregunta 1/100</h1>
        </div>
        <div className="flex justify-end badge badge-secondary ">
          <h1>MODULO: Inglés</h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="card w-full  shadow-xl my-8">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut
            sunt, doloribus quaerat deserunt recusandae minus obcaecati
            architecto voluptates itaque in omnis perferendis laborum! Accusamus
            neque nesciunt repudiandae sequi quae.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero my-8">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="example"
          />
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="flex justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="btn btn-lg btn-primary w-auto h-full p-3">
            A-Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </button>
          <button className="btn btn-lg btn-primary w-auto h-full p-3">
            B-Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </button>
          <button className="btn btn-lg btn-primary w-auto h-full p-3">
            C-Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </button>
          <button className="btn btn-lg btn-primary w-auto h-full p-3">
            D-Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500.
          </button>
        </div>
      </div>

      {/* Footer Section with Navigation Buttons */}
      <div className="flex justify-end items-center py-4 px-8">
        <button className="btn btn-warning mr-4">Pregunta Anterior</button>
        <button className="btn btn-success">Siguiente Pregunta</button>
      </div>
    </main>
  );
};

export default Cuestionario;
