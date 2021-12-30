<template>
  <div>
    <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
      <div v-for="(img, i) in images" :key="i">
        <img
          v-if="images"
          class="w-full h-64 md:h-96 pointer-events-none"
          :src="img"
          alt="slider-imgs"
        />
        <div v-else>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sit
          praesentium eligendi corporis enim, expedita alias ipsam fugiat
          voluptatem ad veritatis fugit suscipit illo consectetur quasi veniam
          quo necessitatibus aliquam! Enim tempore, mollitia voluptatem numquam
          sapiente laborum, repellendus et veniam iure rerum corporis
          perspiciatis quae consequatur animi vel exercitationem iusto amet eum
          excepturi? Consectetur sapiente, laboriosam facere blanditiis enim
          facilis. Et impedit saepe, consectetur nisi odit nostrum aperiam,
          quas, possimus sed vel atque beatae distinctio doloribus nobis commodi
          labore inventore maiores. Illo facilis temporibus ea magnam? Quam
          blanditiis velit ullam. Officia quasi repellendus sed, sunt veritatis
          molestiae ea, neque magnam quaerat ducimus suscipit praesentium. Ipsum
          doloribus in, iste doloremque eligendi assumenda quia sunt aut. Magnam
          expedita natus quas ratione porro. Porro inventore velit enim odio
          magni ducimus officia mollitia. Delectus maxime sit iusto fugit illo
          quae voluptas omnis consectetur provident eius, alias tempore
          molestiae eum atque nemo iure. Omnis, sit. Hic facilis minus ipsum
          illo numquam quod similique, ducimus velit qui amet. Veritatis
          reiciendis ullam distinctio corporis officiis consectetur amet ducimus
          quas, assumenda, hic, excepturi a illo odit aperiam pariatur. Ad animi
          optio distinctio officiis voluptatum corporis explicabo quibusdam
          temporibus, quo dicta, voluptate iure perspiciatis aut eum ducimus
          reprehenderit quidem obcaecati cupiditate cumque repudiandae odit
          fugiat ea? Quis, exercitationem harum. Placeat, excepturi magni?
          Tenetur repellendus illo molestias, delectus minus architecto corporis
          neque animi cumque atque sequi qui sunt. Eveniet consequatur iusto
          nemo! Eum magnam libero culpa non laboriosam aspernatur in. Sapiente
          repellendus id animi ipsum molestiae repellat aut? Voluptatum impedit
          accusantium aut exercitationem excepturi dolore dolorum cupiditate
          placeat, saepe, iste doloribus incidunt illum. Doloremque ut,
          explicabo aspernatur temporibus in asperiores. Nulla dolore unde
          cumque vero delectus, beatae quae veritatis qui ducimus itaque minima
          amet doloribus, deserunt similique perferendis, id consequuntur iure
          accusantium sed. Nobis, similique nesciunt! Unde qui libero porro?
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  props: ["images"],
};
</script>
