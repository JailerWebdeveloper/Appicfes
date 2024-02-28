import { Fragment } from "react";

const Navbar = () => {
    return (
    <Fragment>
        <nav className="w-full absolute top-0 z-10 bg-transparent px-10 py-5 flex items-center justify-end">
            <div className=" flex justify-end">
                <img src="./unnamed.png" alt="Logo icfes" className="w-full h-20 object-contain btn btn-ghost"/>
            </div>

        </nav>
    </Fragment>
      );
}
 
export default Navbar;