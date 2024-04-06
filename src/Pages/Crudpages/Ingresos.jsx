import {AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Ingresos = () => {
  return (
    <div className="w-full h-full md:px-4 ">
      <h1 className="text-2xl font-bold uppercase text-center border-b-2">Ingresos</h1>
      <div className="w-full bg-base flex flex-col gap-2 items-center rounded-lg h-full p-2">
        {/*Join y boton */}
        <div className=" w-full flex md:flex-row flex-col h-1/5 md:justify-between md:px-10  justify-center items-center gap-5 rounded-lg">
          <div className=" flex items-center justify-center md:order-1 order-2 gap-2">
            <Link to="/menu/NuevoPago" className="btn btn-secondary btn-xl">Nueva entrada</Link>
          </div>
          <div className="join md:order-2  order-1">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
        {/*Tabla */}

        <div className="overflow-x-auto h-[600px] overflow-y-auto bg-base w-11/12 ">
          <table className="table table-xs border h-80 overflow-y-auto w-full  ">
            <thead className="text-accent">
              <tr>
                <th></th>
                <th>Numero_Recibo</th>
                <th>Pago</th>
                <th>Metodo de pago</th>
                <th>Fecha</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>
                  Quality Control
                  sssssssssssssssssssssssssssssssssssssssssssssssssssssss Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                  ullam quas in facilis, officiis beatae fuga quia nostrum
                  numquam atque, alias animi quis nulla ut libero quibusdam
                  itaque quidem consequatur?
                </td>
                <td>Littel, Schaden and Vandervort</td>
                <td>12/16/2020</td>
                <td className=""><AiFillSetting className="btn-xs  btn btn-ghost w-auto h-2  mx-auto"/></td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>12/5/2020</td>
                <td>Purple</td>
              </tr>
              
            </tbody>
            <tfoot className="text-accent">
            <tr>
                <th></th>
                <th>Numero_Recibo</th>
                <th>Pago</th>
                <th>Metodo de pago</th>
                <th>Fecha</th>
                <th>Opciones</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ingresos;
