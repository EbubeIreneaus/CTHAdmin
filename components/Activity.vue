<template>
  <div class="max-w-md w-full mx-auto bg-white dark:bg-slate-950 py-7 px-5 rounded-lg">
    <div class="flex justify-between items-center py-3 font-semibold mb-4">
      <h2>Todo</h2>
      <NuxtLink to="/" class="hover:text-slate-500"
        >new <i class="fa fa-plus-circle"></i
      ></NuxtLink>
    </div>
    <div>
        <ul>
            <li class="flex justify-between items-center gap-5 mb-2" v-for="x in 6" :key="x">
                <div class="flex-grow  py-2 px-2">
                    <h2 class=" line-clamp-1 text-ellipsis">What to do next</h2>
                    <p class="text-sm italic line-clamp-3 text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button class="p-2 hover:text-slate-400"><i class="fa fa-remove"></i></button>
            </li>
        </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
