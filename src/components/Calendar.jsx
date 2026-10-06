import { motion } from "framer-motion";

function Calendar() {
  const days = [
    "",
    "",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  return (
    <section
      id="calendrier"
      className="bg-[#F8EDEF] px-6 py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Mois */}
          <h2
            className="
              text-center
              font-['Cormorant_Garamond']
              text-5xl
              md:text-6xl
              font-medium
              text-[#9A6847]
              mb-12
            "
          >
            Octobre 2026
          </h2>

          {/* Jours */}
          <div
            className="
              grid
              grid-cols-7
              text-center
              mb-5
            "
          >
            {[
              "LUN",
              "MAR",
              "MER",
              "JEU",
              "VEN",
              "SAM",
              "DIM",
            ].map((day) => (
              <div
                key={day}
                className="
                  font-['Poppins']
                  text-sm
                  md:text-base
                  font-medium
                  text-[#222]
                  tracking-wide
                "
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div
            className="
              grid
              grid-cols-7
              gap-y-4
              md:gap-y-6
              text-center
            "
          >
            {days.map((day, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                  h-12
                  md:h-16
                "
              >
                {day === "23" ? (
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      md:w-16
                      md:h-16
                      rounded-full
                      bg-[#B98245]
                      text-white
                      font-['Poppins']
                      text-lg
                      md:text-xl
                      font-medium
                      shadow-[0_5px_15px_rgba(185,130,69,0.25)]
                    "
                  >
                    23
                  </span>
                ) : (
                  <span
                    className="
                      font-['Poppins']
                      text-base
                      md:text-lg
                      text-[#222]
                    "
                  >
                    {day}
                  </span>
                )}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Calendar;