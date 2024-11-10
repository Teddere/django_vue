
<template>
<section class="page-headline">
    <div class="container">
      <div class="row position-relative gx-2 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-8 col-xl-7">
          <div class="headline">
            <h1>Nos Enseignes</h1>
            <div class="headline-navigate">
              <a href="#">Accueil</a>
              <span>Enseignes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="gym-section">
    <div class="container">
      <div class="row">
        <div class="section-title">
        <span>Équipement</span>
        <h2>Espaces d'entraînement</h2>
        <p class="text-center mx-2 mx-lg-5">
          Notre centre de fitness est l'endroit idéal pour tous ceux qui cherchent à améliorer
          leur santé et leur bien-être.Nous offrons une variété de salles pour répondre à tous les besoins
          de nos membres.
          Si vous cherchez à vous entraîner de manière intense et dynamique, vous apprécierez nos salles de cyclisme en salle, de kettle bell et de karaté.
        </p>
      </div>
        <div class="col-lg-3 col-md-2">
          <div class="gym-item">
            <div class="gym-img">
              <img src="@/assets/bg-1.jpg" alt="" class="img-fluid duration-500 ease-in">
            </div>
            <div class="gym-content">
              <h3 class="text-center pt-1">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus iure labore minima quo sequi temporibus totam? Dolor error est, inventore necessitatibus saepe sit sunt!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "GymView"
}
</script>
<style lang="scss">
  @import "../style/variables";
  @import "../style/functions";
  .gym-section {
    background: map_colors('black');
    padding: 100px 0 70px 0;
    .section-title {
      p {
        color: map_colors('light');
        margin: map_sizes() 0;
      }
    }
    .gym-item {
      overflow: hidden;
      margin-bottom: map_sizes('xl');
      cursor: pointer;
      .gym-content {
        position: relative;
        background: map_colors('dark');
        padding: 5px 15px 10px 0;
        z-index: 1;
        border: 5px;
        &::after {
          content:"";
          position: absolute;
          top: 0;
          height: 100px;
          width: 600px;
          border-top: 4px solid map_colors('primary');
        }
        h3 {
          display: block;
          color: map_colors('primary');
          font-size: calc(#{map_sizes('xl')} - 2px);
          font-weight: 700;
          line-height: 1.2;
          text-align: center;
          margin-block-start: 1.33em;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }
        p{
          font-size: calc(#{map_sizes()} - 2px);
          color:  map_colors("light");
          font-weight: 400;
          line-height: 24px;
          margin-left: map_sizes();
      }
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }

  }
</style>