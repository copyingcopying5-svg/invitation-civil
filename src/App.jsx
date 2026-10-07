import { useEffect, useRef, useState } from "react";

import { supabase } from "./lib/supabase";

import Navigation from "./components/Navigation";
import InvitationIntro from "./components/InvitationIntro";
import Hero from "./components/Hero";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Calendar from "./components/Calendar";
import InvitationMessage from "./components/InvitationMessage";
import Addresses from "./components/Addresses";
import QRCodeSection from "./components/QRCodeSection";
import ScanGuest from "./components/ScanGuest";

function App() {
  // --------------------------------------------------
  // ÉTAT DE L'INVITATION
  // --------------------------------------------------

  const [invitationOpened, setInvitationOpened] = useState(false);

  // --------------------------------------------------
  // MUSIQUE
  // --------------------------------------------------

  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // --------------------------------------------------
  // NOM DE L'INVITÉ
  // --------------------------------------------------

  const [guestName, setGuestName] = useState("Jed-et-Defi");

  // --------------------------------------------------
  // RÉCUPÉRATION DES PARAMÈTRES DE L'URL
  // --------------------------------------------------

  const params = new URLSearchParams(window.location.search);

  const scanGuest = params.get("scan");
  const guestId = params.get("guest");

  // --------------------------------------------------
  // RÉCUPÉRATION DU NOM DE L'INVITÉ
  // --------------------------------------------------

  useEffect(() => {
    const loadGuestName = async () => {
      // Si aucun invité n'est indiqué dans l'URL,
      // on garde le nom par défaut.
      if (!guestId) return;

      const { data, error } = await supabase
        .from("guests")
        .select("nom")
        .eq("guest_id", guestId)
        .single();

      if (error) {
        console.error(
          "Erreur lors de la récupération du nom de l'invité :",
          error
        );
        return;
      }

      if (data?.nom) {
        setGuestName(data.nom);
      }
    };

    loadGuestName();
  }, [guestId]);

  // --------------------------------------------------
  // DÉMARRER LA MUSIQUE
  // --------------------------------------------------

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.volume = 0.5;

      await audio.play();

      setIsMusicPlaying(true);
    } catch (error) {
      console.log(
        "Impossible de démarrer la musique."
      );
    }
  };

  // --------------------------------------------------
  // OUVERTURE DE L'INVITATION
  // --------------------------------------------------

  const handleOpenInvitation = async () => {
    // Le clic de l'utilisateur autorise la musique
    await startMusic();

    // Afficher l'invitation
    setInvitationOpened(true);
  };

  // --------------------------------------------------
  // PAGE APRÈS SCAN DU QR CODE
  // --------------------------------------------------
  //
  // IMPORTANT :
  // Tous les Hooks sont déjà déclarés avant ce return.
  //

  if (scanGuest) {
    return <ScanGuest />;
  }

  // --------------------------------------------------
  // PAGE NORMALE DE L'INVITATION
  // --------------------------------------------------

  return (
    <>
      {/* ==========================================
          MUSIQUE
      ========================================== */}

      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* ==========================================
          INTRODUCTION
      ========================================== */}

      {!invitationOpened && (
        <InvitationIntro
          guestName={guestName}
          onOpen={handleOpenInvitation}
        />
      )}

      {/* ==========================================
          CONTENU DE L'INVITATION
      ========================================== */}

      {invitationOpened && (
        <>
          <Navigation />

          {/* ========================================
              BOUTON MUSIQUE
          ======================================== */}

          <button
            onClick={async () => {
              const audio = audioRef.current;

              if (!audio) return;

              if (isMusicPlaying) {
                audio.pause();

                setIsMusicPlaying(false);
              } else {
                try {
                  await audio.play();

                  setIsMusicPlaying(true);
                } catch (error) {
                  console.log(
                    "Impossible de relancer la musique."
                  );
                }
              }
            }}
            className="
              fixed
              bottom-6
              right-6
              z-50
              w-12
              h-12
              rounded-full
              bg-white/90
              backdrop-blur-sm
              shadow-lg
              flex
              items-center
              justify-center
              text-gray-700
              hover:scale-105
              transition-transform
            "
            aria-label={
              isMusicPlaying
                ? "Couper la musique"
                : "Activer la musique"
            }
          >
            {isMusicPlaying ? "🔊" : "🔇"}
          </button>

          {/* ========================================
              SECTIONS
          ======================================== */}

          <main>
            <Hero />

            <InvitationMessage />

            <Calendar />


            <Addresses />

            <Event />

            <QRCodeSection />

            <Gallery />
          </main>
        </>
      )}
    </>
  );
}

export default App;