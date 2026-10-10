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
    { slug: "tirak-thal", x: 30.5, y: 67 },
    { slug: "paramos-del-sur", x: 27, y: 70.5 },
    { slug: "bosque-cadaverico", x: 44, y: 63 },
    { slug: "valle-de-askhaar", x: 50, y: 57 },
    { slug: "tierras-volcanicas-de-vrakk", x: 48.5, y: 47.5 },
    { slug: "vargarda", x: 53, y: 33 },
    { slug: "cordillera-de-kartus", x: 63.5, y: 22 },
    { slug: "montanas-del-fin-del-mundo", x: 78, y: 28 },
    { slug: "cadena-montanosa-de-las-sombras", x: 64.5, y: 37 },
    { slug: "karthane", x: 80, y: 41 },
    { slug: "mar-de-las-cenizas", x: 61.5, y: 62.5 },
    { slug: "zetyar", x: 72.5, y: 65 },
    { slug: "issardi", x: 66.5, y: 69 }
  ],

  personajes: [
    {
      slug: "pj-damian", title: "Damián Varendor", linea: "Noble de Karthane", jugador: "Gus",
      quote: "Primogénito de una ciudad que nunca cayó.",
      sections: [
        { h: "Quién es", p: [
          "Primogénito y heredero de una casa noble de Karthane, <b>Damián</b> creció en el <b>Bastión Varendor</b>, una ciudad fortaleza de castillos unidos que jamás ha caído y que resiste a diario las hordas de no muertos. Tiene la educación de un noble y la disciplina de quien ha vivido toda su vida dentro de un asedio sin fin."
        ]},
        { h: "Silvia", p: [
          "Damián rescató a una niña, <b>Silvia</b>, de una caravana de esclavos de los Hijos del Yugo, en un combate contra uno de sus capataces. En Tirak Thal le pusieron un Collar del Yugo. Hoy ya se lo han quitado, y Damián la ha tomado como pupila."
        ]}
      ]
    },
    {
      slug: "pj-orrik", title: "Orrik de Issardi", linea: "Infernis y humano", jugador: "Pedro",
      quote: "Una deuda que nunca podrá saldar.",
      sections: [
        { h: "Origen", p: [
          "Hijo ilegítimo de un comandante infernis de Zetyar y de una mujer issardina, <b>Orrik</b> creció en un campamento militar, aprendiendo la guerra brutal de los zetarianos. Tras romper con su padre acabó esclavizado en las minas de diamantes."
        ]},
        { h: "Dos herencias", p: [
          "Escapó a las ruinas de Issardi, donde sacerdotes de los Dioses Antiguos lo curaron. Desde entonces vive dividido entre la sangre infernis y la fe de su madre. Cree en la nobleza perdida de los dioses antiguos, pero no espera redención personal: su lucha es una deuda que nunca podrá saldar.",
          "Los zetarianos lo consideran un traidor y han puesto precio a su cabeza. Los issardinos lo ven como un mestizo corrupto, aunque él sueña con que algún día lo acepten."
        ]}
      ]
    },
    {
      slug: "pj-vashir", title: "Vashir, el Puñal del Silencio", linea: "Katari · Clan Nahir", jugador: "David",
      quote: "Cuando actúa, nadie lo menciona, pero todos entienden el mensaje.",
      sections: [
        { h: "Origen", p: [
          "En las áridas llanuras del sur vive el <b>Clan Nahir</b>. No es el más numeroso ni el más fuerte de los katari, pero sí el más temido en la intriga, la diplomacia envenenada y la eliminación silenciosa. Vashir nació en una de las líneas directas de su <b>Consejo de Sombras</b>."
        ]},
        { h: "Entrenamiento", p: [
          "Desde niño fue apartado de la vida del campamento y entrenado en las Artes Silentes: venenos, infiltración, suplantación y secretos. Tuvo tres maestros: <b>Nahrik el Viejo</b>, <b>Suriya Sombra-Larga</b> y <b>Derron el Sordo</b>. Su propósito se le reveló sin mentiras: no estaba destinado a gloria ni a honor, sino a mancharse las manos por el bien de su clan."
        ]},
        { h: "Lealtad", p: [
          "Solo sirve a su clan. No mata por placer ni por venganza, sino como herramienta de equilibrio entre los clanes katari, y ve la guerra como una negociación en la que la muerte es la última palabra. Siempre impecable, incluso tras un trabajo sucio, prefiere actuar bajo cobertura diplomática, en banquetes y consejos, donde su daga está más cerca del cuello enemigo que en un campo de batalla."
        ]}
      ]
    },
    {
      slug: "pj-yvaria", title: "Yvaria Skykin", linea: "Skykin · Cyrith Aer", jugador: "Ana", caido: true, audio: "pj-yvaria",
      quote: "La Hija del Viento Caído.",
      sections: [
        { h: "Origen", p: [
          "Nacida en <b>Cyrith Aer</b>, la ciudad suspendida de la Cordillera de Ilyss, <b>Yvaria</b> pertenece al linaje <b>Erythar</b>, una casa de Skykin famosa por estudiar las líneas telúricas y por sellar grietas dimensionales en la Primera Guerra contra los Arcontes. Su familia sostiene una teoría peligrosa: que los puntos donde convergen las líneas puras son las tumbas de los dioses antiguos."
        ]},
        { h: "La Brisa Rota", p: [
          "Desde su nacimiento la prepararon para unirse a la Gran Expedición Erythar. A los dieciséis años rechazó ese destino y huyó a <b>Tirak Thal</b> para ingresar en la Escuela de Guerra de Kael Veyr. Su familia la declaró <i>Aeryn Var-Ka</i>, «la Brisa Rota», título de deshonra que la borró de todos los registros.",
          "En la arena aprendió a unir la ligereza de su sangre con la brutalidad del combate. Cuando salió de la escuela, en Tirak Thal ya nadie la llamaba la Brisa Rota: la conocían como <b>la Hija del Viento Caído</b>."
        ]},
        { h: "Lo que busca", p: [
          "Redención, y probar que la fuerza en batalla también puede servir para proteger y despertar a los dioses antiguos. En secreto creía que su familia tenía razón, y que algún día sería ella quien despertara los cielos."
        ]},
        { h: "En memoria", p: [
          "Yvaria se sacrificó. Aceptó al dios <b>Zhar</b> en su interior y decidió morir ardiendo con él, debilitando el poder de los Arcontes y liberando al mundo de un posible dios de la guerra sin fin."
        ]}
      ]
    },
    {
      slug: "pj-icaro", title: "Ícaro", linea: "Aetheris · Cordillera de Kartus", jugador: "Mike",
      quote: "Instruido para proteger a Kaen y a su estirpe.",
      sections: [
        { h: "Origen", p: [
          "Hijo de <b>Kyrios</b>, de una familia Aetheris que habita un elevado emplazamiento de la Cordillera de Kartus, <b>Ícaro</b> fue instruido desde joven para proteger a Kaen y a sus descendientes. Desde que Kaen cayó prisionero de los arcontes, los Aetheris buscan a su heredero, «el Elegido», que según las antiguas profecías derrocará a los arcontes. La profecía habla de un lugar llamado <b>Luminia</b>."
        ]},
        { h: "La emboscada", p: [
          "Una semana antes de empezar su viaje recibieron un comunicado con la posible ubicación del Elegido. Su tribu acudió de inmediato, sin sospechar la emboscada: un poderoso arconte usó al Elegido como señuelo y, con oscuros poderes, convenció a casi toda la tribu para que se uniera a sus fuerzas. Solo Ícaro, su padre y sus hermanos resistieron su influjo.",
          "Ícaro, su padre Kyrios y su hermana <b>Celestia</b> lograron escapar. Su hermano y alma gemela, <b>Davir</b>, fue secuestrado por los arcontes."
        ]},
        { h: "Su juramento", ul: [
          "Rescatar a su hermano Davir.",
          "Liberar al Elegido y protegerlo para que alcance su máximo poder y despierte a los dioses antiguos.",
          "Acabar con los miembros de su tribu que se unieron a los arcontes, a quienes llama «ángeles caídos»."
        ]}
      ]
    },
    {
      slug: "pj-ashara", title: "Ashara", linea: "Elfa · Druida", jugador: "Ana",
      quote: "Guía de caminos que otros temen.",
      sections: [
        { h: "Quién es", p: [
          "<b>Ashara</b> es una elfa druida nacida en las montañas volcánicas del este. Conoce los caminos peligrosos de esas tierras y las lee mejor que nadie. Se unió al grupo cuando abandonaron Tirak Thal."
        ]}
      ]
    }
  ],

  ruta: {
    legs: [
      [[26,48.6],[22,53],[20,59],[19,66],[22,73],[27.5,75.5],[31.5,72.2]],
      [[31.5,72.2],[29,70.5],[26,69],[23.5,66.6]],
      [[23.5,66.6],[27,66.5],[30.5,67]],
      [[30.5,67],[31.3,64.5],[32,62],[34,59.5],[36,58]]
    ],
    puntos: [
      { x: 26, y: 48.6, t: "Ciryx" },
      { x: 31.5, y: 72.2, t: "Cala del Vigía Caído" },
      { x: 23.5, y: 66.6, t: "Ruinas de los Antiguos Zeytarianos" },
      { x: 30.5, y: 67, t: "Tirak Thal" },
      { x: 32, y: 62, t: "Espinazo de Zhar" }
    ],
    actual: { x: 36, y: 58, t: "Paso del oeste" }
  },

  regiones: [
    {
      slug: "paramos-del-sur",
      title: "Páramos del Sur",
      quote: "En el silencio del desierto, cada sombra tiene un precio.",
      audio: "paramos-del-sur",
      sections: [
        { h: "Visión general", p: [
          "Los <b>Páramos del Sur</b> son un mar de arena y piedra quebrada que se extiende hasta donde alcanza la vista. Bajo un sol implacable y noches heladas, las caravanas de los clanes Katari cruzan rutas invisibles, guiadas por estrellas y leyendas. No hay ciudades permanentes: la vida aquí es movimiento, desconfianza y supervivencia.",
          "Entre los Katari, el <b>Clan Nahir</b> se distingue no por la fuerza bruta, sino por su maestría en las artes de la intriga, el asesinato y la diplomacia venenosa. Temidos y respetados a partes iguales, sus emisarios rara vez viajan solos, y sus enemigos rara vez viven para contarlo.",
          "Donde el desierto se rinde al mar, la costa esconde otro mundo: calas de contrabando, ruinas hundidas y una cofradía de piratas que no responde ante ningún Arconte."
        ]},
        { h: "Historia", p: [
          "Los Páramos fueron antaño un corredor de comercio que unía el corazón de Umbraelis con sus costas meridionales. La llegada de los Arcontes Nigromantes forzó a los clanes a abandonar las rutas abiertas y refugiarse en la movilidad. Con el tiempo, las caravanas se convirtieron en fortalezas itinerantes, y el comercio dio paso a la política tribal.",
          "El Clan Nahir surgió como mediador entre conflictos, pero su «diplomacia» siempre fue acompañada de desapariciones oportunas. El Consejo de Sombras que gobierna el clan dicta sentencias que se ejecutan en silencio."
        ]},
        { h: "La costa: Cala del Vigía Caído", img: "cala-vigia", p: [
          "<i>«Antes de ser un puerto, fue una tumba. Antes de ser una tumba, fue un juramento.»</i>",
          "Al sur de Tirak Thal, oculta tras un acantilado que la esconde de cualquiera que no sepa que está ahí, se abre una cala en forma de fiordo. Su boca es un canal estrecho entre dos agujas de roca, <b>Los Centinelas</b>: cuenta la leyenda que un vigía solitario se quedó en su puesto entre ellas hasta ahogarse antes que abandonarlo.",
          "Hoy es un amasijo de cabañas de pescadores convertidas en almacenes de contrabando, con una taberna tallada en la propia roca, <b>El Farol Sordo</b>, y un mercado negro discreto de reliquias sacadas de Thalyssar. Para quien llega al Mar de las Cenizas por tierra desde Tirak Thal, es la puerta de entrada más habitual."
        ]},
        { h: "Las ruinas de Thalyssar", img: "ruinas-thalyssar", p: [
          "Más allá de la cala se extiende un archipiélago hundido de torres ciclópeas medio sumergidas. Con la marea baja se ven calles bajo el agua, y quedan cámaras secas que aún guardan reliquias de un imperio caído.",
          "Entre las ruinas se alzan los <b>Faros Ciegos</b>, tres torres que siguen en pie. Dicen que sus antiguos vigías continúan atados a su puesto por un juramento que ni la muerte pudo romper."
        ]},
        { h: "Cultura y sociedad", ul: [
          { img: "pnj-katari", t: "<b>Clanes Katari.</b> Nómadas organizados en caravanas familiares y militares, expertos en la supervivencia extrema." },
          "<b>Clan Nahir.</b> El más temido en las artes del veneno, la infiltración y la eliminación selectiva.",
          "<b>Ley de Arena y Acero.</b> Un código oral que regula los duelos, las venganzas y el comercio."
        ]},
        { h: "Facciones y personajes clave", ul: [
          { img: "pnj-consejo-sombras", t: "<b>Consejo de Sombras.</b> Órgano secreto de líderes Nahiri que deciden la política y las muertes necesarias." },
          "<b>La Cofradía de las Cenizas.</b> Confederación de cuadrillas piratas del Mar de las Cenizas, unidas por el Código Sangriento. Su primera regla: no se traiciona en la Cala.",
          { img: "pnj-larissa", audio: "pnj-larissa", t: "<b>Larissa, el Eco Roto.</b> Capitana de la cuadrilla de la Cala del Vigía Caído. Complexión media, ropa de faena más que de capitana y una voz baja que obliga a acercarse. Es ciega y lleva los ojos siempre vendados, pero en la Cala se dice que tiene visiones, y que por eso casi nunca se equivoca. Lleva tatuada en la muñeca la campana partida de su nave. Prefiere que la subestimen. Nunca amenaza en voz alta, cultiva deudas de favor como otros cultivan oro, y nadie hace un trato con ella sin acabar debiéndole algo." },
          "<b>Jorren Vael, capitán del Alba Marchita.</b> <i>«El mar no castiga. Solo devuelve lo que uno lanza a sus aguas.»</i> Veterano de la Marina del Reino de Tharn en la Guerra de las Mareas. Sereno, de humor seco y melancólico, no es un hombre de fe, pero sí de promesas. Se mueve en los círculos de la Cofradía, aunque no siempre comparte sus métodos: más contrabandista con principios que saqueador.",
          { img: "pnj-alba-marchita", t: "<b>El Alba Marchita.</b> <i>«No fue construido... fue rescatado. Cada tabla, cada vela, cada clavo parece haber pertenecido a un barco distinto. Por eso el mar nunca sabe si hundirlo o dejarlo pasar.»</i> Corbeta ligera de tres palos, de madera ennegrecida por la sal y velas gris ceniza llenas de parches, reparada con piezas de ingeniería thalyssariana, madera de otros barcos y metal arcano. Su mascarón, una mujer erosionada con el rostro cubierto por un velo metálico, dicen que llora con la marea alta. Es ágil y se cuela en fiordos y nieblas donde otros no se atreven. Los marineros aseguran que el barco respira. Su tripulación la forman Varr Tulek, Mekra «Tuerca», Lirieth y las gemelas Ribbet." },
          { img: "pnj-hijos-del-yugo", audio: "pnj-hijos-del-yugo", t: "<b>Los Hijos del Yugo.</b> Las Caravanas Rojas de los Arcontes: largas columnas de carros cubiertos de telas rojas que cruzan estepas y desiertos escoltadas por jinetes encapuchados. Se dice que llevan almas hacia las fortalezas de hierro de los Arcontes. Nadie las detiene, y quien las sigue demasiado tiempo con la mirada suele lamentarlo." },
          { img: "pnj-ladrones-viento", t: "<b>Los Ladrones del Viento.</b> Bandidos de los Páramos, mercenarios zetarianos renegados que viven de asaltar caravanas y viajeros. Embozados en capas de arena y trapo, aparecen y desaparecen con las tormentas de polvo." }
        ]},
        { h: "Peculiaridades y peligros", ul: [
          "<b>Tormentas de Vidrio.</b> Ráfagas que levantan arena mezclada con fragmentos de cristal afilado.",
          "<b>Oasis Envenenados.</b> Manantiales contaminados deliberadamente por clanes rivales.",
          "<b>Caravanas Fantasma.</b> Restos malditos de expediciones que nunca regresaron.",
          "<b>El canal de Los Centinelas.</b> Solo es seguro a ciertas horas de marea: equivocarse de hora puede costar el casco de un barco.",
          "<b>El vigía caído.</b> Superstición local: quien lo insulta de noche amanece con las botas empapadas, por lejos que haya dormido del agua."
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
      slug: "vargarda",
      title: "Vargärda",
      quote: "Aquí no se muere de frío. Se muere de viejo, de hierro o de olvido.",
      map: "img/vargarda-mapa.jpg",
      mapCaption: "Mapa de Vargärda, el Norte de Umbraelis",
      audio: "vargarda",
      sections: [
        { h: "Visión general", p: [
          "<b>Vargärda</b> es la tierra más al norte del continente: montañas de hierro, fiordos, bosques de niebla y valles donde la nieve aguanta la mitad del año. Ningún imperio la ha doblegado entera.",
          "Está repartida entre seis reinos que apenas se fían entre sí (<b>Valdrenn, Askelheim, Mörkald, Vårskald, Grimstahl y Kaldorn</b>) y varios pueblos que no responden a ningún trono."
        ]},
        { h: "Los Järvik, hijos del hierro", img: "vargarda-jarvik", p: [
          "Nórdicos de la Cordillera de Kartus y de la costa. No tienen rey: se organizan en clanes con un <b>jarl</b> elegido por sus hazañas, una <b>völva</b> que habla con los ancestros y una asamblea, el <b>Thing</b>, donde se decide la guerra y la paz.",
          "Para ellos la palabra es ley. El peor insulto es <i>argr</i> (cobarde), y negar hospitalidad a un viajero no se perdona."
        ], ul: [
          "<b>Eisenvöldr, el Pueblo del Hierro.</b> Forjadores que sueñan con reavivar las antiguas Forjas del Trueno. Los lidera el jarl <b>Ulfrik Martillo de Tormenta</b>, un gigante de barba roja trenzada con anillos de hierro que ríe a todas horas.",
          "<b>Bjarnheimr, el Hogar del Oso.</b> Cazadores y domadores de bestias, con sus berserkir.",
          "<b>Sköll.</b> Los clanes de la costa norte: marineros de drakkar que viven mirando al mar de las Cenizas."
        ]},
        { h: "Los Fírvath, guardianes de túmulos", img: "vargarda-firvath", p: [
          "Celtas y druidas que huyeron al norte cuando cayó su reino. No hay un alto rey: son muchos <i>tuatha</i> pequeños que se reúnen en <b>Samhain</b>, la noche de los muertos. No usan escritura, y la memoria del pueblo la guardan los bardos.",
          "Entierran a sus muertos sin quemarlos, porque creen que el cuerpo debe seguir entero para la otra vida. Sus druidas piden permiso a los espíritus en vez de someterlos, y esa es la gran diferencia entre ellos y los nigromantes.",
          "Su autoridad suprema en el festival de Carn Dara es la gran druida <b>Scáthach</b>, de 128 años y sangre élfica, que habla poco pero cuyas palabras pesan."
        ]},
        { h: "Los Aelvari del Norte, elfos de hielo", img: "vargarda-aelvari", p: [
          "Una colonia élfica que quedó aislada del mar hace siglos y acabó haciéndose vikinga: barbas, trenzas, tatuajes rúnicos azules, hachas y arcos compuestos. Siguen siendo elfos y viven cientos de años, pero la mayoría ya no recuerda el nombre de la tierra de la que partieron.",
          "Su proverbio dice: <i>«Bailamos con lobos porque los cisnes nos abandonaron.»</i> <b>Salthavn</b>, su ciudad, está ocupada, y los libres se esconden en los Bosques de Niebla.",
          "Los de la niebla los lidera <b>Astrid Runa-Sangre</b>, völva y guerrera de 156 años con tatuajes rúnicos que brillan al combatir."
        ]},
        { h: "El Señor del Norte: Dómari", p: [
          "<b>Dómari el Inmutable</b>, Arconte del Orden Eterno, gobierna Vargärda con una convicción: <i>«El caos destruyó el mundo antiguo. Solo el Orden Perfecto nos salvará.»</i> Su crueldad no es un arrebato sino un procedimiento: toda atrocidad se hace con papeles, sellos y sentencia, y no hay clemencia, solo protocolo. Su gran obra es borrar las tradiciones y religiones antiguas.",
          "Todo vargärdiano nace con el <b>Sello de la Obediencia</b>, una marca necromántica que permite rastrear a quien la porta y susurrarle al pensamiento. Solo fallan en las <i>zonas ciegas</i> que crean los huesos primordiales de Kartus. La única fe permitida es el <b>Culto de la Trascendencia Oscura</b>, cuyos templos son auditorios donde se recitan códigos legales como oraciones."
        ], ul: [
          { img: "pnj-domari", t: "<b>Dómari el Inmutable.</b> Arconte del Orden Eterno y Señor del Norte." }
        ]},
        { h: "La Reina Ylvara", ul: [
          { img: "pnj-ylvara", t: "<b>Ylvara, la Reina del Hielo Eterno.</b> Segunda Arconte del Norte, cazadora primordial que domina el clima y las tormentas. Vive en el Corazón Congelado, un glaciar al noreste, y se alimenta de la sangre de titanes y criaturas primordiales. Dómari ordena Vargärda; Ylvara la cosecha." }
        ]},
        { h: "Los tres pilares del régimen", img: "vargarda-orden-ascension", ul: [
          "<b>La Orden de la Ascensión</b> (el brazo militar). La manda <b>Hrotgar Cadenas-Rotas</b>, un antiguo guerrero tribal que traicionó a su propio clan. Ejecutan sentencias y guardan los nodos con armaduras de hueso primordial.",
          "<b>Los Inquisidores</b> (el brazo judicial). Los dirige <b>Ylva la Ciega</b>, una völva que «vio demasiado»: sus ojos vacíos sangran tinta negra y lee la culpa tocando las almas.",
          { img: "pnj-erasmus", t: "<b>El Culto de la Trascendencia Oscura</b> (el control ideológico). Lo encabeza <b>Erasmus el Purificado</b>, refugiado del sur y fanático convencido de voz monótona, que destruye reliquias antiguas en ceremonias públicas." }
        ]},

        { h: "Los Cosechadores", img: "vargarda-cosechadores", p: [
          "Mercenarios a sueldo de Ylvara que cumplen un cupo mensual de cautivos y sangre primordial. Cazan con arpones, redes y cadenas, y transportan a sus presas en jaulas sobre trineos. Dómari los tolera porque sirven a su aliada."
        ]},
        { h: "Steinborg, la capital", img: "vargarda-steinborg", p: [
          "Ciudad interior en las estribaciones de Kartus, sin salida al mar. Fue la ciudad fortificada más próspera del norte y nunca fue conquistada: abrió sus puertas voluntariamente cuando Dómari llegó ofreciendo orden en una época de caos. Hoy es una capital administrativa de silencio opresivo: patrullas e inspectores en cada esquina, viviendas asignadas por jerarquía y colores apagados obligatorios, porque lo brillante es vanidad y se multa.",
          "En el extremo norte se alza la <b>Torre Negra</b>, cincuenta pisos de obsidiana sin ventanas y con runas que brillan de noche. Emite un zumbido constante que todos sienten. Solo la pisan los tres líderes, y nadie la mira directamente."
        ]},

        { h: "Morbingborg", img: "vargarda-morbingborg", p: [
          "Fortaleza de los Aetheris en la Cordillera de Kartus, de piedra blanca y cristal bruñido. Sus monasterios guerreros custodian linajes antiguos y bestias primordiales, y pocos forasteros pasan de sus puertas."
        ]},
        { h: "Carn Dara", img: "vargarda-carn-dara", p: [
          "Enclave sagrado fírvath de cinco grandes dólmenes y nodo de poder druídico. Cada año acoge una asamblea y un festival donde se reúnen Järvik, Fírvath, Aelvari, Grimstahl y una delegación aetheris. Hay juegos de escudo y skaldos, y lo preside la gran druida Scáthach."
        ]},
        { h: "Lugares", ul: [
          "<b>Salthavn.</b> Puerto de longhouses con tallas élficas, hoy bajo vigilancia y con barrio cerrado.",
          "<b>Bosques de Niebla Eterna.</b> Aldeas en las copas de los árboles que la niebla esconde de los extraños.",
          "<b>Cordillera de Kartus.</b> Cuevas, forjas y refugios donde se mezclan todos los pueblos del norte.",
          "<b>Colinas de Brenna y Valles de Tir-Avel.</b> Tierras fírvath, de fortalezas de colina y graneros."
        ]},
        { h: "Costumbres", p: [
          "Funerales de fuego y de barco, bodas en las que los novios se intercambian armas en lugar de anillos, y festines de tres días.",
          "Las runas azules protegen, las rojas dan furia, las blancas honran a los ancestros y las negras están prohibidas salvo en guerra."
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
          "El <b>Mar de las Cenizas</b> es un mar interior de aguas grises que separa los Páramos del Sur de Zetyar e Issardi. Una bruma perpetua cubre el horizonte y las olas rompen con un sonido hueco, como si algo las ahogara desde abajo.",
          "Nadie lo cruza sin pagar algo: a los piratas, a la Armada, o al propio mar."
        ]},
        { h: "Historia", p: [
          "Antes de la Primera Ascensión era una ruta comercial vital entre ciudades-estado costeras. Durante la guerra, los Arcontes hundieron aquí una flota enemiga junto con un artefacto prohibido, y la maldición convirtió sus aguas en una tumba líquida que nunca se calma.",
          "En noches sin luna se ve a los barcos hundidos navegar de nuevo, tripulados por esqueletos envueltos en algas, en busca de venganza contra cualquier embarcación viva."
        ]},
        { h: "El mar y sus corrientes", img: "fauces-grises", ul: [
          "<b>La Corriente Muda.</b> Una corriente sin oleaje ni ruido, la ruta de los contrabandistas: cualquier vigía oye una tormenta, pero nadie oye el silencio.",
          "<b>Las Fauces Grises.</b> Remolinos alrededor de las ruinas de Thalyssar, provocados por las torres hundidas. Solo pasan los pilotos que conocen la ruina de memoria.",
          "<b>La Resaca de Ubídume.</b> En ciertas noches, sin viento, el agua tira hacia una fosa sin nombre en el centro del mar. Los barcos arrastrados no reaparecen, y a veces sí su tripulación, muerta y con los ojos abiertos, semanas después y muy lejos.",
          "<b>La Sed de Profundidad.</b> Un impulso de arrojarse al agua y dejarse hundir, que se agrava junto a las Fauces y la Resaca."
        ]},
        { h: "La Armada de Kharzul", img: "armada-kharzul", p: [
          "Corsarios infernis al servicio de Zetyar, financiados por los Arcontes. No se consideran piratas: «cobramos lo que se nos debe». Escoltan los convoyes de oro, esclavos y Gemas de Sangre, cazan a los capitanes de la Cofradía y vigilan el mar. Cada nave la manda un caudillo infernis cuya lealtad se compra con botín, no con ideales."
        ], ul: [
          { img: "pnj-roskar", t: "<b>Almirante Roskar Fauces de Hierro.</b> Caudillo infernis al mando de la flota. Cruel con el enemigo, frío con los suyos, y cumple su palabra al pie de la letra." }
        ]},
        { h: "La Cofradía de las Cenizas", p: [
          "Confederación inestable de cuadrillas piratas que comparten rutas y enemigos pero compiten por el mismo botín. Todos juran el <b>Código Sangriento</b>: no se traiciona en la Cala, el mar cobra su parte antes de zarpar, y un eco (una deuda de honor) no se rompe dos veces."
        ], ul: [
          "<b>Larissa, el Eco Roto</b> (Cala del Vigía Caído) y <b>Jorren Vael</b> (El Alba Marchita): los encuentras en Páramos del Sur.",
          "<b>Kaeron, el Yunque del Rosario.</b> Antiguo sargento fronterizo de Karthane que desertó hace veinte años y nunca ha dicho por qué. Manda la cuadrilla más numerosa con disciplina de cuartel, y gobierna <i>La Penitencia</i>, un galeón capturado a la Armada.",
          { img: "pnj-kessa", t: "<b>Kessa «Diente de Anzuelo».</b> Antigua esclava de las minas de Kharzul. Capitanea Los Descosidos, fugitivos sin barco fijo que roban naves para financiar la fuga de otros." }
        ]},
        { h: "Los Vigías de la Bruma", p: [
          "Solitarios y penitentes en islotes y ruinas que encienden fuegos de aviso. No luchan ni comercian con cualquiera, y venden información a quien se la merece. La más antigua es <b>Maren Sinluz</b>, ciega desde hace veinte años, que «ve» el mar en el humo de sus fuegos."
        ]},
        { h: "Las Ruinas de Thalyssar", img: "thalyssar-aerea", p: [
          "Un archipiélago entero de torres ciclópeas medio sumergidas, de la que la Cala del Vigía Caído es solo la entrada más accesible. Con la marea baja se ven calles bajo el agua y cámaras secas que aún guardan reliquias del imperio caído. Aquí se alzan los <b>Faros Ciegos</b>: tres torres cuyos antiguos vigías nunca dejaron su puesto, ni siquiera después de morir. Puedes leer más sobre ellas en Páramos del Sur."
        ]},
        { h: "El Rosario Roto", img: "rosario-roto", p: [
          "Una península fortificada con un castillo reconvertido en fortaleza pirata, la capital no oficial de la Cofradía. La protegen los <b>Bajíos del Rosario</b>, un laberinto de rocas apenas bajo el agua con solo dos o tres canales seguros, y solo con marea baja: ninguna nave pesada llega sin encallar."
        ]},
        { h: "Isla de las Manos Quemadas", img: "manos-quemadas", p: [
          "El único puerto neutral del mar, en una caldera volcánica extinta. Sus paredes de roca negra están cubiertas de manos quemadas por los piratas que sellaron tratos a fuego. Aquí no hay banderas, solo precios, y quien rompe la neutralidad es cazado por todas las cuadrillas a la vez."
        ]},
        { h: "La Deriva", img: "la-deriva", p: [
          "Un pueblo flotante de decenas de barcos unidos con cadenas y pasarelas podridas. Allí viven refugiados de Thalyssar, desertores de Kharzul y fugitivos de las minas, sin lealtad a nadie y comerciando con todos cuando conviene sobrevivir."
        ]},
        { h: "Kharzul", img: "kharzul", p: [
          "Fuerte naval tallado en un acantilado de basalto en la costa de Zetyar, con grúas de hierro, astilleros y una guarnición infernis. Menos ciudad que campamento militar: ningún extraño es bienvenido."
        ]},
        { h: "Otros lugares y peligros", ul: [
          "<b>Los Bajíos del Lamento.</b> Arrecifes y cementerio de naufragios donde anidan las Sirenas del Lamento, que cantan con voces de seres queridos perdidos.",
          "<b>Tierras Muertas.</b> Una isla volcánica cubierta de ceniza gris donde no crece ni anida nada. Nadie vive en el interior, y quien se queda demasiado no siente miedo, sino indiferencia.",
          "<b>Pólvora de Sangre.</b> Los cañones disparan Gemas de Sangre molidas y hueso calcinado: un fogonazo rojo oscuro, olor a metal quemado, y detonaciones traicioneras.",
          "<b>Tormentas de Ceniza, barcos fantasma</b> y el espectro del <b>Faro Hundido</b>, que guía a las naves a su perdición."
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
        { h: "El reino de los Dioses Antiguos", img: "issardi-ruinas", p: [
          "<b>Issardi</b> tomó el nombre de su capital: devoto de los Dioses Antiguos, con templos de piedra dorada, altares que bendecía Neyra y una guardia sagrada, los <b>Escudos del Alba</b>. Cayó en la <b>Guerra de la Última Aurora</b>, y sobre el mapa entero se extendió el nombre de los vencedores.",
          "Hoy está en el extremo suroeste de <a href=\"#/zetyar\">Zetyar</a>, la isla que lleva el nombre de quienes la ganaron."
        ]},
        { h: "Lo que queda", img: "issardi-vestigios", p: [
          "Familias que aún cultivan entre las ruinas de la <b>Estepa de los Vestigios</b> y la soldadesca que las saquea con regularidad. Viejos sacerdotes que rezan a Neyra bajo columnas que ya no sostienen frontones sino cielo. Y santuarios sellados que nadie ha abierto todavía.",
          "Lo que esos sacerdotes esperan no es una restauración: esperan a quien reclame la herencia de Kaén y convoque a los Dioses Antiguos a un Pacto nuevo."
        ]},
        { h: "Neyra, la Tejedora", p: [
          "Diosa de la memoria y el tiempo. Bendijo los altares de Issardi y retiró su protección cuando el reino rompió los Pactos, los acuerdos que lo ligaban a los Dioses Antiguos. No tiene templo en pie ni clero organizado, y sus fieles esperan un Pacto nuevo, no una respuesta."
        ]},
        { h: "Las reliquias", p: [
          "Los <i>sancta sanctorum</i> de Issardi se sellaron con sus reliquias dentro, y no todos han sido encontrados. Cada reliquia tiene su bendición, su límite y su voz: el rito o el gesto que la despierta. Una reliquia empleada para herir a una criatura viva, o entregada a cambio de algo, se apaga, y ninguna apagada ha vuelto a despertar."
        ], ul: [
          "<b>Nymuerú, el que Guarda las Horas.</b> Sacerdote de Neyra entre las ruinas. Conserva qué sabe cada reliquia por la que se le pregunta y cuál es su rito. No quiere la restauración del reino: quiere que las horas se digan a tiempo, aunque no las oiga nadie.",
          "<b>Orrik de Issardi.</b> Hijo de humana e infernis, es la prueba de lo que la isla hace con los mestizos: los zetarianos lo llaman el Renegado y los issardinos lo tratan como enemigo."
        ]}
      ]
    },

    {
      slug: "zetyar",
      title: "Zetyar",
      quote: "No hay tronos aquí, solo estandartes sobre ruinas.",
      sections: [
        { h: "La isla que cambió de nombre", img: "zetyar-campamentos", p: [
          "<b>Zetyar</b> se llama así por quienes la ganaron. Antes se llamó Sarakin, y en ella hubo un reino verdadero, <a href=\"#/issardi\">Issardi</a>.",
          "Hoy es un no-reino: un conjunto de tribus infernis nómadas, cada una con su jefe y sus guerras por las estepas. Solo las unen dos cosas, el culto a los Arcontes y la renta de las minas. Son malos ingenieros y tienen pocas construcciones estables: viven en campamentos militares y mueven sus rebaños por un territorio nominalmente suyo, demasiado vasto, hostil y poblado para someterlo del todo."
        ]},
        { h: "Las Minas Agunara", p: [
          "El único yacimiento de <b>Gemas de Sangre</b> de Umbraelis, los catalizadores del alma que alimentan la nigromancia de los Arcontes. De ellas salen también diamantes y el hierro con que se forjan las armas, y su comercio financia directamente a las Torres Negras.",
          "Nadie ha cartografiado Agunara por dentro: son siglos de galerías abiertas sin plan, y solo saben cuáles se comunican quienes bajan a picar. Quien controla Agunara tiene a Ubídume por la garganta."
        ]},
        { h: "Kharzul y Puerto Cadenas", img: "zetyar-kharzul", p: [
          "<b>Kharzul</b> es el fuerte de la costa oriental, tallado en un acantilado de basalto y levantado hace una generación. Es la base de la Armada y su única salida al mar. Inexpugnable.",
          "<b>Puerto Cadenas</b>, pequeño y sin murallas, es por donde entra la mano de obra encadenada que nunca vuelve a embarcar. Los barcos de esclavos no atracan en Kharzul, y entre ellos viaja el contrabando."
        ]},
        { h: "La Armada y las rutas del Yugo", img: "zetyar-armada", p: [
          "La <b>Armada de Kharzul</b> asegura que los convoyes de Gemas de Sangre, diamantes, armas y «personalidades» lleguen a la Gran Necrópolis de Ubídume. Hay dos caminos, las <b>rutas del Yugo</b>, nombre de la organización que trafica con esclavos y gemas:"
        ], ul: [
          "<b>La travesía directa.</b> Por mar abierto a través del Mar de las Cenizas: rápida y barata, y más peligrosa cuanto más se ciñe al suroeste, hacia los cazaderos de la Cofradía.",
          "<b>El Camino de Ceniza.</b> Un rodeo por el norte hasta un puerto fuera de carta cerca de Karthane, y el resto por tierra. Lento, caro y fuera del alcance de la Cofradía."
        ]},
        { h: "Lo que no hay en otra parte", img: "zetyar-convoy", ul: [
          "<b>Las Atalayas del Sur.</b> Torres zetarianas que anuncian las incursiones con espejos de día y fuego de noche, mirando a las montañas porque el sur es la dirección que toma el fugitivo.",
          "<b>La Guarida de los Lobos.</b> Contrabandistas y salteadores de las montañas del sur, con el lobo rojo, endémico de la isla, por emblema.",
          "<b>La Ciudadela de Kherker.</b> Fortaleza sobre la estepa que sirve de guarnición, depósito y prisión. Se cuentan historias de mazmorras bajo ella y de una ciudad subterránea.",
          "<b>La Selva del Crepúsculo y el Río de la Serpiente de los Reflejos.</b> Una selva impenetrable llena de criaturas que todos evitan; se dice que sus aguas vuelven translúcido a quien las toca."
        ]},
        { h: "Tres religiones", ul: [
          "<b>La Trascendencia Oscura.</b> La fe oficial de los Arcontes: no pide fe, pide suministro.",
          "<b>Vortu, el Dios Desterrado.</b> El dios del código de guerra zetariano, que es liturgia más que ética.",
          "<b>Neyra, la Tejedora.</b> Diosa de la memoria y el tiempo, protectora de la Issardi caída."
        ]},
        { h: "Ser infernis aquí", p: [
          "En el resto de Umbraelis un infernis es un infernis. En Zetyar es el rostro de quien ganó la guerra, y abre puestos de control sin dar explicaciones. Pero sin tribu no eres nadie: Zetyar no es un pueblo, sino una confederación de campamentos, y un infernis sin tribu es una criatura con cuernos y sin quien responda por él.",
          "Los humanos son el sustrato: pastores, campesinos que pagan, cuerpos que entran por Puerto Cadenas. Solo hay dos excepciones, los Lobos, que eligieron no servir, y lo que queda de Issardi."
        ]},
        { h: "Figuras", ul: [
          "<b>Irvenna Pelaje de Duna.</b> Cabecilla de una banda de Lobos en las montañas del sur, de una familia de los Vestigios. Conoce cuánto tarda cada aviso de las atalayas en llegar al campamento más cercano.",
          "<b>Doreth la Manifiesta.</b> Contrabandista de Puerto Cadenas cuyo negocio consiste en que el papel diga «esclavos» y nadie mire."
        ]}
      ]
    }
  ]
};
