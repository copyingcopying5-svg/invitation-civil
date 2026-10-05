import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import invitationImage from "../assets/img_3.jpg";

function InvitationMessage() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const fetchGuest = async () => {
      const params = new URLSearchParams(window.location.search);
      const guestId = params.get("guest");

      if (!guestId) return;

      const { data, error } = await supabase
        .from("guests")
        .select("nom")
        .eq("guest_id", guestId)
        .single();

      if (error) {
        console.error("Erreur récupération invité :", error);
        return;
      }

      setGuestName(data.nom);
    };

    fetchGuest();
  }, []);

  return (
    <section
      id="invitation"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={invitationImage}
            alt="Vous êtes invité(e)"
            className="
              w-full
              h-auto
              rounded-[24px]
              object-cover
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
            "
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mt-14 md:mt-20"
        >

          {/* Nom de l'invité */}
          {guestName && (
            <div className="mb-10">
              <p className="
                font-['Poppins']
                text-[13px]
                md:text-[15px]
                tracking-[0.2em]
                uppercase
                text-[#A38D87]
                mb-3
              ">
                Vous êtes invité(e)
              </p>

              <h3 className="
                font-['Cormorant_Garamond']
                text-[28px]
                md:text-[38px]
                font-semibold
                text-[#8F7771]
              ">
                {guestName}
              </h3>

              <div className="w-16 h-[1px] bg-[#A38D87] mx-auto mt-5" />
            </div>
          )}

          <p
            className="
              font-['Poppins']
              text-[16px]
              md:text-[18px]
              leading-[2]
              text-[#777]
              font-light
            "
          >
            C'est avec une immense joie que nous vous invitons à
            partager avec nous le bonheur de notre union.
          </p>

          <p
            className="
              font-['Poppins']
              text-[16px]
              md:text-[18px]
              leading-[2]
              text-[#777]
              font-light
              mt-6
            "
          >
            Venez vivre à nos côtés ces précieux instants de joie,
            d'amour et de célébration.
          </p>

        </motion.div>
      </div>
    </section>
  );
}

export default InvitationMessage;
