import { COLLECTIVE_DELIVERY_DATA } from "../../data/mockData";
import { motion } from "framer-motion";

const CollectiveDelivery = () => {
  return (
    <section className="max-w-[1180px] mx-auto lg:py-[65px] py-10 text-white px-4">
      <div className="text-center">
      <p className="mb-4 text-base font-montserrat lg:text-xl md:text-lg">
  Detrás de Cada Entrega Excepcional
</p>
<h3 className="text-xl font-semibold lg:text-3xl md:text-2xl font-montserrat">
  El Equipo de Entrega Colectiva
</h3>

      </div>
      <div className="lg:mt-[90px] md:mt-16 mt-12 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-[70px] md:gap-y-16 gap-y-12 lg:gap-x-[100px] md:gap-x-16 gap-x-12">
        {COLLECTIVE_DELIVERY_DATA?.map(({ id, title, icon, description }) => {
          return (
            <motion.div
              key={id}
              className="flex-col items-center justify-center text-center d-flex"
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <img src={icon} className="w-[82px] h-[82px] mx-auto" alt="" />
              <h4 className="mt-4 mb-2 text-base font-semibold font-montserrat lg:mt-10 md:mt-6 lg:mb-4 lg:text-xl md:text-lg">
                {title}
              </h4>
              <p className="text-sm lg:text-base font-source-sans">
                {description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CollectiveDelivery;
