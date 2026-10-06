import { motion } from "framer-motion";
import { FaChurch, FaMapMarkerAlt } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

function Addresses() {
  return (
    <section
      id="adresses"
      className="
        relative
        overflow-hidden
        bg-[#FAF8F5]
        px-6
        py-20
        md:py-28
      "
    >
      {/* Décor léger à gauche */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          w-32
          h-64
          opacity-20
          bg-gradient-to-br
          from-[#D8D2C7]
          via-transparent
          to-transparent
          rounded-br-full
        "
      />

      {/* Décor léger à droite */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          w-40
          h-72
          opacity-20
          bg-gradient-to-tl
          from-[#D8D2C7]
          via-transparent
          to-transparent
          rounded-tl-full
        "
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">

        {/* ========================= */}
        {/* BÉNÉDICTION NUPTIALE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Localisation */}
          <div className="mt-7">
            <FaMapMarkerAlt
              className="
                mx-auto
                text-red-600
                text-4xl
              "
            />

            <h3
              className="
                font-['Cormorant_Garamond']
                text-3xl
                md:text-4xl
                font-semibold
                uppercase
                text-[#111111]
                mt-1
              "
            >
              L.C JARDIN DU BONHEUR
            </h3>

            <p
              className="
                font-['Poppins']
                text-sm
                md:text-base
                uppercase
                leading-7
                text-[#333333]
                mt-1
              "
            >
              33B Avenue Rubi coin Ilunga Mpafu
              <br />
              Golf Météo 
              <br />
              REF : Arret Bus Cabine allant vers Météo
            </p>

            <p
              className="
                font-['Poppins']
                text-2xl
                md:text-3xl
                font-bold
                text-[#111111]
                mt-4
              "
            >
              12H30
            </p>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* ESPACE ENTRE LES BLOCS */}
        {/* ========================= */}

        <div className="h-20 md:h-24" />

        {/* ========================= */}
        {/* PROGRAMME DU MARIAGE CIVIL */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4"
        >
          {/* TITRE */}

          <h2
            className="
              font-['Cormorant_Garamond']
              text-4xl
              md:text-5xl
              font-semibold
              uppercase
              text-[#111111]
              leading-none
            "
          >
            Programme
          </h2>

          <p
            className="
              font-['Allura']
              text-4xl
              md:text-5xl
              text-[#8F7771]
              -mt-1
            "
          >
            du mariage civil
          </p>

          {/* PETITE DÉCORATION */}

          <div className="flex items-center justify-center gap-3 my-7">
            <div className="w-16 h-[1px] bg-[#A98B76]" />

            <span className="text-[#A98B76] text-xl">
              ♥
            </span>

            <div className="w-16 h-[1px] bg-[#A98B76]" />
          </div>

          {/* ========================= */}
          {/* 12H30 */}
          {/* ========================= */}

          <div
            className="
              flex
              items-center
              w-full
              min-h-[82px]
              rounded-full
              border-2
              border-[#A98B76]
              bg-[#F5F2EE]
              overflow-hidden
              mb-5
            "
          >
            {/* HEURE */}

            <div
              className="
                flex
                items-center
                justify-center
                shrink-0
                w-[90px]
                h-[70px]
                ml-1
                rounded-full
                bg-[#A98B76]
                text-white
                font-['Cormorant_Garamond']
                text-xl
                md:text-2xl
                font-semibold
              "
            >
              12H30
            </div>

            {/* TEXTE */}

            <div
              className="
                text-left
                px-2
                md:px-4
                min-w-0
              "
            >
              <p
                className="
                  font-['Cormorant_Garamond']
                  text-base
                  md:text-lg
                  font-bold
                  uppercase
                  leading-tight
                  text-[#111111]
                "
              >
                DÉBUT DE LA CÉRÉMONIE CIVIL :
              </p>

              <p
                className="
                  font-['Poppins']
                  text-[11px]
                  md:text-xs
                  text-[#333333]
                  mt-1
                "
              >
                Entrée des mariés
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* 12H45 */}
          {/* ========================= */}

          <div
            className="
              flex
              items-center
              w-full
              min-h-[82px]
              rounded-full
              border-2
              border-[#A98B76]
              bg-[#F5F2EE]
              overflow-hidden
              mb-5
            "
          >
            {/* HEURE */}

            <div
              className="
                flex
                items-center
                justify-center
                shrink-0
                w-[90px]
                h-[70px]
                ml-1
                rounded-full
                bg-[#A98B76]
                text-white
                font-['Cormorant_Garamond']
                text-xl
                md:text-2xl
                font-semibold
              "
            >
              12H45
            </div>

            {/* TEXTE */}

            <div
              className="
                text-left
                px-2
                md:px-4
                min-w-0
              "
            >
              <p
                className="
                  font-['Cormorant_Garamond']
                  text-base
                  md:text-lg
                  font-bold
                  uppercase
                  leading-tight
                  text-[#111111]
                "
              >
                ARRIVÉE DE L'OFFICIER DE L'ETAT CIVIL (
                BOURGMESTRE)
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* 13H45 */}
          {/* ========================= */}

          <div
            className="
              flex
              items-center
              w-full
              min-h-[82px]
              rounded-full
              border-2
              border-[#A98B76]
              bg-[#F5F2EE]
              overflow-hidden
              mb-5
            "
          >
            {/* HEURE */}

            <div
              className="
                flex
                items-center
                justify-center
                shrink-0
                w-[90px]
                h-[70px]
                ml-1
                rounded-full
                bg-[#A98B76]
                text-white
                font-['Cormorant_Garamond']
                text-xl
                md:text-2xl
                font-semibold
              "
            >
              13H45
            </div>

            {/* TEXTE */}

            <div
              className="
                text-left
                px-2
                md:px-4
                min-w-0
              "
            >
              <p
                className="
                  font-['Cormorant_Garamond']
                  text-base
                  md:text-lg
                  font-bold
                  uppercase
                  leading-tight
                  text-[#111111]
                "
              >
                FIN DE LA CÉRÉMONIE CIVIL :
              </p>

              <p
                className="
                  font-['Poppins']
                  text-[11px]
                  md:text-xs
                  text-[#333333]
                  mt-1
                  leading-tight
                "
              >
                Sortie de l'officier de l'Etat civil
                (bourgmestre)
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* 14H00 */}
          {/* ========================= */}

          <div
            className="
              flex
              items-center
              w-full
              min-h-[82px]
              rounded-full
              border-2
              border-[#A98B76]
              bg-[#F5F2EE]
              overflow-hidden
            "
          >
            {/* HEURE */}

            <div
              className="
                flex
                items-center
                justify-center
                shrink-0
                w-[90px]
                h-[70px]
                ml-1
                rounded-full
                bg-[#A98B76]
                text-white
                font-['Cormorant_Garamond']
                text-xl
                md:text-2xl
                font-semibold
              "
            >
              14H00
            </div>

            {/* TEXTE */}

            <div
              className="
                text-left
                px-2
                md:px-4
                min-w-0
              "
            >
              <p
                className="
                  font-['Cormorant_Garamond']
                  text-base
                  md:text-lg
                  font-bold
                  uppercase
                  leading-tight
                  text-[#111111]
                "
              >
                COCKTAIL & SÉANCE PHOTO
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Addresses;