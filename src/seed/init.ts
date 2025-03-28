import { Checklist } from '../models/checklist.model';
import { LeaderChecklist } from '../models/leader-checklist.model';

export const init = async () => {
  try {
    const count = await Checklist.estimatedDocumentCount();

    if (count > 0) {
      return;
    }

    await Promise.all([
      new Checklist({
        title: 'Disfruto',
        items: [
          {
            number: 1,
            text: 'Desarrollando planes detallados para llevar a cabo ciertos objetivos.',
            score: [0,1,2,3,4],
          },
          {
            number: 2,
            text: 'Integrándome en otras culturas y adaptándome a su forma de vida.',
            score: [0,1,2,3,4],
          },
          {
            number: 3,
            text: 'Viviendo sin casarme o sin hijos. (si está casado marque la columna de la derecha)',
            score: [0,1,2,3,4],
          },
          {
            number: 4,
            text: 'Evaluando declaraciones hechas por otros cristianos para determinar si pueden llevar a la iglesia por mal camino.',
            score: [0,1,2,3,4],
          },
          {
            number: 5,
            text: 'Hablando con no creyentes sobre Jesús y mi relación con él.',
            score: [0,1,2,3,4],
          },
          { number: 6, text: 'Animando a otros.', score: [0,1,2,3,4] },
          {
            number: 7,
            text: 'Formulando metas que les pueden parecer irreales a los demás y tratando de alcanzarlas de manera sistemática.',
            score: [0,1,2,3,4],
          },
          {
            number: 8,
            text: 'Compartiendo mi dinero y mis posesiones generosamente para la extensión del reino de Dios.',
            score: [0,1,2,3,4],
          },
          {
            number: 9,
            text: 'Interviniendo para liberar a otros de influencias demoníacas.',
            score: [0,1,2,3,4],
          },
          {
            number: 10,
            text: 'Orando con regularidad por la curación de enfermos.',
            score: [0,1,2,3,4],
          },
          {
            number: 11,
            text: 'Elaborando y utilizando materiales que ayuden a los demás a aprender de manera sencilla e interesante.',
            score: [0,1,2,3,4],
          },
          { number: 12, text: 'Hablando en lenguas.', score: [0,1,2,3,4] },
          {
            number: 13,
            text: 'Ayudando a los demás a analizar su propia situación.',
            score: [0,1,2,3,4],
          },
          {
            number: 14,
            text: 'Llevando un estilo de vida modesto.',
            score: [0,1,2,3,4],
          },
          {
            number: 15,
            text: 'Reparando cosas y manteniéndolas en buen estado.',
            score: [0,1,2,3,4],
          },
          {
            number: 16,
            text: 'Trabajando en la retaguardia para ayudar a otros que están desempeñando un ministerio más visible.',
            score: [0,1,2,3,4],
          },
          {
            number: 17,
            text: 'Dando la bienvenida incluso a los invitados inesperados y ofreciéndoles comida y alojamiento.',
            score: [0,1,2,3,4],
          },
          {
            number: 18,
            text: 'Pasando una hora o más en oración.',
            score: [0,1,2,3,4],
          },
          {
            number: 19,
            text: 'Oyendo lo que Dios nos quiere comunicar cuando alguien habla en lenguas.',
            score: [0,1,2,3,4],
          },
          {
            number: 20,
            text: 'Pasando mucho tiempo estudiando para adquirir nuevos conocimientos.',
            score: [0,1,2,3,4],
          },
          {
            number: 21,
            text: 'Dirigiendo a la gente para que aprendan a trabajar juntos en la consecución de un objetivo común.',
            score: [0,1,2,3,4],
          },
          {
            number: 22,
            text: 'Mostrando una actitud positiva hacia la vida en medio del sufrimiento y el dolor.',
            score: [0,1,2,3,4],
          },
          {
            number: 23,
            text: 'Ocupándome de los que están al margen de la sociedad.',
            score: [0,1,2,3,4],
          },
          { number: 24, text: 'Orando por lo sobrenatural.', score: [0,1,2,3,4] },
          {
            number: 25,
            text: 'Ayudando a resolver problemas en otras iglesias.',
            score: [0,1,2,3,4],
          },
          {
            number: 26,
            text: 'Preocupándome por el bienestar espiritual de otros cristianos y ayudándoles en su desarrollo espiritual.',
            score: [0,1,2,3,4],
          },
          {
            number: 27,
            text: 'Sirviendo de portavoz de Dios para ofrecer una dirección clara en situaciones concretas.',
            score: [0,1,2,3,4],
          },
          {
            number: 28,
            text: 'Asumiendo responsabilidades menores y aparentemente sin importancia dentro de la iglesia.',
            score: [0,1,2,3,4],
          },
          {
            number: 29,
            text: 'Trabajando mucho para desarrollar mis habilidades musicales.',
            score: [0,1,2,3,4],
          },
          {
            number: 30,
            text: 'Expresando mis pensamientos y sentimientos por medios artísticos (ej. teatro, pantomima, pintura, gráficos, etc.)',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
      new Checklist({
        title: 'Me gustaría más que hasta ahora',
        items: [
          {
            number: 31,
            text: 'Planear de forma independiente proyectos para la iglesia y reclutar a la gente necesaria para llevarlos a cabo con éxito.',
            score: [0,1,2,3,4],
          },
          {
            number: 32,
            text: 'Mantener contacto con gente de otras culturas.',
            score: [0,1,2,3,4],
          },
          {
            number: 33,
            text: 'Descubrir si es la voluntad de Dios que yo me mantenga soltero.',
            score: [0,1,2,3,4],
          },
          {
            number: 34,
            text: 'Evaluar lo que dicen otros cristianos para estar seguro de que se ajusta a las Escrituras.',
            score: [0,1,2,3,4],
          },
          {
            number: 35,
            text: 'Hablar con no creyentes sobre la fe en Cristo.',
            score: [0,1,2,3,4],
          },
          {
            number: 36,
            text: 'Preocuparme por alguien que esté pasando un mal momento.',
            score: [0,1,2,3,4],
          },
          {
            number: 37,
            text: 'Ver que la voz cantante en mi iglesia la llevan las “personas con visión”.',
            score: [0,1,2,3,4],
          },
          {
            number: 38,
            text: 'Estar en contacto con personas y proyectos que necesitan asistencia financiera.',
            score: [0,1,2,3,4],
          },
          {
            number: 39,
            text: 'Permitir que Dios me utilice en su batalla contra los poderes demoníacos.',
            score: [0,1,2,3,4],
          },
          {
            number: 40,
            text: 'Servir de instrumento para las curaciones sobrenaturales de Dios.',
            score: [0,1,2,3,4],
          },
          {
            number: 41,
            text: 'Utilizar mi tiempo para comunicar mis conocimientos y mis habilidades a otros cristianos.',
            score: [0,1,2,3,4],
          },
          {
            number: 42,
            text: 'Ir más allá del nivel racional y hablar con Dios y adorarlo en lenguas diferentes.',
            score: [0,1,2,3,4],
          },
          {
            number: 43,
            text: 'Ayudar a la gente y/o a las organizaciones a encontrar los medios más efectivos para alcanzar sus objetivos.',
            score: [0,1,2,3,4],
          },
          {
            number: 44,
            text: 'Reducir significativamente mi nivel de vida.',
            score: [0,1,2,3,4],
          },
          {
            number: 45,
            text: 'Hacer algo práctico para Dios con mis manos.',
            score: [0,1,2,3,4],
          },
          {
            number: 46,
            text: 'Apoyar a otros cristianos utilizando mis dones para mejorar su ministerio.',
            score: [0,1,2,3,4],
          },
          {
            number: 47,
            text: 'Proporcionar una atmósfera acogedora en mi casa para los desconocidos.',
            score: [0,1,2,3,4],
          },
          {
            number: 48,
            text: 'Dedicar mucho tiempo a la oración.',
            score: [0,1,2,3,4],
          },
          {
            number: 49,
            text: 'Ser utilizado para interpretar lo que otros dicen en lenguas para que todo el mundo pueda entenderlo.',
            score: [0,1,2,3,4],
          },
          {
            number: 50,
            text: 'Recopilar y valorar ideas que sean importantes para el cuerpo de Cristo.',
            score: [0,1,2,3,4],
          },
          { number: 51, text: 'Ocuparme en tareas de liderazgo.', score: [0,1,2,3,4] },
          {
            number: 52,
            text: 'Estar dispuesto para afrontar situaciones en las cuales la fe conlleva sacrificios personales.',
            score: [0,1,2,3,4],
          },
          {
            number: 53,
            text: 'Implicarme más con personas que normalmente están siendo descuidadas o son rechazadas por la sociedad.',
            score: [0,1,2,3,4],
          },
          {
            number: 54,
            text: 'Experimentar que Dios trabaja en mí para obrar señales y milagros.',
            score: [0,1,2,3,4],
          },
          {
            number: 55,
            text: 'Participar en la creación de nuevas iglesias para alcanzar así a personas que de otro modo nunca serían alcanzadas.',
            score: [0,1,2,3,4],
          },
          {
            number: 56,
            text: 'Hacer compañía a otros cristianos para ayudarles a crecer en la fe.',
            score: [0,1,2,3,4],
          },
          {
            number: 57,
            text: 'Mostrar a otros cristianos cuál es la voluntad de Dios en situaciones concretas.',
            score: [0,1,2,3,4],
          },
          {
            number: 58,
            text: 'Implicarme en tareas concretas dentro de la iglesia, donde y cuando sea necesario.',
            score: [0,1,2,3,4],
          },
          {
            number: 59,
            text: 'Servir a Dios con mi capacidad musical.',
            score: [0,1,2,3,4],
          },
          {
            number: 60,
            text: 'Expresar mis sentimientos de una manera creativa, como por ejemplo con el teatro, la pintura, la alfarería, la danza, etc.',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
      new Checklist({
        title: 'He tenido la experiencia',
        items: [
          {
            number: 61,
            text: 'de ser capaz de desarrollar planes que han hecho posible la realización de una tarea en la iglesia de forma más eficiente.',
            score: [0,1,2,3,4],
          },
          {
            number: 62,
            text: 'de que las personas de otras culturas se han sentido atraídas por mí.',
            score: [0,1,2,3,4],
          },
          {
            number: 63,
            text: 'de tener más energía para dedicarme a Dios por ser soltero (Si está casado marque la columna de la derecha).',
            score: [0,1,2,3,4],
          },
          {
            number: 64,
            text: 'de haber sido capaz de reconocer los motivos falsos que se escondían tras palabras aparentemente espirituales.',
            score: [0,1,2,3,4],
          },
          {
            number: 65,
            text: 'de haber sido utilizado por Dios para conducir a otros hacia Jesucristo.',
            score: [0,1,2,3,4],
          },
          {
            number: 66,
            text: 'de que otros se hayan sentido reconfortados gracias a mí.',
            score: [0,1,2,3,4],
          },
          {
            number: 67,
            text: 'que otros me hayan tomado por “loco” por ponerme metas utópicas.',
            score: [0,1,2,3,4],
          },
          {
            number: 68,
            text: 'de haber sido capaz de ayudar a otros dándoles una parte significativa de mi dinero.',
            score: [0,1,2,3,4],
          },
          {
            number: 69,
            text: 'de que otros se han visto liberados de cierto tipo de esclavitud espiritual gracias a mis oraciones.',
            score: [0,1,2,3,4],
          },
          {
            number: 70,
            text: 'de que Dios ha curado a enfermos, tanto psíquicos como físicos, por los cuales yo había orado.',
            score: [0,1,2,3,4],
          },
          {
            number: 71,
            text: 'de que otros cristianos me han dicho que soy capaz de compartir mis conocimientos de forma interesante.',
            score: [0,1,2,3,4],
          },
          {
            number: 72,
            text: 'de haber hablado con Dios en una lengua desconocida.',
            score: [0,1,2,3,4],
          },
          {
            number: 73,
            text: 'de que otros me han pedido ayuda para resolver asuntos complicados, y he sido capaz de ayudarles.',
            score: [0,1,2,3,4],
          },
          {
            number: 74,
            text: 'de haber contactado con más facilidad que otros con personas pobres porque llevo un tipo de vida más sencilla.',
            score: [0,1,2,3,4],
          },
          {
            number: 75,
            text: 'de haber sido capaz de ayudar a los demás con mi habilidad manual.',
            score: [0,1,2,3,4],
          },
          {
            number: 76,
            text: 'de que los líderes cristianos han sido más eficientes en sus ministerios cuando yo les he ayudado a realizar algunas de sus tareas.',
            score: [0,1,2,3,4],
          },
          {
            number: 77,
            text: 'de que la gente disfruta reuniéndose en mi casa más que haciéndolo en otros lugares.',
            score: [0,1,2,3,4],
          },
          {
            number: 78,
            text: 'de que Dios ha actuado cuando yo he orado por algún motivo específico.',
            score: [0,1,2,3,4],
          },
          {
            number: 79,
            text: 'de que mi interpretación de lengua ha sido particularmente relevante en algunas situaciones.',
            score: [0,1,2,3,4],
          },
          {
            number: 80,
            text: 'de haber sido el primero en proponer una idea que más tarde ha resultado particularmente eficaz.',
            score: [0,1,2,3,4],
          },
          {
            number: 81,
            text: 'de haber sido capaz de motivar a otros cristianos para conseguir ciertos objetivos.',
            score: [0,1,2,3,4],
          },
          {
            number: 82,
            text: 'de que otros individuos se han fortalecido gracias a mis propias experiencias dolorosas.',
            score: [0,1,2,3,4],
          },
          {
            number: 83,
            text: 'de haber sido capaz de ayudar a los necesitados de forma práctica.',
            score: [0,1,2,3,4],
          },
          {
            number: 84,
            text: 'de que Dios me ha utilizado como herramienta para obrar señales o milagros.',
            score: [0,1,2,3,4],
          },
          {
            number: 85,
            text: 'de que los líderes de otras iglesias han aceptado y aplicado mi consejo.',
            score: [0,1,2,3,4],
          },
          {
            number: 86,
            text: 'de ser capaz de ayudar a otros a crecer en su fe gracias a una relación duradera con ellos.',
            score: [0,1,2,3,4],
          },
          {
            number: 87,
            text: 'de que algunos cristianos han confirmado que el mensaje que compartí con ellos era un mensaje de Dios.',
            score: [0,1,2,3,4],
          },
          {
            number: 88,
            text: 'de haber identificado lo que había que hacer dentro de la iglesia, y después haberlo hecho yo mismo.',
            score: [0,1,2,3,4],
          },
          {
            number: 89,
            text: 'de que los demás han escuchado con emoción mientras yo ponía en práctica mis dotes musicales.',
            score: [0,1,2,3,4],
          },
          {
            number: 90,
            text: 'de ser capaz de expresar mis habilidades creativas (p. ej. escribir, pintar, teatro, etc.) para la gloria de Dios.',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
      new Checklist({
        title: 'La siguiente declaración me caracteriza',
        items: [
          {
            number: 91,
            text: 'Planifico mi día y dejó muy poco al azar.',
            score: [0,1,2,3,4],
          },
          {
            number: 92,
            text: 'Disfruto aprendiendo del estilo de vida de otras culturas.',
            score: [0,1,2,3,4],
          },
          {
            number: 93,
            text: 'Puedo identificarme con las palabras de Pablo cuando dice que otros deberían permanecer solteros.',
            score: [0,1,2,3,4],
          },
          {
            number: 94,
            text: 'Me inquieta cuando alguien afirma algo que es verdadero, pero lo hace por un motivo equivocado.',
            score: [0,1,2,3,4],
          },
          {
            number: 95,
            text: 'Me molesta mucho que muchos cristianos no comparten su fe con otros.',
            score: [0,1,2,3,4],
          },
          {
            number: 96,
            text: 'Cuando la gente me habla de sus problemas, suelo comprenderlos mejor que los demás.',
            score: [0,1,2,3,4],
          },
          {
            number: 97,
            text: 'Tengo claro que Dios siempre cumple sus promesas, incluso cuando las circunstancias parecen demostrar lo contrario.',
            score: [0,1,2,3,4],
          },
          {
            number: 98,
            text: 'A menudo me apetece formar parte de la solución cuando oigo hablar de que alguien tiene problemas financieros.',
            score: [0,1,2,3,4],
          },
          {
            number: 99,
            text: 'Me preocupa que muchos cristianos no tomen en cuenta la existencia de los demonios.',
            score: [0,1,2,3,4],
          },
          {
            number: 100,
            text: 'Me molesta mucho más que a otros cristianos que en la mayoría de las iglesias se ore poco por los enfermos.',
            score: [0,1,2,3,4],
          },
          {
            number: 101,
            text: 'Creo que es frustrante que haya tan pocos cristianos que sean capaces de expresar sus conocimientos de manera interesante.',
            score: [0,1,2,3,4],
          },
          {
            number: 102,
            text: 'Me siento cómodo en grupos en los que la gente ora en lenguas.',
            score: [0,1,2,3,4],
          },
          {
            number: 103,
            text: 'Disfruto ayudando a los demás a buscar respuesta a sus problemas.',
            score: [0,1,2,3,4],
          },
          {
            number: 104,
            text: 'Me incomoda que haya tantos cristianos con un nivel de vida muy alto.',
            score: [0,1,2,3,4],
          },
          {
            number: 105,
            text: 'Me molesta cuando veo que hay desperfectos en los edificios, en los equipos, en la ropa, etc.',
            score: [0,1,2,3,4],
          },
          {
            number: 106,
            text: 'Me satisface realizar tareas que a los demás no les gustan.',
            score: [0,1,2,3,4],
          },
          {
            number: 107,
            text: 'Me hace feliz recibir visitas inesperadas en mi casa, incluso cuando no está demasiado ordenada.',
            score: [0,1,2,3,4],
          },
          {
            number: 108,
            text: 'Me tomo en serio las peticiones de los demás y oró por ellas de forma regular.',
            score: [0,1,2,3,4],
          },
          {
            number: 109,
            text: 'Cuando alguien habla en lenguas yo oro para ser capaz de interpretar lo que dice.',
            score: [0,1,2,3,4],
          },
          {
            number: 110,
            text: 'Me gusta estudiar la Biblia y pensar en cómo aplicarla a situaciones actuales.',
            score: [0,1,2,3,4],
          },
          {
            number: 111,
            text: 'Cuando a un grupo le hace falta un líder, suelo hacerme cargo de él.',
            score: [0,1,2,3,4],
          },
          {
            number: 112,
            text: 'Me fascinan las historias de los mártires cristianos.',
            score: [0,1,2,3,4],
          },
          {
            number: 113,
            text: 'Si noto que hay una necesidad, deseo ayudar cuanto antes.',
            score: [0,1,2,3,4],
          },
          {
            number: 114,
            text: 'Oro para que Dios me utilice para obrar señales y milagros, como hacía con muchos cristianos del siglo primero.',
            score: [0,1,2,3,4],
          },
          {
            number: 115,
            text: 'Para mí es más importante que para los demás promover la unidad entre iglesias distintas.',
            score: [0,1,2,3,4],
          },
          {
            number: 116,
            text: 'Me molesta mucho que muchos creyentes están mal asistidos tanto espiritual como personalmente.',
            score: [0,1,2,3,4],
          },
          {
            number: 117,
            text: 'Oro para que Dios me proporcione un mensaje para los demás con más frecuencia de lo que lo ha hecho hasta ahora.',
            score: [0,1,2,3,4],
          },
          {
            number: 118,
            text: 'Noto cuando los demás necesitan algo, y siempre estoy deseoso de proporcionarles.',
            score: [0,1,2,3,4],
          },
          {
            number: 119,
            text: 'Me da pena que algunas iglesias den poco valor a la calidad de su música.',
            score: [0,1,2,3,4],
          },
          {
            number: 120,
            text: 'Es importante para mí que los cristianos decoren su ambiente de forma agradable (p. ej. sus lugares de reunión).',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
      new Checklist({
        title: 'Me resulta',
        items: [
          {
            number: 121,
            text: 'Desarrollar de forma individual proyectos de trabajo y de organización.',
            score: [0,1,2,3,4],
          },
          {
            number: 122,
            text: 'Establecer contacto con personas que tienen un estilo de vida completamente diferente al mío.',
            score: [0,1,2,3,4],
          },
          {
            number: 123,
            text: 'Negarme la posibilidad de formar una familia. (Si está casado marque la columna de la derecha).',
            score: [0,1,2,3,4],
          },
          {
            number: 124,
            text: 'Determinar si las palabras de una persona tienen origen divino, humano o satánico.',
            score: [0,1,2,3,4],
          },
          {
            number: 125,
            text: 'Advertir cuando una persona está lista para recibir el evangelio.',
            score: [0,1,2,3,4],
          },
          {
            number: 126,
            text: 'Llegar con facilidad a temas profundos con personas que apenas conozco.',
            score: [0,1,2,3,4],
          },
          {
            number: 127,
            text: 'Orar y trabajar por cosas que otros cristianos consideran imposibles.',
            score: [0,1,2,3,4],
          },
          {
            number: 128,
            text: 'Dar regularmente una parte significativa de mis recursos para extender el reino de Dios.',
            score: [0,1,2,3,4],
          },
          {
            number: 129,
            text: 'Reconocer si hay áreas de la vida de una persona influidas por el demonio.',
            score: [0,1,2,3,4],
          },
          {
            number: 130,
            text: 'Orar por los enfermos de manera concreta y personal.',
            score: [0,1,2,3,4],
          },
          {
            number: 131,
            text: 'Compartir información y conocimientos de manera lógica, interesante y fácil de entender.',
            score: [0,1,2,3,4],
          },
          {
            number: 132,
            text: 'Orar públicamente o hablar palabras inspiradas por Dios por medio de lenguas.',
            score: [0,1,2,3,4],
          },
          {
            number: 133,
            text: 'Aplicar el conocimiento teórico a una situación concreta.',
            score: [0,1,2,3,4],
          },
          { number: 134, text: 'Mantener un nivel de vida bajo.', score: [0,1,2,3,4] },
          {
            number: 135,
            text: 'Resolver problemas técnicos que normalmente necesitan un operario especializado.',
            score: [0,1,2,3,4],
          },
          {
            number: 136,
            text: 'Ayudar a la gente en su trabajo para que sean más eficaces en el desarrollo de su ministerio.',
            score: [0,1,2,3,4],
          },
          {
            number: 137,
            text: 'Hacer que las visitas se sientan “como en casa”.',
            score: [0,1,2,3,4],
          },
          {
            number: 138,
            text: 'Orar intensamente durante semanas o meses por unas necesidades determinadas.',
            score: [0,1,2,3,4],
          },
          {
            number: 139,
            text: 'Reconocer lo que Dios quiere decir cuando oigo a alguien hablar en lenguas.',
            score: [0,1,2,3,4],
          },
          {
            number: 140,
            text: 'Descubrir, formular y sistematizar hechos e ideas que pueden ser importantes para la vida de la iglesia.',
            score: [0,1,2,3,4],
          },
          { number: 141, text: 'Delegar tareas en los demás.', score: [0,1,2,3,4] },
          {
            number: 142,
            text: 'Aceptar el sufrimiento por causa de Cristo.',
            score: [0,1,2,3,4],
          },
          {
            number: 143,
            text: 'Expresar mi simpatía y comprensión hacia los necesitados.',
            score: [0,1,2,3,4],
          },
          { number: 144, text: 'Orar por señales y milagros.', score: [0,1,2,3,4] },
          {
            number: 145,
            text: 'Aconsejar a grupos o a iglesias sobre su situación espiritual.',
            score: [0,1,2,3,4],
          },
          {
            number: 146,
            text: 'Asesorar a un grupo de cristianos para que trabajen por la unidad.',
            score: [0,1,2,3,4],
          },
          {
            number: 147,
            text: 'Percibir cuál es la voluntad de Dios en situaciones específicas.',
            score: [0,1,2,3,4],
          },
          {
            number: 148,
            text: 'Implicarse en tareas que a los demás no les parecen demasiado atractivas.',
            score: [0,1,2,3,4],
          },
          {
            number: 149,
            text: 'Aprender a tocar un instrumento musical.',
            score: [0,1,2,3,4],
          },
          {
            number: 150,
            text: 'Ejercitar una forma creativa de comunicación como la pintura, el teatro, la pantomima, etc.',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
      new Checklist({
        title: 'Estoy dispuesto a',
        items: [
          {
            number: 151,
            text: 'Tomar parte en cursos de formación para mejorar mi capacidad de planificación, organización y delegación.',
            score: [0,1,2,3,4],
          },
          {
            number: 152,
            text: 'Trabajar en una cultura extraña, si se diera la oportunidad.',
            score: [0,1,2,3,4],
          },
          {
            number: 153,
            text: 'Permanecer soltero para servir mejor al reino de Dios. (Si está casado marque la columna de la derecha).',
            score: [0,1,2,3,4],
          },
          {
            number: 154,
            text: 'Pasar mucho tiempo previniendo a otros de posibles peligros.',
            score: [0,1,2,3,4],
          },
          {
            number: 155,
            text: 'Apuntarme a cursos para mejorar mi capacidad de llevar a la gente a la fe en Cristo.',
            score: [0,1,2,3,4],
          },
          {
            number: 156,
            text: 'Ocuparme con mayor esmero de aprender cómo aconsejar a los demás de una manera mejor.',
            score: [0,1,2,3,4],
          },
          {
            number: 157,
            text: 'Asumir tareas aun cuando impliquen ciertos riesgos.',
            score: [0,1,2,3,4],
          },
          {
            number: 158,
            text: 'Apoyar financieramente de forma regular a cristianos que estén implicados en causas que merezcan la pena.',
            score: [0,1,2,3,4],
          },
          {
            number: 159,
            text: 'Implicarme en la batalla contra los poderes satánicos.',
            score: [0,1,2,3,4],
          },
          {
            number: 160,
            text: 'Involucrarme en el ministerio de oración por los enfermos.',
            score: [0,1,2,3,4],
          },
          {
            number: 161,
            text: 'Leer más sobre la comunicación para poder mejorar mi habilidad de enseñar a otros.',
            score: [0,1,2,3,4],
          },
          {
            number: 162,
            text: 'Hablar en lenguas en público si Dios me da este don.',
            score: [0,1,2,3,4],
          },
          {
            number: 163,
            text: 'Invertir una cantidad considerable de tiempo ayudando a otras personas o grupos a la hora de tomar decisiones importantes.',
            score: [0,1,2,3,4],
          },
          {
            number: 164,
            text: 'Negarme a mí mismo la ropa cara, una casa cómoda y la buena comida si es necesario.',
            score: [0,1,2,3,4],
          },
          {
            number: 165,
            text: 'Ayudar con las reparaciones y los trabajos de mantenimiento de la iglesia.',
            score: [0,1,2,3,4],
          },
          {
            number: 166,
            text: 'Aliviar de tareas a los cristianos que están sobrecargados de trabajo ofreciéndoles mi propio tiempo y energía para ayudarles.',
            score: [0,1,2,3,4],
          },
          {
            number: 167,
            text: 'Abrir mi casa a los extraños más a menudo.',
            score: [0,1,2,3,4],
          },
          {
            number: 168,
            text: 'Trabajar en un grupo que ora de forma continuada por los demás.',
            score: [0,1,2,3,4],
          },
          {
            number: 169,
            text: 'Explicar en público el significado de lo que dicen los que hablan en lenguas si Dios me revela su significado.',
            score: [0,1,2,3,4],
          },
          {
            number: 170,
            text: 'Invertir más tiempo en el desarrollo de nuevas ideas que ayuden a la causa de Cristo.',
            score: [0,1,2,3,4],
          },
          {
            number: 171,
            text: 'Asumir el liderazgo de un grupo grande de cristianos.',
            score: [0,1,2,3,4],
          },
          {
            number: 172,
            text: 'Arriesgar mi vida por el reino de Dios si es necesario.',
            score: [0,1,2,3,4],
          },
          {
            number: 173,
            text: 'Trabajar en un ministerio de la iglesia que se dedique especialmente a los menos privilegiados de la sociedad.',
            score: [0,1,2,3,4],
          },
          {
            number: 174,
            text: 'Orar concentradamente en asuntos que, desde una perspectiva humana, no tienen ninguna esperanza de solucionarse.',
            score: [0,1,2,3,4],
          },
          {
            number: 175,
            text: 'Mediar en los conflictos entre diferentes iglesias.',
            score: [0,1,2,3,4],
          },
          {
            number: 176,
            text: 'Asumir la responsabilidad de ocuparme de un grupo de cristianos.',
            score: [0,1,2,3,4],
          },
          {
            number: 177,
            text: 'Comunicar los mensajes del Señor a los miembros de la iglesia aun cuando estos mensajes sean impopulares.',
            score: [0,1,2,3,4],
          },
          {
            number: 178,
            text: 'Invertir mi tiempo en aquellos ministerios de la iglesia que sean más urgentes.',
            score: [0,1,2,3,4],
          },
          {
            number: 179,
            text: 'Contribuir al ministerio musical de una iglesia.',
            score: [0,1,2,3,4],
          },
          {
            number: 180,
            text: 'Formar parte de un grupo en el que se enseña a desarrollar nuestras habilidades artísticas.',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),

      new LeaderChecklist({
        title: 'Me podría imaginar que',
        items: [
          {
            letter: 'A',
            text: 'Disfrutaría ocupándose de los detalles organizativos de ciertas tareas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'B',
            text: 'Le haría muy feliz pasar la mayor parte de su vida en otra cultura.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'C',
            text: 'Tendría menos dificultad que otras personas permaneciendo soltero.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'D',
            text: 'Sería capaz de reconocer los motivos que se esconden tras ciertos comportamientos con más facilidad que otros.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'E',
            text: 'Tiene una vocación especial para compartir su fe con no cristianos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'F',
            text: 'Sería la clase de persona a quien se le pediría consejo con asiduidad.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'G',
            text: 'Estaría dispuesto a correr riesgos personales para alcanzar sus objetivos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'H',
            text: 'Ofrecería apoyo financiero a proyectos cristianos con más probabilidad que otros.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'I',
            text: 'Sería más capaz que otros de distinguir si un asunto tiene un origen humano, satánico o divino.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'J',
            text: 'Sería la clase de persona a quien se le pediría que orase por los enfermos con más asiduidad que a otras personas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'K',
            text: 'Disfrutaría muchísimo enseñando a otros cristianos.',
            score: [0,1,2,3,4],
          },
          { letter: 'L', text: 'Tiene el don de lenguas.', score: [0,1,2,3,4] },
          {
            letter: 'M',
            text: 'Le sería más fácil que a la mayoría resolver problemas complicados de otras personas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'N',
            text: 'Sería más feliz teniendo pocos bienes materiales que teniendo muchos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'O',
            text: 'Tiene más habilidad manual que la mayoría de las personas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'P',
            text: 'Disfrutaría haciéndose cargo de los trabajos laboriosos de otros cristianos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'Q',
            text: 'Sería más feliz teniendo invitados que no teniéndolos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'R',
            text: 'Disfrutaría más que la mayoría de los cristianos pasando mucho tiempo en oración.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'S',
            text: 'Sería capaz de interpretar lo que otros dicen cuando hablan en lenguas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'T',
            text: 'Disfrutaría especialmente retirándose de todas sus actividades normales para concentrarse en el desarrollo de nuevas ideas.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'U',
            text: 'Podría tener una habilidad especial para motivar a otras personas para que lleven a cabo un proyecto.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'V',
            text: 'Encontraría más fácil ser perseverante a pesar de las dificultades que la mayoría de los cristianos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'W',
            text: 'Tiene una vocación especial para atender las necesidades prácticas de los demás.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'X',
            text: 'Dios le utilice con frecuencia para obrar a través de él señales y milagros.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'Y',
            text: 'Se le pediría consejo al nombrar nuevos líderes en la iglesia.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'Z',
            text: 'Disfrutaría especialmente ocupándose de un grupo de cristianos.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'AA',
            text: 'Comunicaría mejor que otros cristianos un mensaje proveniente de Dios.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'BB',
            text: 'Le sería más fácil que a la mayoría encargarse de las tareas de la iglesia que precisamente están por hacer.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'CC',
            text: 'Tiene vocación especial para servir a Dios con su capacidad musical.',
            score: [0,1,2,3,4],
          },
          {
            letter: 'DD',
            text: 'Sería feliz participando en algún ministerio creativo (p. ej., pintura, escritura, teatro, etc.).',
            score: [0,1,2,3,4],
          },
        ],
      }).save(),
    ]);
    console.log('###### All checklists created ######');
  } catch (error) {
    console.error(error);
  }
};
