import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QRCode from "qrcode";
import jsPDF from "jspdf";

import { supabase } from "../lib/supabase";
import invitationModel from "../assets/invitation-model.jpg";

function QRCodeSection() {
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [generatingPdf, setGeneratingPdf] = useState(false);

  useEffect(() => {
    const loadGuest = async () => {
      try {
        // Récupère ?guest=UUID
        const params = new URLSearchParams(window.location.search);
        const guestId = params.get("guest");

        if (!guestId) {
          setErrorMessage(
            "Aucun invité n'a été identifié dans ce lien."
          );
          setLoading(false);
          return;
        }

        // Recherche de l'invité dans Supabase
        const { data, error } = await supabase
          .from("guests")
          .select("guest_id, nom, table")
          .eq("guest_id", guestId)
          .single();

        if (error) {
          console.error("Erreur Supabase :", error);

          setErrorMessage(
            "Impossible de récupérer les informations de votre invitation."
          );

          setLoading(false);
          return;
        }

        setGuest(data);
      } catch (error) {
        console.error(error);

        setErrorMessage(
          "Une erreur est survenue lors du chargement de votre invitation."
        );
      } finally {
        setLoading(false);
      }
    };

    loadGuest();
  }, []);

  // --------------------------------------------------
  // GÉNÉRATION DU PDF
  // --------------------------------------------------

  const downloadPDF = async () => {
    if (!guest) return;

    try {
      setGeneratingPdf(true);

      // --------------------------------------------------
      // URL QUI SERA ENCODÉE DANS LE QR CODE
      // --------------------------------------------------

      const scanUrl = `${window.location.origin}/?scan=${guest.guest_id}`;

      // --------------------------------------------------
      // GÉNÉRATION DU QR CODE
      // --------------------------------------------------

      const qrDataUrl = await QRCode.toDataURL(scanUrl, {
        width: 800,
        margin: 1,
        errorCorrectionLevel: "H",
      });

      // --------------------------------------------------
      // CHARGEMENT DE L'IMAGE COMPLÈTE DE L'INVITATION
      // --------------------------------------------------

      const invitationImage = new Image();

      invitationImage.src = invitationModel;

      await new Promise((resolve, reject) => {
        invitationImage.onload = resolve;
        invitationImage.onerror = reject;
      });

      // --------------------------------------------------
      // DIMENSIONS DU PDF
      // --------------------------------------------------

      const imageWidth = invitationImage.naturalWidth;
      const imageHeight = invitationImage.naturalHeight;

      const pdfWidth = 297;

      const pdfHeight =
        (imageHeight / imageWidth) * pdfWidth;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });

      // --------------------------------------------------
      // IMAGE COMPLÈTE EN FOND
      // --------------------------------------------------

      pdf.addImage(
        invitationImage,
        "JPEG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      // --------------------------------------------------
      // POSITION DU NOM DE L'INVITÉ
      // --------------------------------------------------

      const nameBox = {
        x: pdfWidth * 0.742,
        y: pdfHeight * 0.155,
        width: pdfWidth * 0.16,
        height: pdfHeight * 0.065,
      };

      // Fond discret pour masquer
      // "Mr/Mme/Couple"
      pdf.setFillColor(250, 248, 245);

      pdf.roundedRect(
        nameBox.x,
        nameBox.y,
        nameBox.width,
        nameBox.height,
        2,
        2,
        "F"
      );

      // --------------------------------------------------
      // NOM DE L'INVITÉ
      // --------------------------------------------------

      pdf.setTextColor(50, 50, 50);
      pdf.setFont("times", "bold");
      pdf.setFontSize(14);

      pdf.text(
        guest.nom,
        nameBox.x + nameBox.width / 2,
        nameBox.y + nameBox.height / 2 + 2,
        {
          align: "center",
          maxWidth: nameBox.width - 4,
        }
      );

      // --------------------------------------------------
      // QR CODE
      // --------------------------------------------------

      const qrSize = pdfWidth * 0.095;

      const qrX = pdfWidth * 0.846;
      const qrY = pdfHeight * 0.725;

      // Petit fond pour couvrir l'ancien QR
      pdf.setFillColor(250, 248, 245);

      pdf.roundedRect(
        qrX - 2,
        qrY - 2,
        qrSize + 4,
        qrSize + 4,
        2,
        2,
        "F"
      );

      // Nouveau QR personnalisé
      pdf.addImage(
        qrDataUrl,
        "PNG",
        qrX,
        qrY,
        qrSize,
        qrSize
      );

      // --------------------------------------------------
      // NOM DU FICHIER
      // --------------------------------------------------

      const safeName = guest.nom
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      pdf.save(`Invitation-${safeName}.pdf`);

    } catch (error) {
      console.error("Erreur génération PDF :", error);

      alert(
        "Impossible de générer le PDF. Veuillez réessayer."
      );
    } finally {
      setGeneratingPdf(false);
    }
  };

  // --------------------------------------------------
  // CHARGEMENT
  // --------------------------------------------------

  if (loading) {
    return (
      <section
        id="qr-code"
        className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] px-6"
      >
        <p className="text-gray-500">
          Chargement de votre invitation...
        </p>
      </section>
    );
  }

  // --------------------------------------------------
  // ERREUR
  // --------------------------------------------------

  if (errorMessage) {
    return (
      <section
        id="qr-code"
        className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] px-6"
      >
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Invitation introuvable
          </h2>

          <p className="text-gray-500">
            {errorMessage}
          </p>
        </div>
      </section>
    );
  }

  // --------------------------------------------------
  // AFFICHAGE
  // --------------------------------------------------

  return (
    <section
      id="qr-code"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="max-w-xl mx-auto text-center">

        {/* TITRE */}

        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
          Votre invitation
        </h2>

        <div className="w-24 h-[1px] bg-[#A38D87] mx-auto mb-8" />

        {/* MESSAGE */}

        <p className="text-gray-600 mb-8">
          Bienvenue{" "}
          <span className="font-semibold text-gray-800">
            {guest.nom}
          </span>
          .
        </p>

        {/* INFORMATIONS */}

        <div className="mb-8">
          <p className="text-xl text-gray-400 mt-5">
            Téléchargez votre invitation PDF pour l'avoir toujours à portée de main.
          </p>
        </div>

        {/* BOUTON PDF */}

        <button
          onClick={downloadPDF}
          disabled={generatingPdf}
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            px-7
            py-4
            rounded-full
            bg-[#8F7771]
            text-white
            font-medium
            shadow-lg
            transition
            duration-300
            hover:bg-[#735E59]
            hover:scale-[1.02]
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {generatingPdf ? (
            <>
              Génération du PDF...
            </>
          ) : (
            <>
              Télécharger mon invitation PDF
            </>
          )}
        </button>

      </div>
    </section>
  );
}

export default QRCodeSection;