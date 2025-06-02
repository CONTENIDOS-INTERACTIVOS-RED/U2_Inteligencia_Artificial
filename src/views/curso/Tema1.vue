<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción al aprendizaje automático (Machine Learning - ML)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El aprendizaje automático es un método de análisis de datos, que automatiza la construcción de un modelo analítico; este requiere modelos algorítmicos que puedan aprender y hacer predicciones basadas en conjuntos de datos, de forma autónoma. Dado que el desarrollo de un modelo mediante el aprendizaje automático es un proceso completamente automatizado, el programador de la aplicación no tiene que intervenir después de especificar las entradas al proceso de aprendizaje; estas entradas consisten en una serie de datos para entrenar el modelo, que se conoce como conjunto de entrenamiento.

    
        p(data-aos="fade-left") En la actualidad, los sistemas de aprendizaje automático se emplean tanto de forma independiente, como embebidos en aplicaciones y servicios de software, intensivos en datos. Si bien todavía se le considera un campo emergente, el aprendizaje automático ya forma parte de la vida cotidiana, así como sus aplicaciones y casos de uso en campos científicos y de la tecnología, así como en aplicaciones en el mundo de los negocios con un alto potencial de rentabilización. En las próximas páginas, se detallan las aplicaciones más relevantes; el aprendizaje automático puede aportar un valor significativo a los proyectos de Big Data.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 Los avances en el aprendizaje automático, actualmente suceden de manera tan fabulosa, que las aplicaciones son de todo tipo; entre ellas tenemos: tecnología de campos petroleros, pronósticos atmosféricos, diagnóstico médico, juegos, robótica, información y publicidad, reconocimiento óptico, detección de intrusiones, procesamiento del lenguaje natural, aprendizaje automático en informática para la evaluación del software.
    
        p(data-aos="fade-left").mb-4 El aprendizaje automático es un subcampo de la inteligencia artificial, cuyo objetivo es desarrollar técnicas que permitan a las computadoras aprender. Se trata de sistemas que pueden aprender de los datos observados, para realizar tareas específicas; por ejemplo, clasificación y regresión, entre otras.

    
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122249" target="_blank" rel="noopener noreferrer") Vicente Vírseda, J. A. González Arias, J. & Parra Rodríguez, F. J. (2019). Métodos de Data Science aplicados a la Economía y a la Dirección y Administración de Empresas: ( ed.). UNED - Universidad Nacional de Educación a Distancia. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/4abskY3yccs?si=y8Gf1GvlrIOUd1Xn" target="_blank" rel="noopener noreferrer") KeepCoding Teach School. (2022, 18 de febrero) ¿Qué es el aprendizaje supervisado y no supervisado?.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
