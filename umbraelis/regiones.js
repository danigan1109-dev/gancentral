/* UMBRAELIS · datos de la web
   Para editar un texto o añadir una región, toca solo este archivo.
   Cada región:  slug (nombre de archivo de la imagen, sin tildes), title, quote, sections.
   La imagen de portada de cada región es  img/<slug>.jpg  (si no existe, se ve un fondo oscuro).
   Los marcadores del mapa (x, y en % sobre mapa-mundo.jpg) están en HOTSPOTS: se pueden ajustar. */

window.UMBRAELIS = {
  intro: {
    title: "Umbraelis",
    tagline: "El mundo está roto.",
    pitch: "Las necrópolis de los Arcontes dominan Umbraelis desde colosales torres negras, alimentadas por almas en pena y líneas telúricas corrompidas. Pero las sombras eternas comienzan a agrietarse. Algunos dioses caídos buscan venganza, otros son usados como campeones por los Arcontes. Y entre las ruinas, queda un linaje olvidado que podría despertar a los antiguos dioses y traer el fin de este régimen.",
    pitch2: "Aquí las decisiones definen el destino del alma colectiva del mundo: pactar, resistir o corromperse para obtener el poder necesario. ¿Estás dispuesto a encender una rebelión en un mundo donde incluso la esperanza ha muerto?",
    motto: "La luz no es bondad; la sombra no siempre es maldad.",
    tone: [
      { h: "Tono", t: "Oscuro, trágico, brutal, místico." },
      { h: "Temas", t: "La muerte como recurso político · Pactos con entidades olvidadas · Redención o corrupción · Rebelión contra lo eterno · El alma como moneda y castigo" },
      { h: "Referencias", t: "Malaz: El Libro de los Caídos · Dark Sun · Dark Souls · Dune · League of Legends" }
    ]
  },

  historia: {
    title: "Orígenes e historia",
    quote: "Antes de las necrópolis, hubo dioses. Antes de los dioses, hubo silencio.",
    sections: [
      { h: "El Reino Mortal", p: [
        "Es el plano del mar, la tierra y el cielo donde viven los mortales. Se dice que fue creado por los Dioses Olvidados en la Edad Primigenia, cuando los actos divinos eran comunes. Al ser derrocados por los Nuevos Dioses, muchos de estos dioses antiguos quedaron atrapados para siempre en este plano.",
        "El Reino Mortal es el mundo físico devastado por la corrupción nigromántica de los Arcontes. Aquí yacen las necrópolis, las ciudades muertas donde reinan los magos inmortales, y los últimos bosques vivos que resisten el avance de la descomposición. Las líneas telúricas, fuentes de energía arcana y espiritual, surcan estas tierras; algunas están corrompidas y esclavizadas por los Arcontes, otras son fuente de poder para los rebeldes o para los semidioses que buscan restaurar el equilibrio.",
        "La vida de los mortales transcurre entre el miedo, la desesperanza y los restos de una gloria pasada. Las leyendas dicen que los Dioses Antiguos dejaron señales y armas para quienes sean dignos de desafiarlos."
      ]},
      { h: "Los Salones Celestiales", p: [
        "Dominio de los Nuevos Dioses tras la caída de los Dioses Olvidados. Desde aquí pueden observar el Reino Mortal, aunque solo pueden intervenir haciendo sacrificios importantes.",
        "Los Salones fueron usurpados por los Arcontes, nigromantes ascendidos al estatus de semidioses tiránicos. Desde sus tronos de obsidiana flotan sobre las necrópolis, gobernando desde la distancia con visiones proféticas y ejércitos de muertos vivientes. Solo pueden manifestarse plenamente en el mundo físico mediante rituales sangrientos o sacrificios espirituales."
      ]},
      { h: "Los Círculos Profundos", p: [
        "Planos inferiores donde fueron exiliados los Dioses Olvidados tras perder la Guerra Divina. Son lugares de corrupción, violencia y destrucción. Se dice que los grandes actos de magia oscura pueden abrir brechas hacia estos reinos.",
        "Son los reinos de los <b>Dioses Caídos</b>, poderosas entidades arcanas desterradas por los Arcontes y tildadas de demonios. Sin embargo, no todos ellos son malvados: algunos ofrecen pactos oscuros pero necesarios a los rebeldes que desean poder para enfrentarse a los Arcontes… a cambio de un precio."
      ]},
      { h: "Los Reinos Olvidados", p: [
        "Más allá de los planos conocidos existen tierras elementales, reinos astrales y valles de la muerte, a los que se puede acceder con gran esfuerzo o conocimiento. En los márgenes de la realidad aún se encuentran planos inaccesibles donde podrían habitar los últimos fragmentos puros de la creación.",
        "Estos lugares pueden ofrecer esperanza… o acelerar la caída del mundo si caen en manos de los Arcontes."
      ]},
      { h: "El mundo bajo los Arcontes", p: [
        "El mundo está dominado por una élite de nigromantes que ha extendido su control sobre la mayoría de las regiones habitadas. Su dominio se basa en la magia oscura para reanimar a los muertos y manipular la esencia vital, y lo han consolidado a lo largo de siglos, sometiendo a las razas vivas bajo su yugo."
      ], ul: [
        "<b>La Élite Nigromante.</b> Un consejo de nigromantes, «los Arcontes de la Muerte», gobierna las tierras. Su jerarquía se basa en el dominio de las artes necrománticas y en el control de ejércitos de muertos vivientes.",
        "<b>Guerra de religiones.</b> La religión dominante es el culto a la muerte y la inmortalidad: la vida mortal es solo una fase antes de alcanzar el verdadero poder eterno como no-muerto. Frente a ella, el culto de la Luz Eterna predica la santidad de la vida y la pureza del alma, liderado por sacerdotes guerreros. Son una minoría perseguida.",
        "<b>La Caza de Mortales.</b> Una campaña continua para capturar a los libres, que se esconden en bosques, montañas y ruinas antiguas. Se capturan mortales para robar sus almas y entregárselas a los Arcontes."
      ]}
    ]
  },

  hotspots: [
    { slug: "cyrith-aer", x: 25.5, y: 43 },
    { slug: "bosques-de-aelvarn", x: 31, y: 31 },
    { slug: "cyrith-aer", x: 25.5, y: 43 },
    { slug: "bosques-de-aelvarn", x: 31, y: 31 },
    { slug: "tirak-thal", x: 30.5, y: 67 },
    { slug: "paramos-del-sur", x: 27, y: 70.5 },
    { slug: "bosque-cadaverico", x: 44, y: 63 },
    { slug: "valle-de-askhaar", x: 50, y: 57 },
    { slug: "tierras-volcanicas-de-vrakk", x: 48.5, y: 47.5 },
    { slug: "ruinas-de-vath-kor", x: 53, y: 33 },
    { slug: "cordillera-de-kartus", x: 63.5, y: 22 },
    { slug: "montanas-del-fin-del-mundo", x: 78, y: 28 },
    { slug: "cadena-montanosa-de-las-sombras", x: 64.5, y: 37 },
    { slug: "karthane", x: 80, y: 41 },
    { slug: "mar-de-las-cenizas", x: 61.5, y: 62.5 },
    { slug: "zetyar", x: 72.5, y: 65 },
    { slug: "issardi", x: 66.5, y: 69 }
  ],

  regiones: [
    {
      slug: "necropolis-de-los-arcontes",
      title: "Necrópolis de los Arcontes",
      quote: "Corazón inmortal de la Corrupción",
      sections: [
        { h: "Visión general", p: [
          "En el corazón de Umbraelis, allí donde el sol jamás atraviesa la niebla pútrida, se alzan las <b>Necrópolis</b>, tronos eternos de los Arcontes Nigromantes. Estas ciudades no fueron construidas por manos mortales, sino moldeadas a partir de la piedra viva y los huesos de civilizaciones extintas, fusionadas por rituales que quemaron el alma del mundo.",
          "Cada Necrópolis es una fortaleza vertical: torres afiladas como cuchillas, murallas que se repliegan y expanden como costillas de un titán, y criptas sin fondo que laten al ritmo de un <b>Foco Mortuorio</b>, el corazón arcano que vincula la voluntad del Arconte a su dominio.",
          "Sus calles están custodiadas por legiones de <b>Centinelas Huecos</b>, guerreros sin vida atrapados en armaduras corroídas, y por <b>Sombras Ligadas</b>, espectros que vigilan desde las cornisas y nunca descansan. Sobre ellas se cierne un cielo perpetuamente crepuscular, desgarrado por relámpagos de energía funeraria. Desde estas fortalezas, la corrupción se extiende como una infección, lenta pero imparable, conectando las Necrópolis a través de túneles profundos y portales arcanos."
        ]},
        { h: "Papel en Umbraelis", ul: [
          "Centros de poder absoluto de los Arcontes Nigromantes.",
          "Fuente principal de la Corrupción del Alma que carcome las tierras exteriores.",
          "Puntos de partida para ejércitos, espías y campañas de conquista."
        ]}
      ]
    },
    {
      slug: "montanas-del-fin-del-mundo",
      title: "Montañas del Fin del Mundo",
      quote: "Allí donde la tierra se quiebra contra el cielo, incluso los muertos tiemblan.",
      sections: [
        { h: "Visión general", p: [
          "Las <b>Montañas del Fin del Mundo</b> se alzan como un muro colosal que marca el límite más lejano de Umbraelis. Sus picos, eternamente cubiertos de nieve, cortan el cielo como cuchillas, y los valles que las separan son azotados por tormentas capaces de borrar aldeas enteras en una sola noche.",
          "Los viajeros las llaman <i>la espina dorsal del mundo</i>; en las leyendas se las conoce como <i>la muralla del último aliento</i>: más allá de ellas, dicen, solo hay vacío, olvido y un silencio que devora. En lo más profundo de la cordillera podría encontrarse la <b>Fortaleza Original de los Arcontes</b>, o la <b>Torre Primigenia</b> desde la que se selló el destino de las almas de Umbraelis. Nadie ha regresado con pruebas… y pocos han regresado en absoluto."
        ]},
        { h: "Historia", p: [
          "Desde la Primera Ascensión, las Montañas del Fin del Mundo han sido un lugar prohibido. Crónicas arcanas hablan de un tiempo en que no estaban cubiertas de hielo, sino de bosques negros y ríos de piedra líquida, hasta que los Arcontes sellaron algo en su interior. Las tormentas perpetuas no son naturales: se dice que nacen de los susurros y aullidos de un poder antiguo atrapado en lo más hondo."
        ]},
        { h: "Cultura y sociedad", p: [
          "No existen asentamientos permanentes en el corazón de la cordillera, pero en sus estribaciones sobreviven <b>tribus nómadas</b> que comercian con pieles, huesos y hierro negro extraído de las vetas heladas. Hablan de «los Caminos del Eco», rutas secretas que atraviesan el hielo y que solo los iniciados conocen. Algunos clanes creen que alcanzar la Fortaleza Original es un rito de muerte honorable, un viaje del que no se espera regreso."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Los Vigías de Escarcha.</b> Guerreros ermitaños que patrullan los pasos más peligrosos y exigen tributo a quienes intentan cruzarlos.",
          "<b>Los Cartógrafos de Hueso.</b> Exploradores y mercenarios que mapean rutas imposibles a cambio de precios impíos… o favores aún más oscuros.",
          "<b>Anarion el Exiliado.</b> Antiguo aprendiz de un Arconte, obsesionado con hallar la Torre Primigenia. Vive en una fortaleza abandonada en las faldas de la cordillera."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Tormentas Eternaescarcha.</b> Ventiscas sobrenaturales que aparecen sin aviso, impulsadas por magia residual.",
          "<b>Grietas sin Fondo.</b> Abismos que, según las leyendas, no conducen al subsuelo, sino a otras realidades.",
          "<b>La Marcha de los Huecos.</b> Procesiones de armaduras vacías que avanzan por las laderas en noches sin luna, siguiendo rutas invisibles."
        ]}
      ]
    },
    {
      slug: "bosques-de-aelvarn",
      title: "Bosques de Aelvarn",
      quote: "Donde las raíces recuerdan lo que los vivos han olvidado.",
      sections: [
        { h: "Visión general", p: [
          "Los <b>Bosques de Aelvarn</b> son un vasto manto verde que resiste, contra toda lógica, el avance de la corrupción nigromántica. Sus árboles son tan antiguos que sus cortezas están tatuadas con runas vivas, y sus copas se entrelazan formando un techo de sombras y luces moteadas.",
          "Entre sus claros se ocultan aldeas élficas, santuarios druidas y círculos de piedra que aún resuenan con el eco de juramentos pronunciados hace milenios. Los Aelvarn no se rigen por la autoridad de los Arcontes, pero tampoco los desafían abiertamente: el bosque sabe esperar, y sus guardianes viven siglos."
        ]},
        { h: "Historia", p: [
          "Antes de la Primera Ascensión, Aelvarn era un bosque sagrado consagrado a los dioses de la vida y la muerte. Durante la guerra contra los Arcontes fue uno de los últimos refugios de los rebeldes, protegido por un muro viviente de espinas y niebla. Las leyendas cuentan que los druidas sellaron allí fragmentos de almas puras para impedir que cayeran en manos de los nigromantes. Desde entonces, extrañas luces flotan entre los árboles en noches sin luna."
        ]},
        { h: "Cultura y sociedad", p: [
          "Los habitantes del bosque, <b>los Guardianes Verdes</b>, siguen leyes orales y ritos lunares. La caza, la recolección y la magia natural forman parte de su vida diaria. Son desconfiados con los forasteros, pero quienes se ganan su favor reciben hospitalidad, guía y protección. Cada clan cuida un fragmento de bosque, y sus líderes se reúnen bajo el Gran Roble en los solsticios para decidir asuntos comunes."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Los Guardianes Verdes.</b> Protectores juramentados del bosque, expertos en emboscadas y magia druídica.",
          "<b>El Círculo de Corteza.</b> Consejo secreto de ancianos que conocen el verdadero alcance del poder de Aelvarn.",
          "<b>Lyssara, Voz de las Raíces.</b> Una elfa que asegura oír a los árboles susurrar profecías."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Niebla Viviente.</b> Aparece y desaparece a voluntad del bosque, confundiendo a los intrusos.",
          "<b>Luz de las Almas.</b> Orbes etéreos que pueden guiar… o perder a los viajeros.",
          "<b>Animales del Recuerdo.</b> Bestias que portan fragmentos de memoria de antiguos héroes."
        ]}
      ]
    },
    {
      slug: "ruinas-de-vath-kor",
      title: "Ruinas de Vath-Kor",
      quote: "Cuando la piedra se quiebra, los juramentos antiguos sangran.",
      sections: [
        { h: "Visión general", p: [
          "En el corazón de un valle cubierto por nubes perpetuas y cicatrices de antiguas batallas yacen las <b>Ruinas de Vath-Kor</b>, antaño una ciudad-estado orgullosa, ahora un cementerio abierto. Sus templos se han derrumbado, sus murallas son devoradas por la hiedra oscura, y las avenidas que un día resonaron con marchas y cantos de victoria están pobladas por ecos huecos.",
          "Los viajeros que se adentran demasiado juran oír el golpear de tambores de guerra y el choque de armas… sonidos que se apagan al cruzar cierto umbral, dejando un silencio insoportable."
        ]},
        { h: "Historia", p: [
          "Fundada como bastión de resistencia contra el creciente poder nigromántico, Vath-Kor era famosa por su orden de guerreros-sacerdotes, los <b>Juramentados de la Llama Blanca</b>. Según las crónicas, resistieron años de asedio hasta que los Arcontes liberaron sobre la ciudad una plaga de fuego negro que devoraba piedra y carne por igual.",
          "En el último día, el líder de la ciudad, <b>Korrath el Firme</b>, rompió su espada en la plaza central como símbolo de rendición… y fue inmediatamente convertido en un sirviente no-muerto para humillar a su pueblo. Desde entonces, su figura fantasmal aún recorre las ruinas."
        ]},
        { h: "Quién queda", ul: [
          "<b>Carroñeros y saqueadores</b> que buscan reliquias prohibidas.",
          "<b>Cultos al eco de Korrath</b>, que creen que su espíritu aún puede guiar una rebelión contra los Arcontes.",
          "Criaturas nacidas del fuego negro, deformadas y furiosas."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>El Eco de Korrath.</b> Aparición de su último líder, atrapado entre honor y venganza.",
          "<b>Los Hermanos del Humo.</b> Banda de saqueadores especializados en el contrabando de reliquias malditas.",
          "<b>El Guardián de las Cadenas.</b> Una figura armada que custodia la entrada al templo principal; nadie ha visto su rostro."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Fuego Negro.</b> Todavía arde en algunos escombros, consumiendo incluso el alma de quien lo toca.",
          "<b>La Niebla de los Caídos.</b> Surge al anochecer y proyecta visiones de la última batalla.",
          "<b>Sellos de Rencor.</b> Runas que reaccionan con violencia ante los intrusos."
        ]}
      ]
    },
    {
      slug: "tierras-volcanicas-de-vrakk",
      title: "Tierras Volcánicas de Vrakk",
      quote: "Aquí, la tierra respira… y su aliento es fuego.",
      sections: [
        { h: "Visión general", p: [
          "Las <b>Tierras Volcánicas de Vrakk</b> son un infierno abierto en la corteza de Umbraelis: un paisaje de cráteres humeantes, ríos de magma y llanuras de ceniza que se extienden hasta donde alcanza la vista. El aire está cargado de azufre y calor abrasador, y el cielo se tiñe de rojo por la constante erupción de volcanes activos.",
          "Se cree que este territorio nació durante la Primera Ascensión, cuando los Arcontes liberaron una energía descomunal para sellar una grieta dimensional. Desde entonces, Vrakk es una herida abierta que nunca se enfría. La propia tierra parece viva: se agita, cruje y escupe fuego como si intentara expulsar algo que late en sus entrañas."
        ]},
        { h: "Historia", p: [
          "Vrakk era en tiempos antiguos el hogar de un pueblo minero y guerrero que extraía metales raros de las profundidades. Su riqueza fue su condena: los Arcontes codiciaron sus recursos para forjar armas imbuidas con almas cautivas. La resistencia de los vrakkanos provocó un castigo sin precedentes: la liberación del <b>Corazón de Fuego</b>, una fuente de magia volcánica tan potente que arrasó toda la región. Las leyendas aseguran que el Corazón aún palpita bajo el Monte Korr’Zhul."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Clanes de Hierro Fundido.</b> Descendientes de los mineros originales, adaptados a la vida en túneles cercanos al magma.",
          "<b>Forjadores del Alma.</b> Herreros solitarios que trabajan con metal embrujado para crear armas únicas… o malditas.",
          "<b>Bestias Magmáticas.</b> Criaturas que surgen de las fisuras para cazar y desaparecer en el fuego."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Korr’Zhul Dormido.</b> Gigante elemental atrapado bajo el monte principal, cuyas «pesadillas» provocan erupciones.",
          "<b>Maela la Forjamuerte.</b> Maestra herrera capaz de trabajar metal mezclado con fragmentos de alma.",
          "<b>Los Hijos del Corazón.</b> Fanáticos que quieren liberar por completo el Corazón de Fuego."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Lluvias de Ceniza.</b> Reducen la visibilidad y provocan asfixia.",
          "<b>Flujos de Magma Vivo.</b> El magma aquí actúa como un ente consciente que persigue el calor vital.",
          "<b>Temblores Encadenados.</b> Pequeñas sacudidas que preceden a eventos catastróficos."
        ]}
      ]
    },
    {
      slug: "valle-de-askhaar",
      title: "Valle de Askhaar",
      quote: "Aquí el viento aún recuerda los nombres de las ciudades que ya no están.",
      map: "img/llanuras-de-askhaar.jpg",
      mapCaption: "Las Llanuras de Askhaar",
      sections: [
        { h: "Visión general", p: [
          "El <b>Valle de Askhaar</b>, el Corredor del Yugo, es la gran llanura de tierra rojiza y colinas bajas que se extiende entre las tierras volcánicas de <b>Vrakk</b>, al norte, y el <b>Bosque Cadavérico</b>, al sur. Al oeste, el camino conduce hacia Tirak Thal; al este, hacia <b>Ubídume</b>, y en ese borde oriental se alza la fortaleza de <b>Mal-Karrith</b>, «la Cancela de Hierro».",
          "Fue siempre tierra de jinetes y rebaños, de horizontes abiertos y cultura ecuestre de raíz sármata. Hoy es otra cosa: un corredor militar disputado, recorrido por patrullas y caravanas armadas, donde cada ciudad en pie parece una excepción."
        ]},
        { h: "Historia", p: [
          "Durante generaciones, el valle fue el hogar de los <b>vrakhari</b>, un pueblo de ciudades hermanas, jinetes acorazados y pastores trashumantes. Sus ciudades se alineaban a lo largo del corredor, al sur junto al linde del Bosque Cadavérico y al norte a los pies de las montañas.",
          "El <b>Yugo</b> lo cambió todo. Ciudad tras ciudad fue tomada y arrasada, hasta que el valle se convirtió en un cementerio de ciudades."
        ], ul: [
          "<b>Vorlanthe, la Ciudad Vencida.</b> Gran ruina a los pies de Mal-Karrith, que aún conserva la memoria de la resistencia.",
          "<b>Las Ciudades Ceniza.</b> Karlanthe, Duvorra, Eskvarr y Tholanthe, tomadas y destruidas sobre el borde del Bosque Cadavérico."
        ]},
        { h: "Cultura y sociedad", p: [
          "Los vrakhari que sobreviven viven entre las ruinas de lo que fueron: jinetes sin ciudad, refugiados de todas las comarcas, pastores que siguen moviendo sus rebaños por tierras que ya no son suyas. Hablan distintos dialectos, pero comparten la misma mirada de quien ya ha perdido su casa una vez.",
          "El valle sigue siendo tierra de caballos y de lanzas. Quien lo cruza aprende pronto que aquí la confianza se gana despacio y se pierde deprisa."
        ]},
        { h: "Lugares y facciones clave", ul: [
          "<b>Vareth.</b> La única ciudad vrakhari que aún resiste en el corredor. Amurallada, abarrotada de refugiados y sostenida a pulso, es la última llama del valle.",
          "<b>Los Jinetes Rotos.</b> Pequeña fuerza de jinetes vrakhari libres, sin juramento a ninguna de las casas de Vrakk. Sostienen las puertas de Vareth.",
          "<b>Mal-Karrith, la Cancela de Hierro.</b> Fortaleza levantada en basalto negro y hierro, que cierra el paso hacia Ubídume.",
          "<b>El Campamento del Yugo.</b> Gran campamento fortificado sobre la ruta principal del valle, base de las fuerzas que lo vigilan.",
          "<b>La Ruta de las Caravanas Rojas.</b> Camino empedrado que cruza el valle de norte a sur, la vía más transitada y la más vigilada.",
          "<b>Las casas de Vrakk.</b> Melqar, Korruval y Dravok, señores de las montañas del norte, que observan el valle desde sus fortalezas."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Ciudades muertas.</b> Ruinas silenciosas a lo largo del corredor, donde conviene no acampar.",
          "<b>Patrullas y puestos del Yugo.</b> Fortines que controlan los caminos y cobran con sangre a quien no paga.",
          "<b>Refugiados y salteadores.</b> La desesperación convierte a vecinos en peligros.",
          "<b>El borde del Bosque Cadavérico.</b> Al sur, la llanura termina contra una línea de árboles muertos de la que es mejor no acercarse."
        ]}
      ]
    },
    {
      slug: "bosque-cadaverico",
      title: "Bosque Cadavérico",
      quote: "Aquí, hasta las hojas tienen hambre.",
      sections: [
        { h: "Visión general", p: [
          "El <b>Bosque Cadavérico</b> se extiende como una herida oscura en el mapa de Umbraelis: un lugar donde la luz apenas penetra, el aire huele a tierra podrida y la vegetación parece más hueso que madera. Sus árboles, retorcidos y huecos, están cubiertos de líquenes blanquecinos que recuerdan la piel de un cadáver, y en sus raíces anidan criaturas que se alimentan de carne… y de recuerdos.",
          "No es un bosque muerto, sino <b>un bosque que se alimenta de la muerte</b>. Las leyendas dicen que surgió cuando un Arconte selló aquí a un dios moribundo, cuyo cuerpo se pudrió hasta convertirse en tierra fértil para horrores. Cada año, su latido residual convoca una <b>Noche de Hambre</b>, donde las raíces se mueven, los troncos se agrietan y el bosque sale a cazar."
        ]},
        { h: "Historia", p: [
          "Antaño, el lugar era un bosque sagrado llamado <b>Sylthar</b>, protegido por druidas y espíritus guardianes. La Primera Ascensión lo condenó cuando un Arconte lo convirtió en un santuario profano para experimentar con necromancia vegetal. La fusión de magia de vida y magia de muerte dio origen a este ecosistema antinatural, que desde entonces crece alimentándose de la carne de todo lo que entra."
        ]},
        { h: "Cultura y sociedad", p: ["Nadie habita en el Bosque Cadavérico de forma permanente, pero:"], ul: [
          "<b>Los Cosechadores de Sombra</b> se adentran para recolectar savia negra, muy valiosa como veneno o componente ritual.",
          "<b>Ermitaños de la Podredumbre</b> viven en chozas de hueso y corteza, adorando al supuesto dios enterrado.",
          "Criaturas vegetomórficas acechan en silencio a los incautos."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>El Enraizado.</b> Un ser semihumano, semiarbóreo, que asegura ser la voz del dios muerto.",
          "<b>Los Cosechadores de Sombra.</b> Contrabandistas de savia negra que comercian con nigromantes.",
          "<b>La Doncella de Corteza.</b> Aparición que guía o engaña a los viajeros con igual facilidad."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Savia Negra.</b> Viscosa, corrosiva para la carne, embriagadora para el espíritu.",
          "<b>Raíces Errantes.</b> Se mueven bajo tierra para atrapar y drenar víctimas.",
          "<b>Hongos de Memoria.</b> Consumirlos otorga visiones… a costa de perder recuerdos reales."
        ]}
      ]
    },
    {
      slug: "mar-de-las-cenizas",
      title: "Mar de las Cenizas",
      quote: "Donde las olas llevan huesos… y las velas, mentiras.",
      sections: [
        { h: "Visión general", p: [
          "El <b>Mar de las Cenizas</b> es un vasto y opresivo océano gris donde el agua parece mezclada con polvo y hollín. Las olas rompen con un sonido hueco, como si algo las ahogara desde abajo. La visibilidad rara vez supera el horizonte cercano: una bruma perpetua cubre el mar, difuminando los límites entre cielo y agua.",
          "Navegar por él es arriesgarse a perderse para siempre, no solo por las corrientes impredecibles, sino por las <b>flotas piratas</b> que lo patrullan. Estos corsarios, los <b>Hijos de la Ceniza</b>, son más que saqueadores: se dice que sellan pactos con espíritus marinos y beben sangre mezclada con agua del propio mar para asegurar que sus almas siempre encuentren el camino de regreso… aunque sea al fondo."
        ]},
        { h: "Historia", p: [
          "Antes de la Primera Ascensión, el Mar de las Cenizas era una ruta comercial vital que conectaba varias ciudades-estado costeras. Durante la guerra, los Arcontes lo maldijeron al hundir en sus profundidades una flota enemiga junto con un artefacto prohibido. La maldición convirtió sus aguas en una tumba líquida que nunca se calma.",
          "Los marinos aseguran que, en noches sin luna, es posible ver a los barcos hundidos navegando de nuevo, tripulados por esqueletos envueltos en algas, en busca de venganza contra cualquier embarcación viva."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Pueblos flotantes</b> formados por embarcaciones unidas, donde se intercambian bienes y favores.",
          "<b>Tripulaciones piratas</b> que saquean, comercian con esclavos y trafican reliquias del fondo.",
          "<b>Ermitas de vigías</b> en islotes, donde solitarios envían señales de humo o fuego para advertir de ataques."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Los Hijos de la Ceniza.</b> Confederación de capitanes piratas que obedecen un código sangriento.",
          "<b>Capitana Syrrha Diente de Coral.</b> Maestra en emboscadas y portadora de un timón encantado que puede cambiar el rumbo del viento."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>El Guardián del Faro Hundido.</b> Un espectro que guía a las naves a su perdición.",
          "<b>Tormentas de Ceniza.</b> Reducen la visibilidad a pocos metros y abrasan la piel.",
          "<b>Aguas Engullidoras.</b> Remolinos que arrastran barcos a grutas subacuáticas.",
          "<b>Barcos Fantasma.</b> Aparecen repentinamente y desaparecen igual de rápido."
        ]}
      ]
    },
    {
      slug: "cadena-montanosa-de-las-sombras",
      title: "Cadena Montañosa de las Sombras",
      quote: "Bajo estas cumbres, el pasado nunca duerme.",
      sections: [
        { h: "Visión general", p: [
          "La <b>Cadena Montañosa de las Sombras</b> se alza como un muro oscuro entre regiones, una sucesión de picos afilados y laderas cubiertas por una niebla densa que rara vez se disipa. A la luz del amanecer, las sombras proyectadas por sus cumbres forman figuras imposibles que parecen moverse… o vigilar.",
          "No es la altura lo que vuelve peligroso este lugar, sino lo que se oculta <b>debajo</b>: una red de túneles ancestrales, tallados mucho antes de la Primera Ascensión, que conecta con cámaras subterráneas, ruinas olvidadas y templos caídos. Muchos pasajes están derrumbados o plagados de trampas, pero otros llevan a tesoros… y a horrores que nunca deberían haber sido despertados."
        ]},
        { h: "Historia", p: [
          "La tradición oral de las tribus cercanas afirma que la cadena fue el corazón de un reino subterráneo desaparecido, <b>Thur-Vael</b>, hogar de artesanos y magos que trabajaban la piedra y el metal con un dominio insuperable. Cuando los Arcontes iniciaron su ascenso, Thur-Vael intentó sellar sus túneles para evitar la invasión… pero algo desde dentro comenzó a devorar su imperio. Hoy solo quedan ruinas a medio colapsar, pasajes que se hunden en la oscuridad y guardianes espectrales que aún patrullan las cámaras sagradas."
        ]},
        { h: "Cultura y sociedad", p: ["No hay asentamientos permanentes en la zona, pero:"], ul: [
          "<b>Clanes nómadas</b> usan entradas ocultas para refugiarse durante las tormentas.",
          "<b>Buscadores de eco</b> (arqueólogos, mercenarios y saqueadores) recorren los túneles en busca de artefactos.",
          "<b>Guardianes Encadenados</b> protegen los accesos más profundos, siguiendo juramentos de un reino que ya no existe."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Los Guardianes Encadenados.</b> Espíritus armados con armaduras negras, vinculados a los juramentos de Thur-Vael.",
          "<b>Maerkos el Sombrista.</b> Contrabandista que usa los túneles para mover mercancías prohibidas.",
          "<b>La Voz Hueca.</b> Eco persistente de un mago de Thur-Vael que aún susurra en las profundidades."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Colapsos súbitos.</b> Derrumbes que pueden aislar a los viajeros.",
          "<b>Ecos Desorientadores.</b> Sonidos que confunden la orientación en los túneles.",
          "<b>Runas Inestables.</b> Antiguas defensas mágicas que reaccionan de forma impredecible."
        ]}
      ]
    },
    {
      slug: "karthane",
      title: "Karthane",
      quote: "Siete bastiones, un juramento: jamás caer.",
      sections: [
        { h: "Visión general", p: [
          "Karthane es una leyenda con muros. Desde fuera, pocos creen que exista; para los que han visto sus torres, es una fortaleza inmortal. Está compuesta por <b>siete bastiones ciclópeos</b>, unidos por puentes elevados que forman una muralla de hierro y piedra contra el avance de los Arcontes Nigromantes y sus ejércitos no muertos.",
          "Durante siglos, Karthane ha resistido asedios ininterrumpidos gracias a su arquitectura impenetrable, su disciplina militar y su aislamiento casi absoluto. Pero la fuerza de sus muros es igualada por la rigidez de su sociedad: puertas siempre cerradas, leyes severas y castigos públicos que aseguran el orden. Los extranjeros rara vez son admitidos, y muchos han muerto intentando cruzar sus umbrales. Dentro, la aparente prosperidad oculta una decadencia moral corrosiva: la nobleza vive para intrigas cortesanas, el pueblo obedece sin rechistar, y la compasión es un lujo que pocos pueden permitirse."
        ]},
        { h: "Historia", p: [
          "Fundada durante la Primera Ascensión, Karthane fue concebida como <b>la última fortaleza</b> de la humanidad frente a la corrupción. La leyenda cuenta que sus siete bastiones fueron levantados sobre siete colinas, cada uno custodiado por una casa noble con su propio escudo, ejército y tradiciones. En un pacto ancestral, las casas juraron mantener sus puertas cerradas al mundo exterior hasta que el peligro de los Arcontes desapareciera… algo que, siglos después, aún no ha ocurrido."
        ]},
        { h: "Cultura y sociedad", p: [
          "La nobleza controla todos los recursos y dicta leyes férreas; el pueblo vive bajo disciplina militar, entrenado para resistir asedios y servir en las defensas. La moral pública se sustenta en honor, obediencia y deber… aunque la corrupción política es tan antigua como las murallas. Los siete bastiones tienen especializaciones propias: forja, víveres, defensa de muros, logística, artes arcanas, archivo histórico y diplomacia interna."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Conde Vaelor Varendor.</b> Señor del Bastión Varendor, estratega implacable.",
          "<b>La Guardia de Hierro.</b> Cuerpo de élite que patrulla murallas y puentes elevados.",
          "<b>El Consejo de Siete.</b> Asamblea de los señores de cada bastión, más interesados en la política interna que en el exterior."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Puertas Infranqueables.</b> Se abren solo por orden del Consejo y bajo juramento sagrado.",
          "<b>Asedios Perpetuos.</b> Ejércitos no muertos acampan eternamente en la periferia.",
          "<b>Intriga Interna.</b> Alianzas y traiciones dentro del Consejo pueden cambiar el destino de la ciudad."
        ]}
      ]
    },
    {
      slug: "paramos-del-sur",
      title: "Páramos del Sur",
      quote: "En el silencio del desierto, cada sombra tiene un precio.",
      sections: [
        { h: "Visión general", p: [
          "Los <b>Páramos del Sur</b> son un mar de arena y piedra quebrada que se extiende hasta donde alcanza la vista. Bajo un sol implacable y noches heladas, las caravanas de los clanes Katari cruzan rutas invisibles, guiadas por estrellas y leyendas. No hay ciudades permanentes: la vida aquí es movimiento, desconfianza y supervivencia.",
          "Entre los Katari, el <b>Clan Nahir</b> se distingue no por la fuerza bruta, sino por su maestría en las artes de la intriga, el asesinato y la diplomacia venenosa. Temidos y respetados a partes iguales, sus emisarios rara vez viajan solos, y sus enemigos rara vez viven para contarlo."
        ]},
        { h: "Historia", p: [
          "Los Páramos fueron antaño un corredor de comercio que unía el corazón de Umbraelis con sus costas meridionales. La llegada de los Arcontes Nigromantes forzó a los clanes a abandonar las rutas abiertas y refugiarse en la movilidad. Con el tiempo, las caravanas se convirtieron en fortalezas itinerantes, y el comercio dio paso a la política tribal.",
          "El Clan Nahir surgió como mediador entre conflictos, pero su «diplomacia» siempre fue acompañada de desapariciones oportunas. El Consejo de Sombras que gobierna el clan dicta sentencias que se ejecutan en silencio."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Clanes Katari.</b> Nómadas organizados en caravanas familiares y militares, expertos en la supervivencia extrema.",
          "<b>Clan Nahir.</b> El más temido en las artes del veneno, la infiltración y la eliminación selectiva.",
          "<b>Ley de Arena y Acero.</b> Un código oral que regula los duelos, las venganzas y el comercio."
        ]},
        { h: "Facciones y personajes clave", ul: [
          "<b>Consejo de Sombras.</b> Órgano secreto de líderes Nahiri que deciden la política y las muertes necesarias."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Tormentas de Vidrio.</b> Ráfagas que levantan arena mezclada con fragmentos de cristal afilado.",
          "<b>Oasis Envenenados.</b> Manantiales contaminados deliberadamente por clanes rivales.",
          "<b>Caravanas Fantasma.</b> Restos malditos de expediciones que nunca regresaron."
        ]}
      ]
    },
    {
      slug: "tirak-thal",
      title: "Tirak Thal",
      audio: "tirak-thal",
      quote: "Aquí, la gloria es efímera… pero la arena lo recuerda todo.",
      sections: [
        { h: "Visión general", img: "tirak-thal-coliseo", p: [
          "<b>Tirak Thal</b> aparece antes de que puedas verla. Primero el olor: sangre seca, especias quemadas y sudor mezclado con arena caliente. Luego el sonido: un rumor sordo, entre música y conversación, el de una ciudad que nunca duerme del todo porque siempre hay alguien dispuesto a apostar en la oscuridad.",
          "Desde la última cresta de dunas, el sol de la tarde la vuelve casi hermosa: murallas de piedra rojiza que beben la luz, torres como lanzas contra un cielo sin nubes y, en el centro, el <b>Gran Coliseo</b>, el corazón alrededor del cual creció todo lo demás. Conocida como la <b>Ciudad de las Cien Arenas</b>, sus puertas siempre están abiertas. Tirak Thal no teme a los que llegan; teme a los que intentan irse."
        ]},
        { h: "Historia", p: [
          "Los primeros exiliados acamparon alrededor de la <b>Cicatriz de Zhar</b>, el cráter donde cayó el dios de la guerra, y construyeron hacia fuera durante siglos. Tirak Thal no fue diseñada: creció. Nació como un mercado de gladiadores y acabó siendo una ciudad-estado, rica con el comercio de armas y con los juegos de arena, que atraen patrocinadores de todo Umbraelis, incluidos emisarios de los Arcontes.",
          "Cuando los Arcontes destruyeron Vrakk, muchos de sus supervivientes huyeron hacia los Páramos del Sur, y algunos fundaron Tirak Thal. Los Maestros del Polvo borraron después ese legado de los registros oficiales, y se murmura que una familia borrada de ellos, los Varek, aún conoce los túneles bajo la ciudad. Quien manda en papel es un consejo de cinco mercaderes; quien manda de verdad es otra cuestión, y en Tirak Thal nadie la plantea en voz alta."
        ]},
        { h: "Los tres anillos", img: "tirak-thal-anillos", p: [
          "<i>«Una ciudad no crece. Se estratifica. El polvo abajo, la sangre en el medio, el fuego arriba.»</i> Cuanto más lejos del fuego, menos vales."
        ], ul: [
          "<b>I · El Polvo (anillo exterior).</b> Las Puertas del Páramo, caravanas, posadas, el <b>Zoco de Ceniza</b> (si se puede comprar sin permiso, se compra aquí), el <b>Barrio del Foso Viejo</b> con el Brasero del Exiliado, las Barracas del Polvo y el <b>Cementerio de Arena</b>, donde las tumbas no llevan nombre, solo el número de combates ganados.",
          "<b>II · La Forja (anillo medio).</b> La <b>Escuela de Guerra de Kael Veyr</b>, las Fraguas del Exilio, los Establos de Vrakk, el <b>Mercado de Sangre</b> (subastas de gladiadores y contratación de mercenarios) y el Cuartel de la Guardia Mayor. Calor de fragua y un orden comprado: la violencia aquí es profesional.",
          "<b>III · La Cicatriz (anillo interior).</b> El <b>Gran Coliseo</b> sobre el cráter, los Cinco Palacios de los Maestros del Polvo, el Templo del Umbral Ardiente y la sede de los Hijos del Yugo. El suelo tiembla y las piedras guardan un calor que no se va ni de noche. Los que viven aquí han aprendido a no hablar en voz alta.",
          "<b>La Herida (subterráneo).</b> Bajo el Coliseo, túneles y hornos que llevan ardiendo desde antes de que existiera la ciudad. Nadie baja si no tiene motivo."
        ]},
        { h: "Quién manda", ul: [
          "<b>Los Maestros del Polvo.</b> Cinco mercaderes que gobiernan sobre el papel, cobran impuestos y firman lo que haga falta, siempre que el dinero siga llegando.",
          "<b>Los Hijos del Yugo.</b> La presencia de los Arcontes en la ciudad. Llegaron escoltando caravanas de esclavos y nunca se marcharon. Guardias de capa roja en los accesos al Coliseo, un pabellón en el Mercado de Sangre y una caravana hacia Vrakk cada catorce días con esclavos y cuerpos de gladiadores caídos.",
          "<b>El Culto de la Trascendencia Oscura.</b> La religión de los Arcontes: predica que los dioses duermen y que el mundo depende de mantenerlos encadenados. Con su templo y su hospital para gladiadores heridos, llega a todos los combatientes de la ciudad.",
          "<b>La Rueda Rota.</b> Apostadores e intermediarios que mueven el dinero que no aparece en ningún registro."
        ]},
        { h: "Personajes clave", ul: [
          { img: "pnj-saar-mek", t: "<b>Saar-Mek el Silente.</b> Calvo, sin cejas, siempre de negro y sin armas visibles. Nunca habla en público: se comunica por escrito o a través de su intérprete. Se dice que las puertas, el Coliseo y las rutas del desierto son suyos." },
          { img: "pnj-miklos", t: "<b>Miklos, el niño vidente.</b> Un niño de unos doce años que, según dicen, acierta el resultado de los combates del Coliseo. Se rumorea que sus predicciones fijan las cuotas de las apuestas y que vive aislado en la Segunda Muralla, bien tratado pero sin nadie con quien hablar." },
          { img: "pnj-vrath-kel", audio: "pnj-vrath-kel", t: "<b>Inquisidor Vrath-Kel.</b> Aelvari del sur, alto y extremadamente delgado, de piel ceniza y ojos sin iris visible. Viste túnica negra con bordados en forma de cadena y lleva un quemador de incienso al cuello. Voz del Templo; predica en el Coliseo antes de los grandes combates." },
          { img: "pnj-drevan-mok", t: "<b>Drevan Mok.</b> El más poderoso de los Maestros del Polvo. Controla el Mercado de Sangre." },
          { img: "pnj-lirath", t: "<b>Lirath la Mediana.</b> Maestra del Polvo. Controla las rutas de caravana." },
          { img: "pnj-maeris-dun", t: "<b>Maeris Dun.</b> Maestra del Polvo. No nació en Tirak Thal: llegó a los veinte años como contable de una casa de apuestas menor, la compró en diez y a los treinta ya gobernaba la ciudad. Nunca usó la violencia; ascendió siendo siempre la persona más informada de cualquier sala. Va sin escolta, con ropa sencilla y calculada, y se fija en lo que no encaja." },
          { img: "pnj-tarven", t: "<b>Tarven el Viejo.</b> El más longevo de los Maestros. Recuerda la ciudad de antes del Yugo. Está cansado." },
          { img: "pnj-solis-drak", t: "<b>Solis Drak.</b> El más joven de los Maestros del Polvo. Ambicioso." },
          { img: "pnj-kael-veyr", t: "<b>Kael Veyr.</b> Antiguo general que desertó para enseñar tácticas letales sin ataduras políticas. Su escuela es la más prestigiosa de la ciudad y sus graduados llevan una marca de ceniza en el dorso de la mano izquierda." },
          { img: "pnj-kaelen-dros", t: "<b>Kaelen Dros.</b> Instructor veterano de la Escuela de Kael Veyr, de unos cuarenta y cinco años y con una cicatriz diagonal sobre el ojo derecho. Reconocido como uno de los mejores formadores de gladiadores." },
          { img: "pnj-drevan-el-calvo", t: "<b>Drevan el Calvo.</b> Maestro de Arena de las arenas menores del Keth; sus contratos de patrocinio abren puertas." },
          { img: "pnj-varen", t: "<b>Varen el Quemado.</b> Maestro de Arena del Keth, enorme y de pocas palabras. Presenta a los gladiadores desde el foso central con desgana." },
          { img: "pnj-sael", t: "<b>Sael Keth-Maro.</b> Dueña del Brasero del Exiliado, en el Foso Viejo. Discreta por dinero, no por convicción." },
          { img: "pnj-gidren", t: "<b>Gidren el Ciego.</b> Corredor de apuestas bien vestido que lleva una venda de cuero por superstición; en realidad no es ciego." },
          { img: "pnj-borum", t: "<b>Borum Vel, «el Contador».</b> Informante de origen zarithiano que trabaja con todos y no es leal a nadie. Nunca regala información." },
          { img: "pnj-sera-varek", t: "<b>Sera Varek.</b> De la familia Varek, guía y contrabandista de los túneles bajo la ciudad. Treinta y pocos años, piel cobriza oscura, delgada y de movimientos precisos. Viste sin ostentación y lleva un sello de hierro con el signo Varek. Inteligente, fría y pragmática: no busca venganza, busca poder." }
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Cien Arenas.</b> Cada coliseo tiene reglas, trampas y estilos de combate únicos.",
          "<b>La arena del Keth.</b> Las arenas menores de los anillos exteriores, donde se juega el pase hacia el Gran Coliseo.",
          "<b>Combates amañados.</b> Las apuestas del Coliseo mueven demasiado dinero para dejarlas al azar.",
          "<b>Una guardia comprada.</b> Patrulla los tres anillos, pero responde al dinero, no a la justicia.",
          "<b>La ciudad recuerda.</b> Los guardias comparten información: lo que haces en un anillo se sabe pronto en el siguiente."
        ]}
      ]
    },
    {
      slug: "cyrith-aer",
      title: "Cyrith Aer",
      quote: "Allí donde las nubes besan la piedra y el viento guarda secretos que no se deben oír.",
      sections: [
        { h: "Visión general", p: [
          "En el extremo oriental de la Cordillera de Ilyss, suspendida entre riscos afilados y mares de nubes perpetuas, se alza <b>Cyrith Aer</b>, la Ciudad Suspendida: un enclave imposible, sostenido por corrientes ascendentes y anclado a la roca por torres de cristal-obsidiana. Aquí, los <b>Skykin</b> han hecho del cielo su hogar y del viento su guardián.",
          "Las calles son puentes colgantes, las plazas terrazas abiertas al abismo, y las murallas… corrientes invisibles de aire que desvían cualquier intruso. En Cyrith Aer, ciencia y magia se entrelazan para estudiar tres cosas: el flujo del viento, el movimiento de las estrellas y las líneas telúricas que recorren Umbraelis como arterias vivas."
        ]},
        { h: "Historia", p: [
          "Fundada por clanes elementales tras la Primera Guerra contra los Arcontes, Cyrith Aer fue refugio y observatorio. Su ubicación estratégica, sobre un nudo de corrientes ascendentes, la protegía tanto de invasiones terrestres como aéreas. Con el tiempo, los Skykin desarrollaron técnicas para leer las líneas telúricas y sellar grietas dimensionales. El <b>Consejo de Archimagos</b> que gobierna la ciudad está formado por descendientes directos de aquellos fundadores."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Consejo de Archimagos.</b> Autoridad suprema, protectores de las líneas y guardianes de los secretos elementales.",
          "<b>Clanes Skykin.</b> Cada uno especializado en un aspecto de la magia elemental y la navegación aérea.",
          "<b>Guardianes del Viento.</b> Guerreros-magos que protegen las rutas aéreas y las torres de anclaje."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Torres de Cristal-Obsidiana.</b> Absorben y canalizan el flujo telúrico para mantener la ciudad suspendida.",
          "<b>Corrientes Ascendentes.</b> Invisibles y letales para quien no conozca su mapa.",
          "<b>Linaje y Juramento.</b> Romper un destino impuesto es un acto de traición grave para los Skykin."
        ]}
      ]
    },
    {
      slug: "ciryx",
      title: "Ciryx",
      quote: "La Ciudad de los Puentes",
      sections: [
        { h: "Visión general", p: [
          "En el extremo oriental de la península que mira hacia el Mar de la Esperanza se alza <b>Ciryx</b>, la ciudad suspendida sobre riscos y abismos, conocida como la <b>Ciudad de los Puentes</b>. Levantada sobre ciclópeas arcadas de piedra y cristal-obsidiana, sus calles parecen flotar en el aire, unidas por viaductos que desafían al viento y al mar embravecido.",
          "Durante siglos, Ciryx ha sido un enclave neutral, punto de encuentro entre las facciones libres de Umbraelis y puente cultural hacia los Skykin y Aetheris de Cyrith Aer. En sus plazas se oyen lenguas de todos los rincones, y en sus mercados circulan especias, reliquias y secretos."
        ]},
        { h: "Gobierno", p: ["El gobierno recae en un <b>Triunvirato de Puentes</b>:"], ul: [
          "<b>Thariel Drenn, Custodio de los Puentes.</b> Maestro de ingenieros y guardianes de los caminos.",
          "<b>Serenya Val Erythar, Voz del Viento.</b> Embajadora ante Cyrith Aer y descendiente del linaje Erythar.",
          "<b>Vorun Kael, Guardián del Abismo.</b> Jefe militar y sacerdote, encargado de vigilar los riscos y las grietas bajo la ciudad."
        ]},
        { h: "Historia", p: [
          "Ciryx es respetada por su neutralidad y su longevidad como lugar de tratados. Se dice que aquí se celebraron los antiguos <b>Consejos de los Pueblos Libres</b>, donde los clanes, reinos y tribus se reunían para resistir amenazas comunes."
        ]}
      ]
    },
    {
      slug: "cordillera-de-kartus",
      title: "Cordillera de Kartus",
      quote: "Allí donde el cielo corta la tierra, los guardianes antiguos vigilan aún el amanecer que no llega.",
      sections: [
        { h: "Visión general", p: [
          "En el <b>Reino Lejano</b>, al norte de Umbraelis, se alza la <b>Cordillera de Kartus</b>, bastión de los Aetheris: una muralla natural de cumbres nevadas y riscos afilados. Entre sus picos se ocultan fortalezas de piedra blanca y cristal bruñido, invisibles para los no iniciados. Allí residen los <b>Aetheris</b>, descendientes de guardianes celestiales que antaño sirvieron directamente a los Dioses Antiguos.",
          "Viven según un código inmutable, regido por el deber de custodiar un legado que el mundo ha olvidado."
        ]},
        { h: "Historia", p: [
          "La Cordillera de Kartus fue santificada en la <b>Era del Juramento</b>, cuando los dioses confiaron a los Aetheris una misión sagrada. Durante milenios, estos guardianes han vigilado las rutas de acceso, manteniendo oculto lo que custodian. Con el paso de los siglos, las fortalezas se han convertido en monasterios guerreros donde se entrenan generaciones enteras de Aetheris. Sus rituales mezclan plegarias al alba con un estricto adiestramiento marcial y místico."
        ]},
        { h: "Los Aetheris", ul: [
          "<b>Descendencia celestial.</b> Se dice que en su sangre corre un vestigio del poder divino.",
          "<b>Juramento inquebrantable.</b> El deber está por encima de la vida, la libertad o el deseo personal.",
          "<b>Guardianes velados.</b> Sus fortalezas están ocultas por nieblas ilusorias y escudos de luz."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Maestros de la Aurora.</b> Consejo de ancianos que dicta las órdenes a todos los enclaves.",
          "<b>Luminarias.</b> Guerreros de élite entrenados en artes celestiales y tácticas de asedio.",
          "<b>Iniciados.</b> Jóvenes que han superado la Prueba del Horizonte, ascendiendo sin ayuda hasta la cima de Kartus."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Nieves Eternas.</b> Tormentas súbitas capaces de borrar caravanas enteras.",
          "<b>Rutas Veladas.</b> Senderos que cambian bajo la influencia de la magia Aetheris.",
          "<b>Centinelas Celestes.</b> Espíritus de antiguos guardianes que vigilan los pasos."
        ]}
      ]
    },
    {
      slug: "issardi",
      title: "Issardi",
      quote: "Allí donde las campanas ya no suenan, los rezos aún arden en silencio.",
      sections: [
        { h: "Visión general", p: [
          "<b>Issardi</b>, Eco de la Devoción Perdida, fue antaño un reino montañoso y fértil, devoto de los Dioses Antiguos, célebre por sus templos de piedra dorada y su guardia sagrada: los <b>Escudos del Alba</b>. Su capital, <b>Elarion</b>, albergaba la <i>Gran Basílica del Amanecer</i>, donde se custodiaban reliquias capaces de repeler la Corrupción del Alma.",
          "La invasión de Zetyar trajo el fin de su gloria: los templos fueron saqueados, las murallas derribadas y el clero ejecutado o dispersado. Hoy, Issardi es un territorio roto, cubierto de ruinas y pueblos fantasmas, donde los pocos supervivientes se ocultan, protegiendo en secreto <b>reliquias menores</b> que podrían despertar de nuevo el poder de sus dioses."
        ]},
        { h: "Historia breve", ul: [
          "<b>Era de Devoción.</b> Issardi fue un faro espiritual, guiando reinos vecinos con sus oráculos y sus artes de purificación.",
          "<b>Guerra de la Última Aurora.</b> Zetyar, respaldado por fuerzas de las Necrópolis, lanzó una ofensiva brutal, corrompiendo incluso a algunos Escudos del Alba.",
          "<b>Caída y exilio.</b> Con Elarion en ruinas, los issardinos se dispersaron. Los clanes supervivientes viven como peregrinos ocultos."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Guardianes de la Luz Menor.</b> Pequeños grupos que custodian reliquias menores.",
          "<b>Clanes nómadas.</b> Viajan disfrazados de mercaderes o mendigos para evitar la persecución.",
          "<b>Lengua Velada.</b> Un dialecto antiguo que esconde oraciones en su gramática."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Templos Sellados.</b> Algunos aún emiten un tenue poder que impide la entrada del Umbra.",
          "<b>Reliquias Perdidas.</b> Se dice que, si son reunidas, podrían purgar un bastión de los Arcontes.",
          "<b>Fieles Ocultos.</b> Pueblos enteros que se hacen pasar por leales a Zetyar, pero guardan santuarios secretos."
        ]}
      ]
    },
    {
      slug: "zetyar",
      title: "Zetyar",
      quote: "No hay tronos aquí, solo estandartes sobre ruinas.",
      sections: [
        { h: "Visión general", p: [
          "<b>Zetyar</b>, el Reino Sin Corona, no es un reino en el sentido tradicional: es un <b>conglomerado de fortalezas, campamentos militares y ciudades saqueadas</b>, dominadas por Infernis que adoptaron el código bélico de los Arcontes Nigromantes.",
          "La vida en Zetyar está marcada por la ley del más fuerte. Sus ejércitos son mercenarios y saqueadores al servicio de las <b>Torres Negras</b>, intercambiando botines, gemas y esclavos por armas y magia prohibida. En sus fronteras, la corrupción del alma es aceptada como herramienta: los soldados se «bendicen» con marcas arcanas que les dan fuerza a cambio de su humanidad."
        ]},
        { h: "Historia breve", ul: [
          "<b>Forja bélica.</b> Formado por clanes y bandas unificadas bajo un código militar implacable.",
          "<b>Guerra contra Issardi.</b> Su mayor victoria, que les aseguró acceso a reliquias sagradas y rutas comerciales.",
          "<b>Alianza oscura.</b> Sus líderes juraron lealtad táctica a las Necrópolis a cambio de protección mágica."
        ]},
        { h: "Cultura y sociedad", ul: [
          "<b>Código del Acero y la Ceniza.</b> Disciplina, obediencia y saqueo.",
          "<b>Capitanes de Guerra.</b> Cada uno controla su propio territorio y ejército privado.",
          "<b>Fe Marchita.</b> La religión es reemplazada por culto a la fuerza y al Umbra."
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Guarniciones Nómadas.</b> Fortalezas móviles que cambian de ubicación.",
          "<b>Mercado Sombrío.</b> Lugar donde se comercia con armas malditas y prisioneros.",
          "<b>Gladiadores Marcados.</b> Campeones bendecidos por la Corrupción."
        ]}
      ]
    }
  ]
};
