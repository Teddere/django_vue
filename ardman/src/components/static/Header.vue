<template>
  <main class="navbar navbar-expand-lg navbar-dark fixed-top mainNav" :class="fixedNav ? 'navFixed':'bg-transparent'">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center logo">
        <i class="fa-solid fa-layer-group icon"></i>
        <div class="text-logo">Gym-<span>Arman</span></div>
      </a>
      <button type="button" class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto menuItems">
          <li class="nav-item ms-2">
            <a href="" class="nav-link duration-200">Activité</a>
          </li>
          <li class="nav-item ms-2">
            <a href="" class="nav-link duration-200">Enseignes</a>
          </li>
          <li class="nav-item ms-2">
            <a href="" class="nav-link duration-200">Abonnements</a>
          </li>
          <li class="nav-item ms-2">
            <a href="" class="nav-link duration-200">Contact</a>
          </li>
        </ul>
        <a href="#" class="btn  mx-2 button-primary duration-300 ease-linear">Connexion</a>
      </nav>
    </div>
  </main>
</template>
<script setup>
  import {ref,onMounted} from "vue";
  const fixedNav = ref(false);

  const handleScroll= ()=>{
    fixedNav.value = window.scrollY > 86;
  }

  onMounted(()=>{
    window.addEventListener('scroll',handleScroll)
  });
</script>
<style lang="scss">
@import "../../style/variables";
@import "../../style/functions";

.mainNav {
  transition: all 300ms ease-in;
  &.navFixed {
    background: map_colors('black');
    transition: all 300ms ease-out;
    #navMenu {
      background: inherit;
    }
  }
  #navMenu {
    .menuItems {
      .nav-link {
        color: scale-color(map_colors('white'),$alpha: -10%);
        &:hover {
          color: map_colors('primary_hover');
        }
      }
    }
  }

}

</style>
