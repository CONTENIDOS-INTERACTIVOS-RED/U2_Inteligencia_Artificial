export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Principios del aprendizaje automático',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción al aprendizaje automático (<em>Machine Learning</em> - ML)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de aprendizaje: supervisado y no supervisado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aprendizaje supervisado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aprendizaje no supervisado',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Algoritmos básicos: regresión y clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Algoritmos de regresión',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Algoritmos de clasificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Aplicaciones simples del <em>Machine Learning</em> en problemas cotidianos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Problemas cotidianos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vicente Virseda, J. A., González Arias, J. & Parra Rodríguez, F. J. (2019). Métodos de Data Science aplicados a la Economía y a la Dirección y Administración de Empresas: (ed.). UNED - Universidad Nacional de Educación a Distancia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122249',
    },
    {
      referencia:
        'Casas Roma, J., Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: (ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744',
    },
    {
      referencia:
        'Benítez Iglesias, R. (2014). Inteligencia artificial avanzada: (ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57582',
    },
  ],
  glosario: [
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Rama de la informática que desarrolla sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.',
    },
    {
      termino: 'Aprendizaje automático (Machine Learning)',
      significado:
        'Es una subárea de la IA que permite a las máquinas aprender a partir de datos sin ser programadas explícitamente.',
    },
    {
      termino: 'Procesamiento de Lenguaje Natural (PLN)',
      significado:
        'Rama de la IA y la lingüística computacional que permite a las computadoras comprender, interpretar y generar lenguaje humano.',
    },
    {
      termino: 'Visión Artificial',
      significado:
        'Campo de la IA que permite a las máquinas interpretar y analizar imágenes o videos.',
    },
    {
      termino: 'Robótica',
      significado:
        'Disciplina que diseña, construye y programa robots para realizar tareas de manera autónoma o asistida.',
    },
    {
      termino: 'Automatización',
      significado:
        'Es el uso de tecnología para realizar tareas con mínima o ninguna intervención humana, mejorando la eficiencia en procesos industriales, administrativos y de software.',
    },
    {
      termino: 'Aprendizaje profundo (Deep Learning)',
      significado:
        'Es una subcategoría del aprendizaje automático basada en redes neuronales artificiales profundas, que permite el procesamiento avanzado de datos como imágenes, texto y audio.',
    },
    {
      termino: 'Árboles de decisión',
      significado:
        'Un árbol de decisión es un modelo de aprendizaje automático que clasifica datos siguiendo una serie de reglas "sí/no".',
    },
    {
      termino: 'Máquinas de soporte vectorial SVM',
      significado:
        'Las SVM son modelos de clasificación que buscan la mejor línea o frontera para separar datos en diferentes categorías.',
    },
    {
      termino: 'Datos de entrenamiento',
      significado:
        'Se usan para entrenar el modelo y ajustar sus parámetros. Representan la mayor parte del conjunto de datos (generalmente 60-80% del total).',
    },
    {
      termino: 'Datos de prueba',
      significado:
        'Se usan solo al final para evaluar el desempeño real del modelo, simulan datos nuevos que el modelo nunca ha visto. Generalmente 10-20% del total.',
    },
    {
      termino: 'Datos de validación',
      significado:
        'Se usan para ajustar hiper parámetros y evitar el sobreajuste, permiten evaluar el modelo antes de la prueba final. Usualmente 10-20% del total.',
    },
  ],
}
