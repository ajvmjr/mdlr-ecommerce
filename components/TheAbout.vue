<template functional>
  <div class="about">
    <h2>
      Sobre a <br />
      <span class="toUpper">modular</span>
    </h2>
    <p>
      Somos um varejista de estilo de vida dedicado a inspirar clientes por meio
      de uma combinação única de produto, criatividade e compreensão cultural.
      Fundada em 1970 em um pequeno espaço em frente à Universidade da
      Pensilvânia.
    </p>
    <p>
      A <b>Modular</b> agora opera mais de 200 lojas nos Estados Unidos, Canadá
      e Europa, oferecendo ambientes de varejo experienciais e uma variedade bem
      selecionada de produtos masculinos.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.toUpper {
  text-transform: uppercase;
}
.about {
  border-bottom: 1px solid $main-border-color;
  color: $font-color-black;
  font-family: $main-font-family;
  padding: 4rem 16% 6rem;
  text-align: center;

  & > * {
    animation: moveTop 1s ease-in-out;
  }

  h2 {
    font-size: 3.8rem;
    margin-bottom: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
}

@keyframes moveTop {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  80% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
