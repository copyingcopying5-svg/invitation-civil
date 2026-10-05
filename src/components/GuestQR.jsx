import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function GuestQR() {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadGuest = async () => {
      try {
        // Récupère l'ID depuis l'URL
        const guestId = window.location.pathname.split("/").pop();

        if (!guestId) {
          setErrorMessage("Invité introuvable.");
          setLoading(false);
          return;
        }

        // Recherche l'invité dans Supabase
        const { data, error } = await supabase
          .from("guests")
          .select("guest_id, nom, table")
          .eq("guest_id", guestId)
          .single();

        if (error) {
          console.error(error);
          setErrorMessage("Invité introuvable.");
          setLoading(false);
          return;
        }

        setGuest(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue.");
      } finally {
        setLoading(false);
      }
    };

    loadGuest();
  }, []);

  // Chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-black text-xl">
          Chargement...
        </p>
      </div>
    );
  }

  // Erreur
  if (errorMessage) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <p className="text-black text-2xl text-center">
          {errorMessage}
        </p>
      </div>
    );
  }

  // Affichage après scan
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">

      {/* Nom */}
      <p className="text-black text-2xl md:text-3xl tracking-[0.3em] uppercase mb-8">
        INVITÉ
      </p>

      <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-bold uppercase break-words max-w-6xl">
        {guest.nom}
      </h1>

      {/* Table */}
      <div className="mt-16">
        <p className="text-black text-2xl md:text-3xl tracking-[0.3em] uppercase mb-4">
          TABLE
        </p>

        <p className="text-black text-7xl md:text-9xl font-bold">
          {guest.table}
        </p>
      </div>

    </main>
  );
}

export default GuestQR;