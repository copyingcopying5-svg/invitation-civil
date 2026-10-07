import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaTshirt,
  FaImages,
} from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: "Accueil",
      target: "accueil",
      icon: <FaHome />,
    },
    {
      label: "Notre invitation",
      target: "invitation",
      icon: <FaEnvelopeOpenText />,
    },
    {
      label: "La date",
      target: "calendrier",
      icon: <FaCalendarAlt />,
    },
    {
      label: "Adresses",
      target: "adresses",
      icon: <FaMapMarkerAlt />,
    },
    {
      label: "Dress Code",
      target: "dress-code",
      icon: <FaTshirt />,
    },
    {
      label: "Votre invitation",
      target: "qr-code",
      icon: <FaEnvelopeOpenText />,
    },
    {
      label: "Galerie",
      target: "galerie",
      icon: <FaImages />,
    },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
      {/* =========================
          BOUTON MENU
      ========================== */}

      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          top-5
          right-5
          z-40
          w-12
          h-12
          rounded-full
          bg-white
          text-[#C8A54D]
          shadow-lg
          flex
          items-center
          justify-center
          hover:scale-105
          transition
        "
        aria-label="Ouvrir le menu"
      >
        <FaBars />
      </button>


      {/* =========================
          MENU
      ========================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* FOND */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
              "
            />


            {/* PANNEAU */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                fixed
                top-0
                right-0
                bottom-0
                z-50
                w-[85%]
                max-w-sm
                bg-[#FAF8F5]
                shadow-2xl
                px-7
                py-8
                overflow-y-auto
              "
            >

              {/* =========================
                  HEADER
              ========================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-10
                "
              >

                <div>

                  <p
                    className="
                      text-[#C8A54D]
                      uppercase
                      tracking-[3px]
                      text-xs
                    "
                  >
                    Navigation
                  </p>

                  <h2 className="text-2xl mt-1">
                    Notre mariage
                  </h2>

                </div>


                {/* BOUTON FERMER */}

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-gray-600
                    shadow-sm
                  "
                  aria-label="Fermer le menu"
                >
                  <FaTimes />
                </button>

              </div>


              {/* =========================
                  LIENS
              ========================== */}

              <nav className="space-y-2">

                {links.map((link, index) => (

                  <motion.button
                    key={link.target}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => scrollToSection(link.target)}
                    className="
                      w-full
                      flex
                      items-center
                      gap-4
                      px-4
                      py-4
                      rounded-xl
                      text-left
                      text-gray-700
                      hover:bg-white
                      hover:text-[#C8A54D]
                      transition
                    "
                  >

                    {/* ICÔNE */}

                    <span
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-[#C8A54D]
                        shrink-0
                      "
                    >
                      {link.icon}
                    </span>


                    {/* TEXTE */}

                    <span>
                      {link.label}
                    </span>

                  </motion.button>

                ))}

              </nav>


              {/* =========================
                  BAS DU MENU
              ========================== */}

              <div
                className="
                  mt-10
                  pt-7
                  border-t
                  border-gray-200
                  text-center
                "
              >

                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Avec amour
                </p>

                <p
                  className="
                    text-[#C8A54D]
                    mt-1
                    italic
                  "
                >
                  Les futurs mariés
                </p>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;