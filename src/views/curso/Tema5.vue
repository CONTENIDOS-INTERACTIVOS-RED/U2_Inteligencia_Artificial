<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Problemas cotidianos'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.overflow-hidden

    .row.mb-5
      .col-lg
        p A continuación, se describen algunas de las principales aplicaciones del Machine Learning en la actualidad.
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema5/1.svg", alt="", style="max-width: 400px")



    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Recomendaciones personalizadas")
            p Una de las aplicaciones más visibles del Machine Learning es la recomendación de contenido en plataformas como Netflix, Spotify y YouTube. Estos sistemas analizan el historial de visualización o escucha del usuario, para sugerir contenido relevante. Para lograrlo, los algoritmos de ML emplean técnicas como filtrado colaborativo y sistemas basados en contenido. Gracias a estos modelos, los usuarios pueden descubrir películas, canciones y videos, de acuerdo con sus preferencias, mejorando su experiencia digital. Además, estos sistemas aprenden de las interacciones del usuario, ajustando constantemente las sugerencias para ofrecer resultados más precisos y satisfactorios. Este tipo de tecnología también se aplica en el comercio electrónico, donde plataformas como Amazon, recomiendan productos basándose en compras previas y preferencias del usuario.
    
          .div(titulo="Detección de <em>Spam</em> y correos maliciosos")
            p Los servicios de correo electrónico utilizan el <em>Machine Learning</em> para filtrar mensajes no deseados. Algoritmos avanzados analizan patrones en los correos electrónicos, identificando palabras claves, estructuras de mensaje y direcciones sospechosas para clasificarlos como <em>Spam</em>. Esto ayuda a los usuarios a mantener sus bandejas de entrada organizadas y seguras. Además, el ML se utiliza para detectar intentos de phishing, protegiendo a los usuarios de fraudes y ataques cibernéticos. Los sistemas de detección de amenazas evolucionan constantemente, para adaptarse a nuevas estrategias de los ciberdelincuentes, utilizando técnicas como el análisis de comportamiento para identificar correos sospechosos, antes de que lleguen al usuario final.
    
          .div(titulo="Asistentes virtuales y reconocimiento de voz")
            p Asistentes como Siri, Alexa y Google Assistant, han revolucionado la interacción entre humanos y máquinas. Utilizan algoritmos de procesamiento de lenguaje natural (NLP) para interpretar comandos de voz y responder de manera eficiente. Estas tecnologías permiten realizar acciones como establecer recordatorios, consultar el clima o enviar mensajes sin necesidad de escribir, facilitando la vida cotidiana de los usuarios. Con el tiempo, estos asistentes han mejorado su capacidad para comprender el contexto y reconocer patrones en la voz de los usuarios, ofreciendo respuestas más precisas y naturales. También se han integrado en dispositivos domésticos inteligentes, permitiendo controlar luces, termostatos y otros electrodomésticos con simples comandos de voz.
    
          .div(titulo="Traducción automática")
            p Servicios como <em>Google Translate</em>, han mejorado significativamente gracias al <em>Machine Learning</em>. Los modelos de traducción automática neuronal han permitido generar traducciones más precisas y naturales, superando las limitaciones de los sistemas basados en reglas. Esta aplicación resulta fundamental para viajeros, estudiantes y profesionales que requieren comunicarse en diferentes idiomas. Además de la traducción de textos, existen herramientas que permiten la traducción en tiempo real de conversaciones habladas, facilitando la comunicación entre personas de diferentes culturas sin necesidad de un traductor humano.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/2.png", alt="").mb-4.mb-lg-0
    

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Aplicaciones en finanzas personales")
            p El ML también juega un papel importante en la gestión de finanzas personales. Aplicaciones bancarias utilizan algoritmos para analizar patrones de gasto y ofrecer recomendaciones sobre ahorro o inversión. Además, los sistemas de detección de fraude identifican transacciones sospechosas y alertan a los usuarios en caso de actividades inusuales, mejorando la seguridad financiera. También existen aplicaciones que ayudan a los usuarios para administrar sus presupuestos, categorizando automáticamente los gastos y proporcionando alertas, cuando se acercan a su límite mensual. Esta tecnología está permitiendo una mayor inclusión financiera al ofrecer herramientas accesibles y personalizadas, para el manejo de dinero.
          .div(titulo="Diagnóstico de problemas en el automóvil")
            p Algunos automóviles modernos incorporan sistemas de <em>Machine Learning</em> para detectar fallas mecánicas y prever posibles problemas. Sensores y algoritmos analizan datos en tiempo real, permitiendo alertar al conductor sobre mantenimientos necesarios o posibles averías. Esto no solo mejora la seguridad vial, sino que también optimiza el rendimiento del vehículo. Además, el ML se emplea en sistemas de conducción asistida, ayudando a los conductores con funciones como frenado automático, detección de peatones y mantenimiento de carril. Con el avance de los vehículos autónomos, el ML jugará un papel aún más importante en la seguridad y eficiencia del transporte.
    
          .div(titulo="Optimización de rutas y transporte")
            p Aplicaciones como <em>Google Maps</em> y <em>Waze</em>, utilizan <em>Machine Learning</em> para predecir tiempos de viaje y sugerir rutas más eficientes. Analizando datos de tráfico en tiempo real y patrones históricos, estos sistemas ayudan a los conductores a evitar congestiones, reduciendo el tiempo de desplazamiento y el consumo de combustible. Además de la optimización de rutas para automóviles, el ML también se utiliza en la planificación de transporte público, mejorando la eficiencia de autobuses y trenes en función de la demanda de pasajeros. Incluso servicios de transporte compartido, como <em>Uber</em> y <em>Lyft</em>, dependen del ML para calcular tarifas dinámicas y optimizar la asignación de conductores a pasajeros.
    

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El <em>Machine Learning</em> ha pasado de ser una tecnología exclusiva de laboratorios de investigación, a una herramienta presente en la vida diaria de millones de personas. Desde mejorar la experiencia de entretenimiento hasta optimizar nuestras finanzas y transporte, sus aplicaciones cotidianas continúan creciendo. 
    
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A medida que la tecnología avanza, es probable que veamos aún más innovaciones que faciliten nuestra rutina diaria y mejoren nuestra calidad de vida. En el futuro, se espera que el ML continúe integrándose en nuevos ámbitos, como la educación personalizada, la salud preventiva y la automatización de tareas domésticas, ofreciendo soluciones aún más inteligentes y adaptadas a las necesidades individuales de los usuarios. 
        
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>



</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué es Machine Learning?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un tipo de hardware para computadoras.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un método para que las computadoras aprendan de los datos sin ser programadas explícitamente.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un lenguaje de programación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un videojuego de inteligencia artificial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes es un ejemplo de Machine Learning en la vida diaria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un semáforo cambiando de color.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un cajero automático dispensando dinero.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Un sistema de recomendaciones en Netflix o YouTube.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un reloj mostrando la hora.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué hace un modelo de aprendizaje supervisado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Aprende a partir de datos etiquetados, con respuestas conocidas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Aprende sin datos previos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se entrena solo con imágenes.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No necesita datos para entrenarse.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué tipo de datos usa el aprendizaje no supervisado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Datos sin etiquetas o respuestas previas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Datos con respuestas conocidas.',
                esCorrecta: false,
              },
              { id: 'c', texto: 'Solo datos numéricos.', esCorrecta: false },
              { id: 'd', texto: 'Sólo datos de texto.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes aplicaciones usa inteligencia artificial y Machine Learning?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un termómetro de mercurio.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un robot aspiradora que aprende la distribución de una casa.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una bicicleta sin sensores.',
                esCorrecta: false,
              },
              { id: 'd', texto: 'Un libro impreso.', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
