<template>
  <div
    class="min-h-screen w-screen bg-[#DADEE1] dark:bg-slate-900 dark:text-light-bg"
  >
    <div class="flex">
        <aside class="max-w-0 lg:max-w-[20%] w-full overflow-hidden  fixed z-40 h-screen bg-light-bg dark:bg-slate-950 transition-all duration-300 ease-in-out">
            <div class="max-h-[100px] py-6 bg-white/40 dark:bg-slate-800 flex lg:block justify-between px-5">
              <h2 class="text-2xl font-bold text-center text-slate-900 dark:text-white invisible">Admin Panel</h2>
              <button class="border border-slate-500 px-3 py-2 rounded-xl" @click="navBarClick" v-if="device.isMobileOrTablet">
                <i class="fas fa-close"></i>
                </button>
            </div>
            <ul class="*:py-2 *:rounded-xl *:mb-2 relative">
                    <li class="hover:bg-white/50 dark:hover:bg-slate-600 group relative">
                        <NuxtLink to="/" class="flex items-center gap-7 px-5">
                            <div><i class="fas fa-home-lg side-icon  p-3 rounded-full"></i></div>
                            <div class="link-txt">Home</div>
                        </NuxtLink>
                    </li>
                    <li class="hover:bg-white/50 dark:hover:bg-slate-600 group relative">
                        <NuxtLink to="/" class="flex items-center gap-7 px-5">
                            <div><i class="fas fa-user-plus side-icon p-3 rounded-full"></i></div>
                            <div class="link-txt">New Staff</div>
                        </NuxtLink>
                    </li>
                    <li class="hover:bg-white/50 dark:hover:bg-slate-600 group relative">
                        <NuxtLink to="/" class="flex gap-7 px-5 items-center">
                            <div><i class="fas fa-folder-tree side-icon p-3 rounded-full"></i></div>
                            <div class="link-txt">Templates</div>
                        </NuxtLink>
                    </li>
                    <li class="hover:bg-white/50 dark:hover:bg-slate-600 group relative">
                        <NuxtLink to="/" class="flex gap-7 px-5 items-center">
                            <div><i class="fas fa-file-code side-icon p-3 rounded-full"></i></div>
                            <div class="link-txt">Portfolio</div>
                        </NuxtLink>
                    </li>
            </ul>
        </aside>

      <div class="lg:ms-[21%] flex-grow main transition-all duration-300 ease-in-out">
        <header class="w-full shadow">
        <div class="w-full flex items-center justify-between px-10">
          <div class="flex items-center gap-7 w-full">
            <i class="fas fa-bars-staggered fa-xl" @click="navBarClick()"></i>
            <div class="rounded hidden lg:inline-block">
              <input
                type="search"
                class="py-1.5 px-10 text-black/60 bg-light-bg outline-none ps-2"
              />
              <button
                class="px-3 bg-slate-800 py-1.5 text-light-bg rounded m-1 dark:bg-light-bg dark:text-slate-800"
              >
                <i class="fas fa-search fa-xl"></i>
              </button>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <i
              class="fas fa-moon cursor-pointer"
              v-if="$colorMode.preference == 'dark'"
              @click="$colorMode.preference = 'light'"
            ></i>
            <i
              class="fas fa-sun text-white cursor-pointer"
              v-else
              @click="$colorMode.preference = 'dark'"
            ></i>
            <div class="relative">
              <i class="fas fa-bell"> </i>
              <span
                class="absolute -top-2 -right-2.5 border text-xs px-1.5 rounded-full bg-slate-800 text-white"
                >3</span
              >
            </div>
            <img
              src="/img/cth_logo_l.png"
              class="size-20"
              v-if="$colorMode.preference == 'dark'"
            />
            <img src="/img/cth_logo.png" class="size-20" v-else />
          </div>
        </div>
      </header>
        <slot></slot>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const device = useDevice()
colorMode.preference = "dark";
watch(
  () => colorMode.preference,
  () => {
    if (colorMode.preference == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
);

function navBarClick(){
  const aside = document.querySelector('aside') as HTMLElement
  const asideIcon: any = document.querySelectorAll('.side-icon') 
  const linkTxt: any = document.querySelectorAll('.link-txt') 
  const main: any = document.querySelector('.main') 

  if (device.isMobileOrTablet) {
    aside.classList.toggle('!max-w-[85%]')
  }else if(device.isDesktop){
    aside.classList.toggle('!max-w-[100px]')
    main.classList.toggle('!ms-[110px]')
    for (let i = 0; i <= asideIcon.length; i++) {
      // icon.classList.toggle('fa-lg')
      asideIcon[i].classList.toggle('border')
      linkTxt[i].classList.toggle('invisible')
    }
  }
}

onMounted(() => {
  if (colorMode.preference == "dark") {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped></style>
