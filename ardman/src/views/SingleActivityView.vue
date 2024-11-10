<template>
  <section class="page-headline">
    <div class="container">
      <div class="row position-relative gx-2 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-8 col-xl-7">
          <div class="headline">
            <h1>Déscription de l'activité</h1>
            <div class="headline-navigate">
              <a href="#">Accueil</a>
              <a href="#">Activités</a>
              <span>Gym</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="single_activity-section">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-8">
          <div class="pic_single-activity align-items-center d-flex">
            <img src="@/assets/bg-s0.jpg" alt="" class="img-fluid">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="shadow p-3 mb-5 rounded  text_single-activity">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <ul>
              <li>
                <b>Coach : </b><em>Lorem ipsum dolor.</em>
              </li>
              <li class="d-flex">
                <b>Catégorie: </b>
                <ul>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                  <li>Lorem ipsum dolor.</li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
          <div class="detail_single-activity">
            <h3 class="text-center">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nulla pariatur quisquam sunt veritatis. Hic!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SingleActivityView"
}
</script>
<style lang="scss">
 @import "../style/variables";
  @import "../style/functions";

  .single_activity-section {
    background: map_colors('black');
    padding: 100px 0 70px 0;
    .pic_single-activity {
      img {
        filter: grayscale(80%);
        border-radius: map_sizes('xxs');
        object-fit: cover;
        object-position: center;
      }
    }
    .text_single-activity {
      background: map_colors('dark');
      ul {
            font-size: calc(#{map_sizes()} - 1px);
            color: map_colors('light');
            padding: 0;
        li {
          margin-bottom: map_sizes();
          ul {
            margin-left: map_sizes('xxl');
          }
          b {
            text-transform: uppercase;
            margin-left: map_sizes('xxs');
            color: map_colors();
          }
          em {
            margin-left: calc(#{map_sizes('lx-1')} + 10px);
          }
        }
      }
      h2 {
        font-size: map_sizes('xl');
        font-weight: 700;
        color: map_colors('primary');
        margin-bottom: map_sizes('xs');

      }
    }
    .detail_single-activity {
      padding: map_sizes('xl');
      h3 {
        font-size: calc(#{map_sizes('xl')} - 2px);
        font-weight: 700;
        color: map_colors('primary');
      }

      p {
        text-align: justify;
        padding: 0;
        color: map_colors('light');
      }
    }
  }
</style>