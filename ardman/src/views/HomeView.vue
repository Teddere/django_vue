<template>
  <section class="banner-section"><!-- Start banner -->
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-12 mx-md-2 mx-lg-0 col-md-10 col-lg-7">
          <div class="banner-text">
              <div class="content">
                <span>Transformez votre corps</span>
                <h1>Soyez&nbsp;<b>Fort&nbsp;</b>& Entraînez&nbsp;<b>dur</b></h1>
                <a href="#" class="duration-200">Découvrir</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End banner -->
  <section class="detail-section"><!-- start detail section-->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Pourquoi nous choisir ?</span>
            <h2>Repoussez vos limites</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6" v-for="item in detail">
          <div class="detail-item duration-300 ease-in-out">
            <span :class="item.icon +' duration-300 ease-in-out'"></span>
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End detail section-->
  <section class="room-section"><!-- start room section-->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        <div class="section-title">
          <span>Nos salles modernes</span>
          <h2>Matériel de nouvelle génération</h2>
        </div>
      </div>
        <div class="col-md-6" v-for="(activity,index) in activities" :class="index > 2?'col-lg-6':'col-lg-4'">
        <div class="room-item">
          <div class="room-img">
            <img src="@/assets/bg-1.jpg" alt="" class="img-fluid duration-500 ease-in">
          </div>
          <div class="room-content">
            <span>{{activity.headline}}</span>
            <h5>{{activity.content}}</h5>
            <a href="#">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section><!-- End room section-->
  <section class="pub-section d-flex align-items-center"><!-- start pub-->
    <div class="container col-lg-12 text-center">
      <div class="pub-text">
        <h2>Inscrivez-vous maintenant pour obtenir plus d'offres</h2>
        <div class="subhead">Où la santé, la beauté et la forme physique se rencontrent</div>
        <a href="#" class="button-primary duration-300 ease-linear">Inscrivez-vous</a></div>
    </div>
  </section><!-- End pub-->
  <section class="pricing-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <span>Notre Programme</span>
            <h2>Choisissez votre forfait</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8" v-for="item in pricing">
          <div class="pricing-item duration-500">
            <h3>{{item.headline}}</h3>
            <div class="pricing-price">
              <h2>{{item.price}}</h2>
              <span>{{item.type}}</span>
            </div>
            <ul>
              <li v-for="detail in item.details">{{detail}}</li>
            </ul>
            <a href="#" class="pricing-link btn button-primary">{{item.title}}</a>
            <a href="#" class="pricing-icon"><i class="fa-solid fa-mouse-pointer"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import index from "vuex";

