import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ScanGuest() {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadGuest = async () => {
      const params = new URLSearchParams(window.location.search);
      const guestId = params.get("scan");

      if (!guestId) {
        setError("Invitation invalide.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("guests")
        .select("guest_id, nom, table")
        .eq("guest_id", guestId)
        .single();

      if (error) {
        console.error("Erreur Supabase :", error);
        setError("Invité introuvable.");
        setLoading(false);
        return;
      }

      setGuest(data);
      setLoading(false);
    };

    loadGuest();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Vérification de l'invitation...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black mb-4">
            Invitation introuvable
          </h1>

          <p className="text-gray-500">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">

        <h1 className="text-4xl md:text-6xl font-bold text-black mb-10">
          {guest.nom}
        </h1>

        <div className="w-24 h-[2px] bg-black mx-auto mb-10" />

        <p className="text-2xl md:text-4xl font-bold text-black">
          Table {guest.table}
        </p>

      </div>
    </main>
  );
}

export default ScanGuest;