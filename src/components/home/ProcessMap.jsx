import { Images } from "../../assets/images";
import { motion } from "framer-motion";

const ProcessMap = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-[65px] text-white px-4">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <motion.div
          className="max-w-[584px] flex flex-col items-center lg:items-start text-center lg:text-start"
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
        <h3 className="text-lg font-semibold lg:text-2xl md:text-xl font-montserrat">
  Soluciones Personalizadas para tu Negocio
</h3>
<p className="mt-3 mb-10 text-base font-source-sans lg:text-xl md:text-lg">
  Desarrollamos sitios web y aplicaciones adaptadas a las necesidades específicas de tu empresa. ¡Habla con nosotros y encuentra la solución perfecta para tu negocio!
</p>
<a
  href="https://wa.me/5555984595745"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    type="button"
    className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap md:text-base text-sm px-5 font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
  >
    Contáctanos por WhatsApp
  </button>
</a>

        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <img src={Images.process_map} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessMap;
