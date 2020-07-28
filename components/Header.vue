<template>
  <div class="bg-white lg:px-20" style="min-height: 5rem">
    <div class="hidden md:block">
      <div class="lg:grid grid-cols-3 pt-4 bg-white">
        <div class="flex justify-center">
          <img src="~/assets/Selendra.jpg" alt="selendra" class="w-12 mr-6">
        </div>
        <div class="flex items-center">
          <Product />
          <digital-asset class="lg:ml-4"/>
          <Company class="lg:ml-4"/>
        </div>
        <div class="flex justify-end">
          <button class="btn text-orange-600 w-32 block">Login</button>
          <button class="btn text-orange-600 lg:ml-2 w-32 border-orange-600 md:border-2 hover:bg-orange-600 hover:text-white transition ease-in-out duration-500">Sign Up</button>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="md:hidden">
      <div class="flex">
        <button @click="handleNav">
          <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="flex justify-center w-full pt-4">
          <img src="~/assets/Selendra.jpg" alt="selendra" class="w-12 mr-8">
        </div>
      </div>
      <div class="bg-white" :class="this.active === false ? 'block' : 'hidden' ">
        <ul class="px-4">
          <li class="btn flex justify-end">
            <a href="">Home</a> 
          </li>
          <li class="btn flex justify-end">
            <a href="">About</a>
          </li>
          <li class="btn flex justify-end">
            <a href="">Privacy & Policy</a>
          </li>
          <li class="btn flex justify-end">
            <a href="">Term Of Use</a>
          </li>
          <li class="btn flex justify-end">
            <a href="">Blog</a>
          </li>
          <li class="btn text-orange-500 flex justify-end">
            <a href="">LogIn</a>
          </li>
          <li class="btn text-orange-500 rounded  flex justify-end">
            <a href="">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/components/MegaMenu/Product';
import DigitalAsset from '~/components/MegaMenu/DigitalAsset';
import Company from '~/components/MegaMenu/Company';

export default {
  components: {
    Product,
    DigitalAsset,
    Company
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    handleNav() {
      this.active = !this.active;
    }
  }
}
</script>