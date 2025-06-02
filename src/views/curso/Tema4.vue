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
