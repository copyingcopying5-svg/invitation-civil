import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import background from "../assets/invitation-arriere.jpg";

function InvitationIntro({ guestName = "Jean-Pierre", onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    // Lance la musique
    onOpen();
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[100]
            overflow-hidden
            flex
            items-center
            justify-center
            bg-[#4b0808]
          "
        >

          {/* ============================= */}
          {/* ARRIÈRE-PLAN */}
          {/* ============================= */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: `url(${background})`,
            }}
          />

          {/* Voile léger pour améliorer la lisibilité */}
          <div
            className="
              absolute
              inset-0
              bg-[#fff8e9]/10
              pointer-events-none
            "
          />

          {/* ============================= */}
          {/* CADRE EXTÉRIEUR */}
          {/* ============================= */}

          <div
            className="
              absolute
              inset-3
              sm:inset-5
              md:inset-8
              border
              border-[#d8ad5a]/70
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              inset-5
              sm:inset-7
              md:inset-11
              border
              border-[#d8ad5a]/35
              pointer-events-none
            "
          />

          {/* ============================= */}
          {/* ORNEMENTS COINS */}
          {/* ============================= */}

          {/* Haut gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              absolute
              top-7
              left-7
              md:top-12
              md:left-12
              text-[#d8ad5a]
              text-4xl
              md:text-6xl
              pointer-events-none
              rotate-[-20deg]
            "
          >
            ❦
          </motion.div>

          {/* Haut droit */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="
              absolute
              top-7
              right-7
              md:top-12
              md:right-12
              text-[#d8ad5a]
              text-4xl
              md:text-6xl
              pointer-events-none
              rotate-[20deg]
            "
          >
            ❦
          </motion.div>

          {/* Bas gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
              absolute
              bottom-7
              left-7
              md:bottom-12
              md:left-12
              text-[#d8ad5a]
              text-4xl
              md:text-6xl
              pointer-events-none
              rotate-[20deg]
            "
          >
            ❦
          </motion.div>

          {/* Bas droit */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="
              absolute
              bottom-7
              right-7
              md:bottom-12
              md:right-12
              text-[#d8ad5a]
              text-4xl
              md:text-6xl
              pointer-events-none
              rotate-[-20deg]
            "
          >
            ❦
          </motion.div>

          {/* ============================= */}
          {/* PETITES ÉTOILES */}
          {/* ============================= */}

          <div className="absolute top-[22%] left-[15%] text-[#d8ad5a] text-xs">
            ✦
          </div>

          <div className="absolute top-[30%] right-[14%] text-[#d8ad5a] text-sm">
            ✦
          </div>

          <div className="absolute bottom-[25%] left-[13%] text-[#d8ad5a] text-sm">
            ✦
          </div>

          <div className="absolute bottom-[19%] right-[16%] text-[#d8ad5a] text-xs">
            ✦
          </div>

          {/* ============================= */}
          {/* CONTENU PRINCIPAL */}
          {/* ============================= */}

          <div
            className="
              relative
              z-10
              w-full
              max-w-3xl
              px-8
              sm:px-10
              text-center
            "
          >

            {/* INTRODUCTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="
                font-['Poppins']
                text-[#75421f]
                uppercase
                tracking-[5px]
                text-[9px]
                sm:text-[10px]
                md:text-xs
                mb-5
              "
            >
              Une invitation particulière
            </motion.p>

            {/* ORNEMENT */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                flex
                items-center
                justify-center
                gap-3
                mb-6
              "
            >
              <div className="w-10 sm:w-16 md:w-24 h-[1px] bg-[#b88635]" />

              <span className="text-[#b88635] text-xl">
                ❦
              </span>

              <div className="w-10 sm:w-16 md:w-24 h-[1px] bg-[#b88635]" />
            </motion.div>

            {/* ============================= */}
            {/* NOMS */}
            {/* ============================= */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="
                font-['Cormorant_Garamond']
                text-5xl
                sm:text-6xl
                md:text-8xl
                font-semibold
                text-[#641414]
                leading-[0.85]
                tracking-wide
              "
            >
              JEDIDIA
            </motion.h1>

            {/* & */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="
                font-serif
                italic
                text-[#b88635]
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-none
                my-2
              "
            >
              &
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="
                font-['Cormorant_Garamond']
                text-5xl
                sm:text-6xl
                md:text-8xl
                font-semibold
                text-[#641414]
                leading-[0.85]
                tracking-wide
              "
            >
              DEFI
            </motion.h1>

            {/* ============================= */}
            {/* DATE */}
            {/* ============================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="mt-7"
            >
              <p
                className="
                  font-['Poppins']
                  text-[#6e351d]
                  uppercase
                  tracking-[3px]
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  mb-2
                "
              >
                S'unissent ce vendredi
              </p>

              <p
                className="
                  font-['Cormorant_Garamond']
                  italic
                  text-[#9a632c]
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                "
              >
                23 Octobre 2026
              </p>
            </motion.div>

            {/* ============================= */}
            {/* SÉPARATEUR */}
            {/* ============================= */}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="
                flex
                items-center
                justify-center
                gap-3
                mt-6
                mb-7
              "
            >
              <div className="w-12 md:w-20 h-[1px] bg-[#b88635]" />

              <span className="text-[#b88635] text-lg">
                ❦
              </span>

              <div className="w-12 md:w-20 h-[1px] bg-[#b88635]" />
            </motion.div>

            {/* ============================= */}
            {/* BOUTON */}
            {/* ============================= */}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              onClick={handleOpen}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-4
                bg-[#720d0d]
                text-[#fff8e9]
                px-9
                sm:px-12
                md:px-14
                py-4
                sm:py-5
                rounded-full
                border
                border-[#c89b43]
                shadow-[0_8px_25px_rgba(92,15,15,0.25)]
                hover:shadow-[0_12px_35px_rgba(92,15,15,0.35)]
                transition-all
                duration-300
                font-['Poppins']
                text-xs
                sm:text-sm
                md:text-base
                tracking-[1px]
              "
            >
              <span className="font-semibold">
                Ouvrir l'invitation
              </span>

              <span
                className="
                  text-lg
                  md:text-xl
                  group-hover:translate-x-1
                  transition-transform
                  duration-300
                "
              >
                →
              </span>
            </motion.button>

            {/* ============================= */}
            {/* PETITE PHRASE */}
            {/* ============================= */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="
                font-['Poppins']
                text-[8px]
                sm:text-[9px]
                md:text-[10px]
                text-[#805a3c]
                mt-5
                tracking-[2px]
                uppercase
              "
            >
              Une journée d'amour, de joie et de partage
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InvitationIntro;