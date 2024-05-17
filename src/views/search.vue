<template>
  <div>search</div>
  <input type="text" :placeholder="defaultKey" />
  <van-button @click="runSearchResult({ keywords: '海阔' })">搜索</van-button>
  <ul>
    <li v-for="song in songs" :key="song.id">{{ song.name }}</li>
  </ul>
</template>
<script setup lang="ts">
import { getDefaultKey, searchResult } from "@/service";
import { useRequest } from "vue-request";

const { data: defaultKey } = useRequest(getDefaultKey, {});
const { data: songs, run: runSearchResult } = useRequest(searchResult, {
  manual: true,
});
</script>
