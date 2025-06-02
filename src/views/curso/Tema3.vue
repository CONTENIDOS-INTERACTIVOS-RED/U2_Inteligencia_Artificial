<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Algoritmos básicos: regresión y clasificación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Los principales algoritmos de aprendizaje supervisado, buscan realizar predicciones por medio de regresiones o lograr la clasificación en clases de los datos obtenidos, y para esto, se utilizan diferentes y procesos que permiten entrenar modelos que identifican las tendencias y analizan los datos, para poder predecir los resultados.

      
  
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Algoritmos de regresión


      p A continuación, estudiemos algunos algoritmos de regresión.

      .row.mb-5
        .col-lg-8
          h2 Regresión lineal

          p(data-aos="fade-left") El ejemplo más sencillo es cuando se tiene la relación entre una variable de salida y una o varias variables de entrada, y esta relación se identifica que se puede aproximar de forma lineal, por lo que su comportamiento se podría caracterizar con la ecuación:
      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            p.text-center
              | y = β₀ + β₁x₁ + β₂x₂ + ⋯ + βₙxₙ + ε
            p Donde:
            ul
              li #[strong y] es la variable dependiente (salida).
              li #[em x₁, x₂, ..., xₙ] son las variables independientes (entradas).
              li #[em β₀] es el término de intercepción o sesgo (bias).
              li #[em β₁, β₂, ..., βₙ] son los coeficientes que representan el peso de cada variable independiente.
              li #[em ε] es el término de error, que representa la variabilidad no explicada por el modelo.
      

          p En la siguiente figura se muestra el caso de tener varias variables de entrada; en esta situación, se genera un plano de n-dimensiones que permita identificar el comportamiento de los datos, con respecto a las diferentes variables.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


      .titulo-figura.mb-2
        h5 Figura 1. 
        span Regresión lineal múltiple

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f1.png", data-aos="zoom-in", style="max-width: 470px").mx-auto
      
      h2 Regresión lineal simple (una variable)

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Si hay una sola variable x, la ecuación se simplifica a:
      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            p.mb-0
              | y = β₀ + β₁x + ε

            p Esto representa una línea recta en un plano cartesiano; en la siguiente figura se muestra un ejemplo de regresión lineal simple, a partir de datos reales y la ecuación que genera es y=0.19337855+2.4553132x; En este caso, no se incluye el error, porque este se puede calcular al evaluar el sistema e indica el grado de precisión del modelo planteado.
      

          p A continuación, se muestra la estructura en código, donde la estructura básica es primero importar las librerías, luego la obtención de datos; en este ejemplo, se están creando de forma aleatoria, pero la idea en un sistema es poder tener un dataset donde se debe hacer el preprocesamiento y organización de estos, conocido como análisis exploratorio de los datos; esto se trabaja más en profundidad en asignaturas dedicadas solo a Machine Learning; la siguiente fase es ajustar el modelo y generar predicciones y, por último, se gráfica para verificar el comportamiento del modelo desarrollado.


      .titulo-figura.mb-2
        h5 Figura 2. 
        span Código de entrenamiento de regresión lineal simple

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f2.png", data-aos="zoom-in", style="max-width: 546px").mx-auto
      
      
      p Como se observa, la estructura de código es bastante sencilla por ser el caso más simple en este entorno; el resultado de este proceso es el mostrado en la siguiente figura y es importante reforzar la importancia del proceso de análisis de datos previo; este permitirá que el modelo tenga mejor o peor comportamiento.


      .titulo-figura.mb-2
        h5 Figura 3. 
        span Resultado regresión lineal simple

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f3.png", data-aos="zoom-in", style="max-width: 546px").mx-auto
      
      h2 Árboles de decisión para regresión

      p Los árboles de decisión para regresión, son una variante de los árboles de decisión utilizados en clasificación, pero en lugar de predecir categorías, predicen valores numéricos continuos.

      p ¿Cómo funcionan?

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 690px;").mx-auto
      
      
                .bg-color-white.box-shadow.p-3(x="28%" y="30%" numero="+")
                  h5 División del espacio de características

                  p Se selecciona una variable y un umbral que mejor divide los datos en dos subconjuntos.

                  p El criterio de división más común es minimizar la varianza dentro de cada subconjunto.
      
                .bg-color-white.box-shadow.p-3(x="60%" y="7.5%" numero="+")
                  h5 Cálculo del valor de predicción

                  p En cada hoja del árbol, la predicción es el promedio de los valores de la variable dependiente (y) en ese nodo.
      
                .bg-color-white.box-shadow.p-3(x="74%" y="34%" numero="+")
                  h5 Construcción recursiva

                  p El proceso se repite recursivamente en cada subconjunto, hasta alcanzar un criterio de detención (profundidad máxima del árbol o un número mínimo de muestras por nodo).
      

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Por ejemplo, si tenemos datos de temperatura (x) y ventas de helados (y), un árbol de decisión podría aprender reglas como estas:
      
          
          ul.lista-ul.mb-4
            li.mb-1
              i.lista-ul__vineta
              | Si #[em temperatura] < 20°C → #[em Ventas promedio] = 5
            li.mb-1
              i.lista-ul__vineta
              | Si #[em temperatura] ≥ 20°C y #[em temperatura] < 30°C → #[em Ventas promedio] = 15
            li.mb-1
              i.lista-ul__vineta
              | Si #[em temperatura] > 30°C → #[em Ventas promedio] = 25

          .bg-color-2.p-4(data-aos="fade-left")#seccionFormula2.mb-4
            p.mb-0 En este caso, en lugar de generar una línea recta como en la regresión lineal, el modelo crea una función por partes con segmentos constantes; el problema es que en ocasiones puede generar modelos muy complejos que se ajustan a los datos de entrenamiento, pero posiblemente no lo hagan a nuevos datos.

          p En la siguiente figura se muestra la estructura básica de un árbol de decisión, donde a partir de ciertas reglas va decidiendo diferentes caminos que le permiten llegar a tomar las mejores decisiones posibles para los datos de entrada.


      .titulo-figura.mb-2
        h5 Figura 4. 
        span Estructura de un árbol de decisión

      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f4.png", data-aos="zoom-in", style="max-width: 1177px").mx-auto

      .bg-color-7.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A partir del modelo mostrado en la figura anterior y con datos reales (aleatorios), se entrena un modelo, con una estructura muy similar al del caso de la regresión lineal simple, solo que es este caso se utiliza la función DecisionTreeeRegressor, y los resultados obtenidos que se muestran en las siguientes figuras.

      

      .titulo-figura.mb-2
        h5 Figura 5. 
        span Código de entrenamiento de árboles de decisión
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f5.png", data-aos="zoom-in", style="max-width: 550px").mx-auto

      .titulo-figura.mb-2
        h5 Figura 6. 
        span Resultado árboles de decisión
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f6.png", data-aos="zoom-in", style="max-width: 571px").mx-auto
      

      h2 Bosque aleatorios (#[em Random Forest])
      
      p Los bosques aleatorios (#[em Random Forest]) para regresión, son una extensión de los árboles de decisión, pero en lugar de entrenar un solo árbol, combinan múltiples árboles de decisión, para mejorar la precisión y reducir el sobreajuste.
      
      p ¿Cómo funcionan?


      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Construcción de múltiples árboles")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Se generan muchos árboles de decisión independientes, utilizando diferentes subconjuntos aleatorios de los datos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Cada árbol se entrena con una muestra diferente de los datos (bootstrap sampling).
              
      
            .div(titulo="Promedio de predicciones")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Para cada nueva instancia a predecir, todos los árboles hacen una predicción y el resultado final es el promedio de todas las predicciones.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Esto reduce la variabilidad y mejora la precisión del modelo.
              
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      
      
      
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A continuación, se muestra el código que mantiene la misma estructura mencionada anteriormente, y el resultado de su aplicación a los mismos datos del caso de árboles de decisión, identificando que se adapta mucho más a los datos el modelo.

      
      .titulo-figura.mb-2
        h5 Figura 7. 
        span Código de entrenamiento de bosques aleatorios
      
      figure.bg-color-info.p-4.p-md-5
        img(src="@/assets/curso/tema3/f7.png", data-aos="zoom-in", style="max-width: 550px").mx-auto

      .titulo-figura.mb-2
        h5 Figura 8. 
        span Resultado bosques aleatorios
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f8.png", data-aos="zoom-in", style="max-width: 571px").mx-auto
      


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Algoritmos de clasificación
      

      p A continuación, estudiemos algunos algoritmos de clasificación.

      h2 Regresión logística: un modelo de clasificación

      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-4 La regresión logística es un algoritmo de clasificación que se utiliza cuando la variable objetivo (y) es categórica, como sí/no, spam/no spam, aprobado/reprobado, etc.
                p ¿Cómo funciona?
              
          p(data-aos="fade-left") A diferencia de la regresión lineal, la regresión logística #[strong no predice valores continuos], sino que calcula la #[strong probabilidad] de que una instancia pertenezca a una clase.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7
                h4 Transformación con la función sigmoide
                div#seccionFormula3
                  p.mb-2 En lugar de ajustar una línea recta, la regresión logística usa #[strong la función sigmoide] para convertir cualquier valor en una probabilidad entre 0 y 1.
                  figure
                    img(src="@/assets/curso/tema3/formula1.png", style="max-width: 142px").mx-auto
                  p.mb-2 Donde:
                  ul
                    li #[em z = β₀ + β₁ x₁ + β₂ x₂ + ⋯ + βₙ xₙ] es una combinación lineal de las variables predictoras
                    li #[em σ(z)] es la probabilidad de que y=1.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7
                h4 Umbral de decisión
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Si σ(z) es mayor o igual a 0.5, se clasifica como 1 (positivo).

                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Si σ(z) es menor a 0.5, se clasifica como 0 (negativo).
                
      


      h2 Árboles de Decisión para clasificación

      p Los árboles de decisión son algoritmos de clasificación que dividen los datos en ramas basadas en reglas de decisión. Funcionan como un conjunto de preguntas "sí/no" para clasificar una instancia en una categoría.

      p ¿Cómo funcionan?

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="División de los datos")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se selecciona la mejor característica para dividir los datos en dos o más ramas.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La división se elige para maximizar la pureza de los grupos resultantes.

              
            .div(titulo="Criterios de división")
              p Se usan métricas como:
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Gini: mide la impureza de una partición.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Entropía: mide la cantidad de desorden en los datos.

                    
            .div(titulo="Crecimiento del árbol")
              p Se repiten divisiones hasta que cada hoja contiene datos homogéneos (o hasta un criterio de parada).
      
            .div(titulo="Clasificación de nuevos datos")
              p Se sigue el camino del árbol según las reglas aprendidas hasta llegar a una hoja.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/10.png", alt="").mb-4.mb-lg-0
      


      .bg-full-width-2.bg-fondo-2
        .px-4.px-md-5.py-4

          h2 Bosques aleatorios para clasificación 
          p Los bosques aleatorios (#[em Random Forest]) son una mejora sobre los árboles de decisión, combinando muchos árboles para mejorar la precisión y reducir el sobreajuste.

          p ¿Cómo funcionan?


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/11.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-4.text-center #[strong División de los datos]
                ul.lista-ul--color.color-dark.mb-0
                  li.mb-3
                    i.fas.fa-arrow-circle-right
                    | Se crean varios árboles de decisión, cada uno entrenado con diferentes subconjuntos aleatorios de los datos (bootstrap sampling).
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Cada árbol toma decisiones de forma independiente.


          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/12.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-4.text-center #[strong Votación para la clasificación]
                ul.lista-ul--color.color-dark.mb-0
                  li.mb-3
                    i.fas.fa-arrow-circle-right
                    | Cada árbol hace una predicción y la clase más votada es la decisión final (votación por mayoría).

                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Esto reduce el sobreajuste que pueden tener los árboles individuales.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/13.svg"
                  alt=""
                  style="width: 90px"
                )
                p.mb-4.text-center #[strong Selección aleatoria de características]
                ul.lista-ul--color.color-dark.mb-0
                  li.mb-3
                    i.fas.fa-arrow-circle-right
                    | En cada división del árbol, se elige aleatoriamente un subconjunto de características, lo que evita que el modelo dependa demasiado de una sola variable.
          

      h2 Máquinas de Soporte Vectorial (SVM) para clasificación

      p Las SVM (#[em Support Vector Machines]) son algoritmos de clasificación que buscan el hiperplano óptimo que maximiza la separación entre clases, en un espacio de características.

      p ¿Cómo funcionan?

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Encuentra un hiperplano óptimo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Encuentra un hiperplano óptimo
              p Para un problema de #[strong dos clases], SVM busca la línea (en 2D), el plano (en 3D) o el hiperplano (en dimensiones superiores) que #[strong mejor separa los datos].
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Maximiza el margen entre clases" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Maximiza el margen entre clases
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | SVM elige el hiperplano que tiene la mayor distancia a los puntos más cercanos de cada clase. Estos puntos se llaman vectores de soporte.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Un margen más grande implica una mejor capacidad de generalización.
              
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Manejo de datos no lineales con Kernels" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Manejo de datos no lineales con Kernels
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Si los datos #[strong no son separables linealmente], SVM usa trucos matemáticos #[strong (Kernels)] para proyectarlos en un espacio de mayor dimensión donde sí sean separables.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Algunos kernels populares son:

                  ul.lista-ul.mt-3
                    li
                      i.lista-ul__vineta
                      | #[strong Lineal]. Para datos separables linealmente.
                    li
                      i.lista-ul__vineta
                      | #[strong Polinomial]. Para relaciones más complejas.
                    li
                      i.lista-ul__vineta
                      | #[strong RBF (Radial Basis Function)]. Para datos muy no lineales.

              
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-3.png', alt='')
      

          
      .row.mb-5
        .col-lg-8
          .bg-color-5.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Estos son los 4 algoritmos más utilizados en Machine Learning, en estudios más avanzados se ha pasado a trabajar sobre redes neuronales y redes neuronales convolucionales; para poder ver un poco el comportamiento de este tipo de algoritmos, se ha implementado en un solo código todos los algoritmos para compararlos y ver un poco los resultados obtenidos; es importante aclarar que en este nuevo algoritmo se adiciono una fase que también se debe hacer en el proceso de regresión; para los ejemplos, no se realizó para, en esta sección, entender su importancia; este proceso es la división de los datos en un conjunto de entrenamiento y uno de prueba (en algunos casos también de validación), lo que permite poder validar los resultados obtenidos por los algoritmos con los mismos datos; esto en especial se hace si se tienen suficientes datos, porque de lo contrario no vamos a obtener un buen entrenamiento.

          
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in").mb-4.mb-lg-0
      

      .titulo-figura.mb-2
        h5 Figura 9. 
        span Código para clasificación incorporando división de datos

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f9.png", data-aos="zoom-in", style="max-width: 680px").mx-auto
      

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-4 A partir de este entrenamiento, se procedió a graficar los resultados obtenidos, donde se puede evidenciar que con cada algoritmo se obtienen resultados diferentes; en regresión logística se observa una clara división por una mitad, como es su función de probabilidad de los datos, lo mismo SVM que fija un hiperplano solo que bajo un modelo diferente al de probabilidad, mientras que los árboles de decisión y los bosques aleatorios, tienen formas más diversas, por lo que se adaptan de diferente forma en su entrenamiento; en la siguiente figura, cuando los datos están en la región de su mismo color, quiere decir que el modelo lo esté prediciendo de forma correcta, y cuando está en el color opuesto, indica que se predijo de forma incorrecta; en la figura se puede ver que todos los modelos van a tener algunos errores y este depende bastante de la estructura de datos de entrada al sistema.


      .titulo-figura.mb-2
        h5 Figura 10. 
        span Gráfica resultados obtenidos
      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f10.png", data-aos="zoom-in", style="max-width: 847px").mx-auto
      

            

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/57582" target="_blank" rel="noopener noreferrer") Benítez Iglésias, R. (2014). Inteligencia artificial avanzada: ( ed.). Editorial UOC. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/live/pLB8eb4KZw4?si=lB4q5O4jqF-aONM_" target="_blank" rel="noopener noreferrer") KeepCoding Teach School (2021, 30 de noviembre) ¿Cómo generar un modelo de Machine Learning con AutoAI? 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
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
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
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