export default {
  name: 'HomeView',
  computed: {
    index() {
      return index
    }
  },
  data:function () {
    return {
      detail: [
        {
          'icon': 'fa-solid fa-dumbbell',
          'title':'Équipement',
          'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
        },
        {
          'icon': 'fa-brands fa-nutritionix',
          'title':'Régime sain',
          'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
        },
        {
          'icon': 'fa-solid fa-ring',
          'title':'Plan de formation',
          'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
        },
        {
          'icon': 'fa-solid fa-heartbeat',
          'title':'Unique à vos besoins',
          'content':`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Natus nostrum, voluptatibus obcaecati ab veniam saepe commodi!`
        }
      ],
      activities: [
        {
          'headline':'Forces',
          'content':'Musculation'
        },
        {
          'headline':'Cardio',
          'content':'Cyclisme en salle'
        },
        {
          'headline':'Forces',
          'content':'kettlebell'
        },
        {
          'headline':'Entraînement',
          'content':'Boxe'
        },
        {
          'headline':'Cardio',
          'content':'Cyclisme en salle'
        },

      ],
      pricing: [
        {
        'headline':'Class',
        'price':'0.00 €',
        'type':'Gratuit',
        'title':"S'inscrire",
        'details':['Accès Limites aux machines','2 Séances/Semaine','Boxe','Fitness','Musculation']
        },
        {
        'headline':'Medium',
        'price':'39.99 €',
        'type':'Payant',
        'title':'S\'abonner',
        'details':['Accès illimites','Fitness','Musculation','Boxe','Yoga','Entrainement personalisé','Atelier(Perte de poids)']
        },
        {
        'headline':'Premium',
        'price':'70.00 €',
        'type':'payant',
        'title':'S\'abonner',
        'details':['Accès illimites','Fitness','Musculation','Boxe','Yoga','Trainement personalisé','Atelier(Motivation)','Atelier(Perte de poids)','Parrainage (20 € + 1mois gratuit)']
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import "../style/variables";
@import "../style/functions";

.banner-section {
  position: relative;
  height: 90vh;
  background-image: linear-gradient(150deg,rgba(19, 19, 18, 1) 33%,rgba(0,0,0,.6),map_colors("primary")),url('../assets/bg-3.jpg');
  background-size: cover;
  background-position: center center;
  background-clip: border-box;
  background-repeat: no-repeat;
  z-index: 1;
  .banner-text {
    display: flex;
    align-items: center;
    height: 100% ;
    .content {
      span {
        font-family: $font-heading;
        font-style: italic;
        font-size: map_sizes('xs');
        color: scale-color(map_colors(),$alpha: -5%) ;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 6px;
        margin-bottom: 5px;
      }
      h1 {
        font-family: $font-heading;
        font-size: map_sizes('lx-3');
        font-style: italic;
        color: scale-color(map_colors(),$alpha:-10%);
        line-height: 55px;
        margin-bottom: 5px;
        b {
          color: map_colors('primary');
          text-transform: uppercase;
        }
      }
      a {
        display: inline-block;
        font-size: map_sizes();
        padding: 17px 30px 16px;
        margin-top: 20px;
        color: scale-color(map_colors(),$alpha: -5%);
        line-height: 2px;
        border-radius: 20px;
        border: 1px solid map_colors('primary');
        &:hover {
          text-decoration: none;
          background: map_colors('primary_hover');
        }
      }
    }
  }
  @media (max-width: 500px) {
    .banner-text {
      .content {
        span {
          letter-spacing: 3px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: map_sizes('xxl');
          line-height: 35px;
        }
        a {
          margin-top: 10px;
        }
      }
    }
  }
}
.detail-section {
  background: map_colors('dark');
  padding: 100px 0 70px 0;
  .detail-item {
    text-align: center;
    margin-bottom: map_sizes('lg');
    cursor: pointer;
    span {
      display: inline-block;
      background: map_colors('gray');
      font-size: map_sizes('xxl');
      color: map_colors('primary');
      height: calc(#{map_sizes('lx-7')} + 2px);
      width: calc(#{map_sizes('lx-7')} + 2px);
      border-radius: 50%;
      line-height: 90px;
      text-align: center;
    }
    h3 {
      display: block;
      color: map_colors();
      font-size: calc(#{map_sizes('xl')} - 2px);
      font-weight: 600;
      line-height: 1.2;
      margin: 0;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
    p {
      font-size: calc(#{map_sizes()} - 2px);
      text-align: left;
      color: map_colors('light');
      font-weight: 400;
      line-height: 24px;
      margin: 0 0 10px 0;
    }
    &:hover {
      box-shadow: map_colors("primary") 1.4px 1.4px 1.2px;
      span {
        background: map_colors('primary_hover');
        color: scale-color(map_colors(),$alpha: -5%);
      }
    }
  }
}
.room-section {
  background: map_colors('black');
  padding: 100px 0 70px 0;
  .room-item {
    overflow: hidden;
    margin-bottom: map_sizes('xl');
    .room-content {
      position: relative;
      background: map_colors('dark');
      padding: 5px 20px 26px 30px;
      z-index: 1;
      &::after {
        content:'';
        position: absolute;
        left: -5px;
        top: -30px;
        height: 100px;
        width: 600px;
        border-top: 4px solid map_colors('primary');
        background: map_colors('dark');
        z-index: -1;
      }
      span {
        color: map_colors('primary');
        font-size: calc(#{map_sizes()} - 4px);
        text-transform: uppercase;
        font-weight: 700;
      }
      h5 {
        font-size: calc(#{map_sizes()} + 4px);
        color: map_colors();
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 3px;
      }
      a {
        display: inline-block;
        position: absolute;
        right: 30px;
        bottom: 26px;
        width: 46px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        background: map_colors('black');
        font-size: map_sizes('xl');
        color: map_colors();
        transition: color, background 300ms ease-in;
        &:hover {
          color: map_colors('primary');
          background: map_colors();
        }
      }
    }
    &:hover {
      img {
        transform: scale(1.2);
        transition: all 500ms ease-in-out;
      }
    }
  }
}
.pub-section {
  height: 550px;
  background-image: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5)),url('../assets/bg-0.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  .pub-text {
    h2 {
      color: map_colors();
      font-size: map_sizes('xl');
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: map_sizes('lg');
    }
    .subhead {
      font-size: map_sizes('xl');
      color: map_colors('light');
      font-weight: 700;
      margin-bottom: map_sizes('lx-2');
    }
    a {
        display: inline-block;
        font-size: map_sizes();
        padding: 17px 30px 16px;
        margin-top: 20px;
        line-height: 2px;
        border-radius: 20px;
        &:hover {
          text-decoration: none;
          background: map_colors('primary_hover');
        }
      }

  }
}
.pricing-section {
  background: map_colors('black');
  padding: 100px 0 70px 0;
  .section-title {
    margin-bottom: 56px;
  }
  .pricing-item {
    position: relative;
    padding: 40px 30px 52px;
    text-align: center;
    border: 1px solid map_colors("light");
    transform: skewY(-5deg);
    cursor: default;
    &:hover {
      background: map_colors();
      border-color: map_colors();
      h3 {
        color: map_colors('brown');
      }
      span {
        color: map_colors('light');
      }
      .pricing-price span {
        color: map_colors('dark');
      }
      ul li {
        color: map_colors('brown');
        font-weight: 700;
      }
      .pricing-link {
       background: map_colors('primary');
      }
      .pricing-icon {
        opacity: 1;
        visibility: visible;
      }
    }
    h3 {
      font-size: map_sizes('xl');
      color: map_colors();
      font-weight: 700;
      margin-bottom: map_sizes('xxs');
      transform: skewY(5deg);
    }
    .pricing-price {
      margin-bottom: 20px;
      transform: skewY(5deg);
      h2 {
        font-size: map_sizes('xl');
        font-weight: 700;
        color: map_colors('primary');
      }
      span {
        color: map_colors("white");
        font-size: map_sizes();
        font-weight: 700;
        text-transform: uppercase;
        transition: 300ms ease-in;
      }
    }
    ul {
      margin-bottom: map_sizes('lx-1');
      transform: skewY(5deg);
      li {
        font-size: map_sizes('sm');
        color: map_colors('light');
        line-height: map_sizes('xxl');
      }
    }
    .pricing-link {
      text-transform: uppercase;
      font-weight: 700;
      transform: skewY(5deg);
      cursor: pointer;
    }
    .pricing-icon {
      position: absolute;
      left: 50px;
      bottom: 120px;
      font-size: 48px;
      color: map_colors('primary');
      opacity: 0;
      visibility: hidden;
      transform: skewY(4deg) rotate(50deg);
    }
  }

}
</style>

