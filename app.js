const PRODUCTS = [
  // PRODOTTI DONNA RIMOSSI TEMPORANEAMENTE

  // --- LINEA UOMO (PRODOTTI REALI) ---
  {
    id: "uomo-energizzante-fiale",
    slug: "fiale-energizzanti-uomo",
    name: "Fiale Energizzanti Cute",
    gender: "uomo",
    type: "trattamenti",
    tag: "Bestseller",
    price: 28,
    popularity: 1,
    line: "energizzante",
    lineLabel: "Linea energizzante",
    image: "uomo/linea energizzante /FialeEnergizzante.jpg",
    short: "Boost energizzante per cute e radici.",
    benefits: [
      "Aiuta a riattivare il microcircolo cutaneo",
      "Supporta la forza delle radici",
      "Texture leggera, non unge",
    ],
    howTo: "Applicare sulle aree interessate e massaggiare delicatamente sulla cute.",
  },
  {
    id: "uomo-energizzante-lozione",
    slug: "lozione-energizzante-uomo",
    name: "Lozione Energizzante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Bestseller",
    price: 24,
    popularity: 2,
    line: "energizzante",
    lineLabel: "Linea energizzante",
    image: "uomo/linea energizzante /LozioneEnergizzante.jpg",
    short: "Supporto quotidiano per cute e lunghezze.",
    benefits: [
      "Rinfresca e tonifica la cute",
      "Lascia i capelli leggeri",
      "Uso frequente",
    ],
    howTo: "Nebulizzare sulla cute pulita e massaggiare con movimenti circolari.",
  },
  {
    id: "uomo-energizzante-shampoo",
    slug: "shampessenza-energizzante-uomo",
    name: "Shampessenza Energizzante",
    gender: "uomo",
    type: "shampoo",
    tag: "Bestseller",
    price: 19,
    popularity: 3,
    line: "energizzante",
    lineLabel: "Linea energizzante",
    image: "uomo/linea energizzante /ShampessenzaEnergizzante.jpg",
    short: "Detersione energizzante per uso regolare.",
    benefits: [
      "Deterge la cute senza appesantire",
      "Dona sensazione di freschezza",
      "Ideale come base per il trattamento energizzante",
    ],
    howTo: "Applicare su capelli bagnati, massaggiare e risciacquare accuratamente.",
  },
  {
    id: "uomo-idratante-fiale",
    slug: "fiale-idratanti-uomo",
    name: "Fiale Idratanti Cute",
    gender: "uomo",
    type: "trattamenti",
    tag: "Novità",
    price: 28,
    popularity: 4,
    line: "idratante",
    lineLabel: "Linea idratante",
    image: "uomo/linea idratante /Physia oe_ Fiala Idratante_render.jpg",
    short: "Idratazione mirata per cute secca.",
    benefits: [
      "Aiuta a ridurre la sensazione di secchezza",
      "Cute più morbida e confortevole",
      "Uso periodico o a cicli",
    ],
    howTo: "Applicare sulla cute pulita e massaggiare fino ad assorbimento.",
  },
  {
    id: "uomo-idratante-shampoo",
    slug: "shampessenza-idratante-uomo",
    name: "Shampessenza Idratante",
    gender: "uomo",
    type: "shampoo",
    tag: "Novità",
    price: 19,
    popularity: 5,
    line: "idratante",
    lineLabel: "Linea idratante",
    image: "uomo/linea idratante /Physia oe_ Shampessenza Idratante_render.jpg",
    short: "Detersione delicata per cute sensibile.",
    benefits: [
      "Rispetta il film idrolipidico",
      "Lascia i capelli morbidi",
      "Formula lenitiva",
    ],
    howTo: "Massaggiare su cute e capelli umidi, lasciare agire un istante e risciacquare.",
  },
  // --- LINEA PHYSIA MAN ---
  {
    id: "uomo-physia-man-shampoo-doccia-250",
    slug: "physia-man-shampoo-doccia-2in1-250",
    name: "Physia Man Shampoo Doccia 2in1 250ml",
    gender: "uomo",
    type: "shampoo",
    tag: "Novità",
    price: 24,
    popularity: 6,
    line: "physia-man",
    lineLabel: "Physia Man",
    image: "uomo/Linea Physia Man /0625663_physiamanshampoodoccia2in1250ml.jpg",
    short: "Detersione viso e corpo 2in1, pratica e veloce.",
    benefits: [
      "Pulisce delicatamente pelle e capelli",
      "Routine essenziale quotidiana",
      "Profumazione leggera",
    ],
    howTo: "Applicare su corpo e capelli bagnati, massaggiare e risciacquare.",
  },
  {
    id: "uomo-physia-man-shampoo-doccia-100",
    slug: "physia-man-shampoo-doccia-2in1-100",
    name: "Physia Man Shampoo Doccia 2in1 100ml",
    gender: "uomo",
    type: "shampoo",
    tag: "Novità",
    price: 14,
    popularity: 7,
    line: "physia-man",
    lineLabel: "Physia Man",
    image: "uomo/Linea Physia Man /ef655fe_physiamanshampoodoccia2in1100ml.jpg",
    short: "Formato compatto per viaggi e palestra.",
    benefits: [
      "Uso quotidiano",
      "Formulazione delicata",
      "Pratico e leggero",
    ],
    howTo: "Applicare su corpo e capelli bagnati, massaggiare e risciacquare.",
  },
  {
    id: "uomo-physia-man-crema-viso-dopobarba-75",
    slug: "physia-man-crema-viso-dopobarba-75",
    name: "Physia Man Crema Viso Dopobarba 75ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Novità",
    price: 22,
    popularity: 8,
    line: "physia-man",
    lineLabel: "Physia Man",
    image: "uomo/Linea Physia Man /c3f2eab_physiamancremavisodopobarba75ml.jpg",
    short: "Lenisce e idrata dopo la rasatura.",
    benefits: [
      "Azione lenitiva post-rasatura",
      "Pelle morbida e fresca",
      "Assorbimento rapido",
    ],
    howTo: "Applicare sul viso pulito dopo la rasatura e massaggiare.",
  },
  {
    id: "uomo-physia-man-edt-50",
    slug: "physia-man-eau-de-toilette-50",
    name: "Physia Man Eau de Toilette 50ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Novità",
    price: 29,
    popularity: 9,
    line: "physia-man",
    lineLabel: "Physia Man",
    image: "uomo/Linea Physia Man /1c7aa78_physiamaneaudetoilette50ml.jpg",
    short: "Fragranza maschile essenziale e pulita.",
    benefits: [
      "Profumo elegante e discreto",
      "Note fresche e pulite",
      "Uso quotidiano",
    ],
    howTo: "Vaporizzare su pelle pulita, evitando contatto con occhi.",
  },
  // --- LINEA PHYSIA MAN BARBER ---
  {
    id: "uomo-physia-man-barber-detergente-100",
    slug: "physia-man-barber-detergente-barba-100",
    name: "Physia Man Barber Detergente Barba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 16,
    popularity: 6,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/7646044_physiamanbarberdetergentebarba100ml.jpg",
    short: "Detersione mirata per barba pulita e morbida.",
    benefits: [
      "Pulisce senza seccare",
      "Facilita lo styling",
      "Uso regolare",
    ],
    howTo: "Applicare sulla barba umida, massaggiare e risciacquare.",
  },
  {
    id: "uomo-physia-man-barber-balsamo-100",
    slug: "physia-man-barber-balsamo-barba-100",
    name: "Physia Man Barber Balsamo Barba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 18,
    popularity: 7,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/9c840f7_physiamanbarberbalsamobarba100ml.jpg",
    short: "Ammorbidisce e disciplina la barba.",
    benefits: [
      "Barba morbida e ordinata",
      "Riduce l’effetto crespo",
      "Finish naturale",
    ],
    howTo: "Applicare sulla barba pulita, distribuire e non risciacquare.",
  },
  {
    id: "uomo-physia-man-barber-olio-30",
    slug: "physia-man-barber-olio-barba-30",
    name: "Physia Man Olio Barba 30ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 20,
    popularity: 8,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/513f589_physiamanoliobarba30ml.jpg",
    short: "Nutrimento e lucentezza controllata.",
    benefits: [
      "Nutre senza appesantire",
      "Riduce la secchezza",
      "Fragranza leggera",
    ],
    howTo: "Scaldare 2–3 gocce tra le mani e applicare sulla barba.",
  },
  {
    id: "uomo-physia-man-barber-gel-100",
    slug: "physia-man-barber-gel-barba-100",
    name: "Physia Man Barber Gel Barba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 16,
    popularity: 9,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/49e2cd7_physiamanbarbergelbarba100ml.jpg",
    short: "Definizione precisa senza residui.",
    benefits: [
      "Tenuta leggera",
      "Non appiccica",
      "Perfetto per contorni",
    ],
    howTo: "Applicare su barba pulita e modellare come desiderato.",
  },
  {
    id: "uomo-physia-man-barber-spray-dopobarba-100",
    slug: "physia-man-barber-spray-dopobarba-100",
    name: "Physia Man Barber Spray Dopobarba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 17,
    popularity: 10,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/49d5035_physiamanbarberspraydopobarba100ml.jpg",
    short: "Freschezza immediata dopo la rasatura.",
    benefits: [
      "Lenisce e rinfresca",
      "Confort immediato",
      "Pratico da applicare",
    ],
    howTo: "Nebulizzare sul viso pulito dopo la rasatura.",
  },
  // --- LINEA LENITIVA ---
  {
    id: "uomo-lenitiva-shampoo",
    slug: "shampessenza-lenitiva-uomo",
    name: "Shampessenza Lenitiva",
    gender: "uomo",
    type: "shampoo",
    tag: "Trattamento",
    price: 19,
    popularity: 15,
    line: "lenitiva",
    lineLabel: "Linea lenitiva",
    image: "uomo/linea lenitiva/Physia oe_ Shampessenza Lenitivo _ render.jpg",
    short: "Detersione delicata per cute irritata.",
    benefits: [
      "Calma gli arrossamenti",
      "Ripristina il comfort cutaneo",
      "Azione lenitiva immediata",
    ],
    howTo: "Applicare su cute umida, massaggiare delicatamente e risciacquare.",
  },
  {
    id: "uomo-lenitiva-fiale",
    slug: "fiale-lenitive-uomo",
    name: "Fiale Lenitive Cute",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 28,
    popularity: 16,
    line: "lenitiva",
    lineLabel: "Linea lenitiva",
    image: "uomo/linea lenitiva/Physia oe_ Fiala Lenitiva_ render.jpg",
    short: "Trattamento intensivo calmante.",
    benefits: [
      "Riduce prurito e rossore",
      "Protegge la cute sensibile",
      "Sollievo prolungato",
    ],
    howTo: "Applicare il contenuto di una fiala sulla cute pulita e non risciacquare.",
  },
  {
    id: "uomo-lenitiva-fluido",
    slug: "fluido-demolenitivo-uomo",
    name: "Fluido Demolenitivo",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 24,
    popularity: 17,
    line: "lenitiva",
    lineLabel: "Linea lenitiva",
    image: "uomo/linea lenitiva/Physia oe_ Fluido Demolenitivo _ render.jpg",
    short: "Fluido riequilibrante per cute stressata.",
    benefits: [
      "Normalizza il pH cutaneo",
      "Idratazione leggera",
      "Azione decongestionante",
    ],
    howTo: "Distribuire sulla cute dopo lo shampoo, lasciare agire e risciacquare.",
  },
  // --- ALTRI PRODOTTI PHYSIA MAN BARBER ---
  {
    id: "uomo-physia-man-barber-detergente-250",
    slug: "physia-man-barber-detergente-barba-250",
    name: "Physia Man Barber Detergente Barba 250ml",
    gender: "uomo",
    type: "shampoo",
    tag: "Barber",
    price: 28,
    popularity: 12,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia man barber/f1f79ec_physiamanbarberdetergentebarba250ml.jpg",
    short: "Maxi formato per una barba sempre pulita.",
    benefits: [
      "Pulisce in profondità",
      "Ideale per uso frequente",
      "Formato convenienza",
    ],
    howTo: "Applicare sulla barba umida, massaggiare e risciacquare.",
  },
  {
    id: "uomo-physia-man-barber-olio-100",
    slug: "physia-man-barber-olio-barba-100",
    name: "Physia Man Barber Olio Barba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 45,
    popularity: 13,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia Man /Physia Man Barber_Olio_100 ml.jpg",
    short: "Nutrimento intenso per barbe lunghe.",
    benefits: [
      "Lucentezza e morbidezza",
      "Protegge dalla disidratazione",
      "Formato professionale",
    ],
    howTo: "Applicare su barba umida o asciutta e distribuire uniformemente.",
  },
  {
    id: "uomo-physia-man-barber-sapone-100",
    slug: "physia-man-barber-sapone-barba-100",
    name: "Physia Man Barber Sapone Barba 100ml",
    gender: "uomo",
    type: "trattamenti",
    tag: "Barber",
    price: 22,
    popularity: 14,
    line: "physia-man-barber",
    lineLabel: "Physia Man Barber",
    image: "uomo/Linea Physia Man /Physia Man Barber_Sapone_100 ml.jpg",
    short: "Sapone da barba per rasatura tradizionale.",
    benefits: [
      "Schiuma ricca e cremosa",
      "Facilita lo scorrimento del rasoio",
      "Lascia la pelle morbida",
    ],
    howTo: "Montare con pennello e applicare sul viso prima della rasatura.",
  },
  {
    id: "uomo-idratante-sinergia",
    slug: "sinergia-idratante-uomo",
    name: "Sinergia Idratante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 26,
    popularity: 18,
    line: "idratante",
    lineLabel: "Linea idratante",
    image: "uomo/linea idratante /Physia oe_ Singergia Idratante_render.jpg",
    short: "Concentrato di oli essenziali idratanti.",
    benefits: [
      "Potenzia l'idratazione",
      "Azione nutriente profonda",
      "Ideale per cute molto secca",
    ],
    howTo: "Applicare poche gocce sulla cute o miscelare con lo shampoo.",
  },
  // --- LINEA ACIDIFICANTE ---
  {
    id: "uomo-acidificante-siero",
    slug: "siero-acido-uomo",
    name: "Siero Acido",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 24,
    popularity: 19,
    line: "acidificante",
    lineLabel: "Linea acidificante",
    image: "uomo/Linea acidificante /Physia oe_Siero Acido_render.jpg",
    short: "Riequilibrante per pH cutaneo.",
    benefits: [
      "Ripristina il pH fisiologico",
      "Chiude le squame",
      "Lucentezza immediata",
    ],
    howTo: "Applicare su lunghezze e punte dopo il trattamento.",
  },
  // --- LINEA DEFORFORANTE ---
  {
    id: "uomo-deforforante-shampoo",
    slug: "shampessenza-deforforante-uomo",
    name: "Shampessenza Deforforante",
    gender: "uomo",
    type: "shampoo",
    tag: "Trattamento",
    price: 19,
    popularity: 20,
    line: "deforforante",
    lineLabel: "Linea deforforante",
    image: "uomo/Linea deforforante/Physia oe_Shampessenza deforforante_render.jpg",
    short: "Detersione specifica anti-forfora.",
    benefits: [
      "Rimuove la forfora visibile",
      "Calma il prurito",
      "Azione purificante",
    ],
    howTo: "Massaggiare su cute umida, lasciare agire e risciacquare.",
  },
  {
    id: "uomo-deforforante-fiale",
    slug: "fiale-deforforanti-uomo",
    name: "Fiale Deforforanti",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 28,
    popularity: 21,
    line: "deforforante",
    lineLabel: "Linea deforforante",
    image: "uomo/Linea deforforante/Physia oe_Fiala deforforante_render.jpg",
    short: "Trattamento d'urto contro la forfora.",
    benefits: [
      "Riduce la desquamazione",
      "Normalizza il ricambio cellulare",
      "Sollievo immediato",
    ],
    howTo: "Applicare una fiala su cute pulita, massaggiare e non risciacquare.",
  },
  {
    id: "uomo-deforforante-emulsione",
    slug: "emulsione-pellicolare-deforforante-uomo",
    name: "Emulsione Pellicolare Deforforante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 22,
    popularity: 22,
    line: "deforforante",
    lineLabel: "Linea deforforante",
    image: "uomo/Linea deforforante/Physia oe_Emulsione Pell Deforforante_render.jpg",
    short: "Preparatore cutaneo anti-forfora.",
    benefits: [
      "Ammorbidisce le squame",
      "Facilita la rimozione della forfora",
      "Prepara la cute allo shampoo",
    ],
    howTo: "Applicare prima dello shampoo, massaggiare e risciacquare.",
  },
  {
    id: "uomo-deforforante-sinergia",
    slug: "sinergia-deforforante-uomo",
    name: "Sinergia Deforforante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 26,
    popularity: 23,
    line: "deforforante",
    lineLabel: "Linea deforforante",
    image: "uomo/Linea deforforante/Physia oe_Sinergia Deforforante_render.jpg",
    short: "Concentrato attivo purificante.",
    benefits: [
      "Potenzia l'azione anti-forfora",
      "Purifica in profondità",
      "Azione mirata",
    ],
    howTo: "Applicare poche gocce sulle zone interessate.",
  },
  // --- LINEA DETOSSINANTE ---
  {
    id: "uomo-detossinante-fiale",
    slug: "fiale-detossinanti-uomo",
    name: "Fiale Detossinanti",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 28,
    popularity: 24,
    line: "detossinante",
    lineLabel: "Linea detossinante",
    image: "uomo/Linea detossinante/Physia oe_ Fiala Detossinante _ render.jpg",
    short: "Trattamento purificante intensivo.",
    benefits: [
      "Elimina le tossine cutanee",
      "Ossigena i tessuti",
      "Migliora la vitalità del capello",
    ],
    howTo: "Applicare su cute pulita, massaggiare fino ad assorbimento.",
  },
  {
    id: "uomo-detossinante-sinergia",
    slug: "sinergia-detossinante-uomo",
    name: "Sinergia Detossinante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 26,
    popularity: 25,
    line: "detossinante",
    lineLabel: "Linea detossinante",
    image: "uomo/Linea detossinante/Physia oe_ Sinergia detossiante_render.jpg",
    short: "Concentrato detossinante essenziale.",
    benefits: [
      "Azione detox profonda",
      "Stimola il microcircolo",
      "Favorisce l'eliminazione delle impurità",
    ],
    howTo: "Applicare gocce sulla cute o miscelare con trattamenti.",
  },
  {
    id: "uomo-detossinante-lozione",
    slug: "lozione-acida-detossinante-uomo",
    name: "Lozione Acida Detossinante",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 24,
    popularity: 26,
    line: "detossinante",
    lineLabel: "Linea detossinante",
    image: "uomo/Linea detossinante/Physia oe_Lozione acida detossiante_render.jpg",
    short: "Lozione riequilibrante detox.",
    benefits: [
      "Completa la pulizia",
      "Riequilibra il pH",
      "Sensazione di freschezza",
    ],
    howTo: "Nebulizzare su cute pulita e massaggiare.",
  },
  // --- LINEA NORMALIZZANTE ---
  {
    id: "uomo-normalizzante-shampoo",
    slug: "shampessenza-normalizzante-uomo",
    name: "Shampessenza Normalizzante",
    gender: "uomo",
    type: "shampoo",
    tag: "Trattamento",
    price: 19,
    popularity: 27,
    line: "normalizzante",
    lineLabel: "Linea normalizzante",
    image: "uomo/Linea normalizzante/Physia oe_ Shampessenza Normalizzante_ render.jpg",
    short: "Detersione per cute grassa.",
    benefits: [
      "Regola la produzione di sebo",
      "Capelli puliti più a lungo",
      "Azione rinfrescante",
    ],
    howTo: "Applicare su capelli bagnati, massaggiare e risciacquare.",
  },
  {
    id: "uomo-normalizzante-fiale",
    slug: "fiale-normalizzanti-uomo",
    name: "Fiale Normalizzanti",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 28,
    popularity: 28,
    line: "normalizzante",
    lineLabel: "Linea normalizzante",
    image: "uomo/Linea normalizzante/Physia oe_ Fiala Normalizzante _ render.jpg",
    short: "Trattamento sebo-regolatore.",
    benefits: [
      "Normalizza la secrezione sebacea",
      "Riduce l'untuosità",
      "Dona volume alla radice",
    ],
    howTo: "Applicare il contenuto sulla cute pulita e non risciacquare.",
  },
  {
    id: "uomo-normalizzante-maschera-argilla",
    slug: "maschera-argilla-uomo",
    name: "Maschera Argilla",
    gender: "uomo",
    type: "trattamenti",
    tag: "Trattamento",
    price: 22,
    popularity: 29,
    line: "normalizzante",
    lineLabel: "Linea normalizzante",
    image: "uomo/Linea normalizzante/Physia oe_ Maschera argilla _ render.jpg",
    short: "Maschera purificante all'argilla.",
    benefits: [
      "Assorbe il sebo in eccesso",
      "Purifica i pori",
      "Detossina la cute",
    ],
    howTo: "Applicare su cute asciutta o umida, lasciare in posa 5-10 min e risciacquare.",
  },
  {
    id: "uomo-normalizzante-shampoo-carbone",
    slug: "shampessenza-carbone-uomo",
    name: "Shampessenza Carbone",
    gender: "uomo",
    type: "shampoo",
    tag: "Novità",
    price: 19,
    popularity: 30,
    line: "normalizzante",
    lineLabel: "Linea normalizzante",
    image: "uomo/Linea normalizzante/Physia oe_ shampessenza carbone _ render.jpg",
    short: "Shampoo detox al carbone attivo.",
    benefits: [
      "Azione assorbente impurità",
      "Contro smog e tossine",
      "Pulizia profonda",
    ],
    howTo: "Massaggiare su cute e capelli bagnati, risciacquare accuratamente.",
  },
  {
    id: "uomo-normalizzante-maschera-carbone",
    slug: "maschera-carbone-uomo",
    name: "Maschera Carbone",
    gender: "uomo",
    type: "trattamenti",
    tag: "Novità",
    price: 22,
    popularity: 31,
    line: "normalizzante",
    lineLabel: "Linea normalizzante",
    image: "uomo/Linea normalizzante/Physia oe_ maschera carbone _ render.jpg",
    short: "Trattamento intensivo al carbone.",
    benefits: [
      "Purifica intensamente",
      "Rimuove residui di styling",
      "Cute fresca e leggera",
    ],
    howTo: "Applicare dopo lo shampoo, lasciare agire qualche minuto e risciacquare.",
  },
];

