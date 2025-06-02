<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Tipos de aprendizaje: supervisado y no supervisado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg
          p La forma más común de clasificar los tipos de aprendizaje automático es en: aprendizaje supervisado, aprendizaje no supervisado, aprendizaje por refuerzo y aprendizaje semi-supervisado; en el primero tenemos datos etiquetados, es decir sabemos la relación entre entrada–salida, mientras que en no supervisado, no tenemos esa etiqueta, es decir no conocemos esa relación; en el aprendizaje por refuerzo, se basa en castigos y premios al sistema, de acuerdo con sus aciertos y, en el aprendizaje semi-supervisado, se tiene una combinación de aprendizaje supervisado y no supervisado. A continuación, se describirán, de forma más extensa, cada uno de estos aprendizajes.
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema2/1.svg", alt="", style="max-width: 190px")



      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Características y ejemplos de los diferentes tipos de aprendizaje automático

      .tabla-a.color-acento-contenido.mb-5
        table#Tabla1.bordes
          thead
            tr
              th.bg-color-tabla.text-white Tipos de aprendizaje
              th.bg-color-tabla.text-white Datos
              th.bg-color-tabla.text-white Objetivo
              th.bg-color-tabla.text-white Ejemplo
          tbody
            tr
              td #[em Supervisado]
              td Etiquetados.
              td Predecir una etiqueta o valor numérico, para nuevos valores.
              td
                ul
                  li Clasificación de correos (spam o no spam).
                  li Predicción de precios de un producto.
                  li Reconocimiento biométrico.
            tr
              td #[em No supervisado]
              td No etiquetados.
              td Descubrir patrones, grupos o estructuras ocultas, en los datos.
              td
                ul
                  li Segmentación de clientes.
                  li Detección de anomalías.
                  li Reducción de dimensionalidad.
            tr
              td #[em Semi-supervisado]
              td Mixto.
              td Mejorar el aprendizaje con pocos datos etiquetados.
              td
                ul
                  li Clasificación de imágenes con pocas etiquetas.
                  li Sistemas de recomendación.
            tr
              td #[em Por refuerzo]
              td Interacción con el entorno.
              td Maximizar la recompensa.
              td
                ul
                  li Juegos.
                  li Robótica.
                  li Manejo de inventarios.
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Aprendizaje supervisado
      

      p El aprendizaje supervisado es una técnica fundamental en el campo del aprendizaje automático, ya que permite construir modelos predictivos a partir de datos etiquetados.

      .bg-full-width.bg-color-6.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/2.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up").text-white Aprendizaje supervisado
              p.mb-4(data-aos="fade-right") En el PDF Aprendizaje supervisado, se explican los conceptos clave de este enfoque, diferenciando entre problemas de regresión y clasificación, e ilustrando cómo se pueden aplicar para predecir valores o categorías a partir de nuevos datos. Además, se presentan ejemplos prácticos y visuales que facilitan la comprensión del funcionamiento y utilidad de estos modelos.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Aprendizaje supervisado
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Aprendizaje no supervisado
      

      p El aprendizaje no supervisado representa una estrategia esencial dentro del campo del aprendizaje automático, ya que permite descubrir patrones y estructuras en datos no etiquetados, sin intervención humana directa.


      .bg-full-width.bg-color-6.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4.order-lg-2
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/3.png', alt='')
      
            .col-lg-8.order-lg-1
              h2.mb-4(data-aos="flip-up").text-white Aprendizaje no supervisado
              p.mb-4(data-aos="fade-right") En el PDF Aprendizaje no supervisado, se exploran los fundamentos de esta técnica, sus principales tipos y aplicaciones, así como su utilidad para identificar grupos, reducir la dimensionalidad de los datos y detectar anomalías en distintos contextos analíticos y empresariales.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Aprendizaje no supervisado

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744" target="_blank" rel="noopener noreferrer") Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: ( ed.). Editorial UOC.
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/Cobye0oZJ-w?si=SMXnvhyj0lVISdC7" target="_blank" rel="noopener noreferrer") Instituto de informática UACh.(2020, 12 de noviembre)  [INFO337] Regresión lineal. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
