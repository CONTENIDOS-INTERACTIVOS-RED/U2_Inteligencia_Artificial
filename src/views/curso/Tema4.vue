<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Aplicaciones simples del <em>Machine Learning</em> en problemas cotidianos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg
        p El aprendizaje automático es una de las áreas más prometedoras e innovadoras del momento, gracias al amplio abanico de aplicaciones en el que se pueden emplear: coches autónomos, aplicaciones que saben si hay fotos o personas, algoritmos capaces de detectar enfermedades. El aprendizaje automático se emplea en tareas para las cuales no podemos programar con precisión el ordenador, y las tareas para las que nos es difícil programar, de forma tradicional, son muchas. 

      .col-lg-auto
        figure
          img(src="@/assets/curso/tema4/1.svg", alt="", style="max-width: 190px")


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rmbdWZeWcfQ?si=Qi5F_c2m69WGGCub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/50116" target="_blank" rel="noopener noreferrer") Palma Méndez, J. (2008) Inteligencia artificial: métodos, técnicas y aplicaciones. Editorial: McGraw-Hill España 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/pLB8eb4KZw4?si=X_AOGUo8uHYsuqtU" target="_blank" rel="noopener noreferrer") KeepCoding – Teach School. (2021, 30 de noviembre) ¿Cómo generar un modelo de Machine Learning con AutoAI? 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.algotive.ai/es-mx/blog/5-ejemplos-de-machine-learning-que-usas-en-tu-dia-a-dia-y-no-lo-sabias" target="_blank" rel="noopener noreferrer") Algotive (2022) 5 ejemplos de Machine Learning que usas en tu día a día y no lo sabías. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
