<template>
  <section class="page-headline">
    <div class="container">
      <div class="row position-relative gx-2 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-8 col-xl-7">
          <div class="headline">
            <h1>Activités</h1>
            <div class="headline-navigate">
              <a href="#">Accueil</a>
              <span>Activités</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="activity-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Ce que nous faisons</span>
            <h2>Repoussez vos limites</h2>
          </div>
        </div>
      </div>
      <div class="row d-flex align-items-stretch ms-0 me-0">
        <div class="col-md-12 col-lg-6 d-flex align-self-stretch p-0">
          <div class="pic-activity">
            <img src="@/assets/bg-0.jpg" alt="" class="img-fluid rounded">
          </div>
          <div class="text-activity">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magni omnis possimus vitae! At necessitatibus nobis officia optio soluta ut.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>

</script>
<style lang="scss">
  @import "@/style/variables";
  @import "@/style/functions";
  .activity-section {
    background: map_colors('black');
    padding: 100px 0 70px 0;
    .pic-activity {
      width: 60%;
      img {
        height: 100%;
        min-width: 100%;
        object-fit: cover;
      }
    }
    .text-activity {
      background: map_colors('brown');
      height: auto;
      width: 50%;
      padding: 30px 20px;
      transition: background 0.3s ease;
      cursor: pointer;
      &:hover {
        background: rgba(255,255,255,.4);
      }
      h4 {
        font-size: map_sizes('lg');
        color: map_colors();
        margin-bottom: calc(#{map_sizes('xxs')} + 2px);
      }
      p {
        margin-bottom: calc(#{map_sizes('xs')} - 1.8px);
        color: map_colors('light');
      }
    }
  }
</style>