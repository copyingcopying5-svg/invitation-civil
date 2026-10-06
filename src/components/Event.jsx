import { motion } from "framer-motion";

function Event() {
  return (
    <section
      id="dress-code"
      className="py-24 px-6 bg-[#F8EDEF]"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* TITRE */}

          <h2
            className="
              text-5xl
              md:text-6xl
              font-serif
              text-black
              mb-8
            "
          >
            Dress Code
          </h2>

          {/* PETITE LIGNE DÉCORATIVE */}

          <div
            className="
              w-48
              h-[2px]
              mx-auto
              mb-10
              bg-gradient-to-r
              from-[#f3b6b6]
              via-[#e8c77a]
              to-[#f3b6b6]
            "
          />

          {/* COULEURS DU DRESS CODE */}

          <div className="flex items-center justify-center gap-5 md:gap-7">

            {/* Couleur 1 */}
            <div
              className="
                w-16
                h-16
                md:w-20
                md:h-20
                rounded-full
                bg-[#5A4742]
                border-2
                border-white
                shadow-md
              "
            />

            {/* Couleur 2 */}
            <div
              className="
                w-16
                h-16
                md:w-20
                md:h-20
                rounded-full
                bg-[#A36E66]
                border-2
                border-white
                shadow-md
              "
            />

            {/* Couleur 3 */}
            <div
              className="
                w-16
                h-16
                md:w-20
                md:h-20
                rounded-full
                bg-[#C45D2C]
                border-2
                border-white
                shadow-md
              "
            />

            {/* Couleur 4 */}
            <div
              className="
                w-16
                h-16
                md:w-20
                md:h-20
                rounded-full
                bg-[#E8782F]
                border-2
                border-white
                shadow-md
              "
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Event;