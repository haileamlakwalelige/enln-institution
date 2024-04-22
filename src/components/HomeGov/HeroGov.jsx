import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import govhome from '../../assets/new3.jpg';

function HeroGov() {
  return (
    <div>
      <div
        className="justify-left relative hidden min-h-[80vh] items-center justify-center lg:flex"
        style={{ backgroundImage: `url(${govhome})`, backgroundSize: "cover" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-tl from-primary to-transparent opacity-100 "
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-100 "
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="absolute z-10 ml-16 w-2/3  text-white">
          <h1 className=" mb-10 hidden border-l-8 border-primary pl-5 text-5xl font-bold text-white lg:block">
            Empowering Leaders, Transforming Communities <br />
          </h1>
          <p className="mb-3 mt-3 text-justify text-xl text-white">
            Harness the strength of collaboration and align yourself with a
            network deeply committed to the cultivation of healthier
            communities.
          </p>

          {/* Call to action button */}
          <div className="absolute mx-auto mt-16  w-1/4 space-x-2">
            <Link to="/governmentform">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-outline btn-primary hidden bg-white lg:flex lg:items-center"
              >
                Contact Sales
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto   lg:hidden ">
        <div
          className="relative min-h-[50vh]  w-full items-center justify-center  bg-cover"
          style={{
            backgroundImage: 'url("/new3.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-tl from-primary to-transparent opacity-100 "
            style={{ mixBlendMode: "multiply" }}
          ></div>
          <div
            className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-100 "
            style={{ mixBlendMode: "multiply" }}
          ></div>{" "}
        </div>

        <div className=" mx-auto w-11/12">
          <h1 className="orgphoneherotext font-bold text-white ">
            Empowering Leaders, Transforming Communities
            <br />
          </h1>

          {/* Hero description */}
          <p className="heroinnertext mb-3 mt-3 text-justify text-white ">
            Harness the strength of collaboration and align yourself with a
            network deeply committed to the cultivation of healthier
            communities.
          </p>

          {/* Call to action button */}
          <div className=" w-full  space-x-2 ">
            <Link to="/governmentform">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="buttontext  btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto"
              >
                Contact Sales
              </motion.a>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroGov;
