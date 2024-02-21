<template>
  <div
    class="min-h-screen w-screen bg-[#DADEE1] dark:bg-slate-950 dark:text-light-bg"
  >
    <div class="flex">
        <aside class="w-[20%] fixed z-40 h-screen bg-light-bg dark:bg-slate-950">
            <div class="max-h-[100px] py-6 bg-white/40 dark:bg-slate-800">
              <h2 class="text-2xl font-bold text-center text-slate-900 dark:text-white">Admin Panel</h2>
            </div>
            <ul class="*:py-2 *:rounded-xl *:hover:bg-white/70 *:dark:hover:bg-slate-600 *:mb-2">
                    <li >
                        <NuxtLink to="/" class="flex gap-7 px-5">
                            <div><i class="fas fa-home-lg"></i></div>
                            <div>Home</div>
                        </NuxtLink>
                    </li>
                    <li >
                        <NuxtLink to="/" class="flex gap-7 px-5">
                            <div><i class="fas fa-user-plus"></i></div>
                            <div>New Staff</div>
                        </NuxtLink>
                    </li>
                    <li >
                        <NuxtLink to="/" class="flex gap-7 px-5">
                            <div><i class="fas fa-folder-tree"></i></div>
                            <div>Templates</div>
                        </NuxtLink>
                    </li>
                    <li >
                        <NuxtLink to="/" class="flex gap-7 px-5">
                            <div><i class="fas fa-file-code "></i></div>
                            <div>Portfolio</div>
                        </NuxtLink>
                    </li>
            </ul>
        </aside>

      <div class="ms-[21%] flex-grow">
        <header class="w-full shadow">
        <div class="w-full flex items-center justify-between px-10">
          <div class="flex items-center gap-7 w-full">
            <i class="fas fa-bars-staggered fa-xl"></i>
            <div class="rounded">
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

onMounted(() => {
  if (colorMode.preference == "dark") {
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped></style>