const STORAGE_KEY = "ds-society-cart";
const WHATSAPP_PHONE = "393284534523";

let cartBannerNode;
let cartBannerTimeout;

function formatPrice(value) {
  return `€ ${value.toFixed(2).replace(".", ",")}`;
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function getCartItems() {
  const cart = loadCart();
  return Object.entries(cart).map(([productId, qty]) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return null;
    return { product, qty };
  }).filter(Boolean);
}

function ensureCartBanner() {
  if (cartBannerNode) return cartBannerNode;
  const banner = document.createElement("div");
  banner.className = "cart-banner";
  banner.innerHTML = `
    <div class="cart-banner-inner">
      <div class="cart-banner-text">Prodotto aggiunto al carrello</div>
      <div class="cart-banner-actions">
        <button type="button" class="cart-banner-btn-primary" data-cart-banner-cart>
          Vai al carrello
        </button>
        <button type="button" class="cart-banner-btn-secondary" data-cart-banner-continue>
          Continua gli acquisti
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  const goCart = banner.querySelector("[data-cart-banner-cart]");
  const cont = banner.querySelector("[data-cart-banner-continue]");
  if (goCart) {
    goCart.addEventListener("click", () => {
      hideCartBanner();
      window.location.href = "carrello.html";
    });
  }
  if (cont) {
    cont.addEventListener("click", () => {
      hideCartBanner();
    });
  }
  cartBannerNode = banner;
  return banner;
}

function showCartBanner() {
  const banner = ensureCartBanner();
  banner.classList.add("is-visible");
  if (cartBannerTimeout) {
    clearTimeout(cartBannerTimeout);
  }
  cartBannerTimeout = setTimeout(() => {
    hideCartBanner();
  }, 3000);
}

function hideCartBanner() {
  if (!cartBannerNode) return;
  cartBannerNode.classList.remove("is-visible");
}

function addToCart(productId, quantity) {
  const qty = quantity && quantity > 0 ? quantity : 1;
  const cart = loadCart();
  const current = cart[productId] || 0;
  cart[productId] = current + qty;
  saveCart(cart);
  updateCartBadge();
  showCartBanner();
}

function updateQuantity(productId, quantity) {
  const cart = loadCart();
  if (quantity <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = quantity;
  }
  saveCart(cart);
  updateCartBadge();
}

function clearCart() {
  saveCart({});
  updateCartBadge();
}

function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );
}

function updateCartBadge() {
  const nodes = document.querySelectorAll(".nav-cart-count");
  const count = String(getCartCount());
  nodes.forEach((node) => {
    node.textContent = count;
  });
}

function renderBestSellers() {
  const container = document.querySelector("[data-best-sellers]");
  if (!container) return;
  const best = [...PRODUCTS]
    .filter((p) => p.gender !== "donna") // Filter out women's products
    .sort((a, b) => a.popularity - b.popularity)
    .slice(0, 3);
  container.innerHTML = "";
  best.forEach((product) => {
    container.appendChild(createProductCard(product));
  });

  // Create explore container
  const exploreContainer = document.createElement("div");
  exploreContainer.style.gridColumn = "1 / -1";
  exploreContainer.style.textAlign = "center";
  exploreContainer.style.marginTop = "32px";
  
  // Create explore button
  const exploreBtn = document.createElement("a");
  exploreBtn.href = "shop-uomo.html";
  exploreBtn.className = "btn-secondary";
  exploreBtn.textContent = "Esplora Tutto";
  
  exploreContainer.appendChild(exploreBtn);
  container.appendChild(exploreContainer);
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("div");
  image.className = "product-image";
  image.innerHTML = "";
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    image.appendChild(img);
  } else {
    image.textContent = "Immagine prodotto";
  }

  const metaTop = document.createElement("div");
  metaTop.className = "product-meta-top";

  const tag = document.createElement("div");
  tag.className = "product-tag";
  tag.textContent = product.tag;

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = formatPrice(product.price);

  metaTop.appendChild(tag);
  metaTop.appendChild(price);

  const name = document.createElement("div");
  name.className = "product-name";
  name.textContent = product.name;

  const type = document.createElement("div");
  type.className = "product-type";
  const genderLabel = product.gender === "donna" ? "Donna" : "Uomo";
  if (product.lineLabel) {
    type.textContent = `${product.lineLabel} • ${genderLabel}`;
  } else {
    type.textContent = genderLabel;
  }

  const actions = document.createElement("div");
  actions.className = "product-actions";

  const addBtn = document.createElement("button");
  addBtn.className = "btn-primary";
  addBtn.setAttribute("aria-label", "Aggiungi al carrello");
  addBtn.innerHTML = `
    <svg class="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 5h2l1 9h10l1.2-6H9"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11"
        cy="19"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
      />
      <circle
        cx="17"
        cy="19"
        r="1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
      />
    </svg>
  `;
  addBtn.addEventListener("click", () => addToCart(product.id));

  const viewBtn = document.createElement("a");
  viewBtn.className = "btn-secondary";
  viewBtn.href = `prodotto.html?id=${encodeURIComponent(product.id)}`;
  viewBtn.textContent = "Dettagli";

  actions.appendChild(addBtn);
  actions.appendChild(viewBtn);

  card.appendChild(image);
  card.appendChild(metaTop);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(actions);

  return card;
}

function initShopPage(gender) {
  const grid = document.querySelector("[data-shop-grid]");
  if (!grid) return;
  const typeSelect = document.querySelector("[data-filter-type]");
  const priceSelect = document.querySelector("[data-filter-price]");
  const sortSelect = document.querySelector("[data-filter-sort]");
  const lineSelect = document.querySelector("[data-filter-line]");

  function applyFilters() {
    let result = PRODUCTS.filter((p) => p.gender === gender);

    const typeValue = typeSelect ? typeSelect.value : "all";
    if (typeValue !== "all") {
      result = result.filter((p) => p.type === typeValue);
    }

    const lineValue = lineSelect ? lineSelect.value : "all";
    if (lineValue !== "all") {
      result = result.filter((p) => p.line === lineValue);
    }

    const priceValue = priceSelect ? priceSelect.value : "all";
    if (priceValue === "low") {
      result = result.filter((p) => p.price < 20);
    } else if (priceValue === "mid") {
      result = result.filter((p) => p.price >= 20 && p.price <= 25);
    } else if (priceValue === "high") {
      result = result.filter((p) => p.price > 25);
    }

    const sortValue = sortSelect ? sortSelect.value : "popular";
    if (sortValue === "price-asc") {
      result = result.slice().sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      result = result.slice().sort((a, b) => b.price - a.price);
    } else {
      result = result.slice().sort((a, b) => a.popularity - b.popularity);
    }

    grid.innerHTML = "";
    if (!result.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "Nessun prodotto trovato.";
      grid.appendChild(empty);
      return;
    }

    result.forEach((product) => {
      grid.appendChild(createProductCard(product));
    });
  }

  const categoryParam = getQueryParam("categoria");
  if (categoryParam && typeSelect) {
    typeSelect.value = categoryParam;
  }

  if (typeSelect) typeSelect.addEventListener("change", applyFilters);
   if (lineSelect) lineSelect.addEventListener("change", applyFilters);
  if (priceSelect) priceSelect.addEventListener("change", applyFilters);
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);

  applyFilters();
}

function initProductPage() {
  const id = getQueryParam("id");
  if (!id) return;
  const product = PRODUCTS.find((p) => p.id === id);
  const imageNode = document.querySelector("[data-product-image]");
  const nameNode = document.querySelector("[data-product-name]");
  const priceNode = document.querySelector("[data-product-price]");
  const shortNode = document.querySelector("[data-product-short]");
  const benefitsList = document.querySelector("[data-product-benefits]");
  const usageNode = document.querySelector("[data-product-usage]");
  const relatedContainer = document.querySelector("[data-related]");
  const qtyValue = document.querySelector("[data-qty-value]");
  const qtyMinus = document.querySelector("[data-qty-minus]");
  const qtyPlus = document.querySelector("[data-qty-plus]");
  const addBtn = document.querySelector("[data-add-to-cart]");

  if (!product || !imageNode || !nameNode || !priceNode) return;

  imageNode.innerHTML = "";
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    imageNode.appendChild(img);
  } else {
    imageNode.textContent = "Immagine prodotto";
  }
  nameNode.textContent = product.name;
  priceNode.textContent = formatPrice(product.price);
  if (shortNode) shortNode.textContent = product.short;
  if (usageNode) usageNode.textContent = product.howTo;

  if (benefitsList) {
    benefitsList.innerHTML = "";
    product.benefits.forEach((benefit) => {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });
  }

  if (qtyValue && qtyMinus && qtyPlus) {
    let currentQty = 1;
    qtyValue.textContent = String(currentQty);
    qtyMinus.addEventListener("click", () => {
      if (currentQty > 1) {
        currentQty -= 1;
        qtyValue.textContent = String(currentQty);
      }
    });
    qtyPlus.addEventListener("click", () => {
      currentQty += 1;
      qtyValue.textContent = String(currentQty);
    });
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        addToCart(product.id, currentQty);
      });
    }
  }

  if (relatedContainer) {
    const related = PRODUCTS.filter(
      (p) => p.gender === product.gender && p.id !== product.id
    )
      .slice()
      .sort((a, b) => a.popularity - b.popularity)
      .slice(0, 4);
    relatedContainer.innerHTML = "";
    related.forEach((p) => {
      relatedContainer.appendChild(createProductCard(p));
    });
  }
}

function renderCart() {
  const list = document.querySelector("[data-cart-list]");
  const totalNode = document.querySelector("[data-cart-total]");
  const button = document.querySelector("[data-cart-whatsapp]");
  if (!list || !totalNode || !button) return;

  const items = getCartItems();
  list.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Il carrello è vuoto.";
    list.appendChild(empty);
    totalNode.textContent = formatPrice(0);
    button.disabled = true;
    return;
  }

  items.forEach(({ product, qty }) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const thumb = document.createElement("div");
    thumb.className = "cart-thumb";

    const info = document.createElement("div");
    const name = document.createElement("div");
    name.className = "cart-item-name";
    name.textContent = product.name;
    const controls = document.createElement("div");
    controls.className = "cart-item-controls";

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      const newQty = qty - 1;
      updateQuantity(product.id, newQty);
      renderCart();
    });

    const qtyNode = document.createElement("span");
    qtyNode.textContent = `x${qty}`;

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      const newQty = qty + 1;
      updateQuantity(product.id, newQty);
      renderCart();
    });

    const remove = document.createElement("button");
    remove.textContent = "Rimuovi";
    remove.addEventListener("click", () => {
      updateQuantity(product.id, 0);
      renderCart();
    });

    controls.appendChild(minus);
    controls.appendChild(qtyNode);
    controls.appendChild(plus);
    controls.appendChild(remove);

    info.appendChild(name);
    info.appendChild(controls);

    const price = document.createElement("div");
    price.className = "cart-item-price";
    price.textContent = formatPrice(product.price * qty);

    row.appendChild(thumb);
    row.appendChild(info);
    row.appendChild(price);

    list.appendChild(row);
  });

  const total = getCartTotal();
  totalNode.textContent = formatPrice(total);
  button.disabled = false;
}

function buildCartWhatsAppMessage() {
  const items = getCartItems();
  if (!items.length) return "";
  const nameInput = document.querySelector("[data-field-name]");
  const cityInput = document.querySelector("[data-field-city]");
  const addressInput = document.querySelector("[data-field-address]");
  const notesInput = document.querySelector("[data-field-notes]");

  const name = nameInput ? nameInput.value.trim() : "";
  const city = cityInput ? cityInput.value.trim() : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "";

  let message = "Ciao D&S Society, vorrei ordinare:\n\n";
  items.forEach(({ product, qty }) => {
    const subtotal = product.price * qty;
    message += `- ${product.name} x${qty} — ${formatPrice(subtotal)}\n`;
  });

  const total = getCartTotal();
  message += `\nTotale: ${formatPrice(total)}\n`;

  if (name) {
    message += `\nNome: ${name}`;
  }
  if (city || address) {
    message += `\nIndirizzo: ${[city, address].filter(Boolean).join(" - ")}`;
  }
  if (notes) {
    message += `\nNote: ${notes}`;
  }

  return message;
}

function initCartPage() {
  const button = document.querySelector("[data-cart-whatsapp]");
  if (!button) return;
  renderCart();
  button.addEventListener("click", () => {
    const message = buildCartWhatsAppMessage();
    if (!message) return;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  });
}

function initFloatingWhatsApp() {
  const button = document.querySelector("[data-whatsapp-floating]");
  if (!button) return;
  button.addEventListener("click", () => {
    const message = "Ciao D&S Society, vorrei informazioni sui prodotti per capelli.";
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  });
}

function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  const body = document.body;

  function closeMenu() {
    body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", () => {
    if (body.classList.contains("nav-open")) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener("click", (e) => {
    if (body.classList.contains("nav-open")) {
      // If click is outside nav and outside toggle button
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    }
  });
}

function initCookieBanner() {
  const consent = localStorage.getItem("cookie-consent");
  if (consent) return;

  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = `
    <div class="cookie-text">
      Questo sito utilizza i cookie per migliorare la tua esperienza.
    </div>
    <button class="cookie-btn">Accetta</button>
  `;

  document.body.appendChild(banner);

  // Trigger reflow to enable transition
  requestAnimationFrame(() => {
    banner.classList.add("is-visible");
  });

  const btn = banner.querySelector(".cookie-btn");
  btn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "true");
    banner.classList.remove("is-visible");
    setTimeout(() => {
      banner.remove();
    }, 400); // Wait for transition
  });
}

function initPage() {
  updateCartBadge();
  initFloatingWhatsApp();
  initNav();
  initCookieBanner();
  renderBestSellers(); // Prova a renderizzare i bestseller se presente il container

  const page = document.body.getAttribute("data-page");
  if (page === "home") {
    // renderBestSellers già chiamato sopra
  } else if (page === "shop-donna") {
    initShopPage("donna");
  } else if (page === "shop-uomo") {
    initShopPage("uomo");
  } else if (page === "product") {
    initProductPage();
  } else if (page === "cart") {
    initCartPage();
  }
}

document.addEventListener("DOMContentLoaded", initPage);
