<template>
  <div>
    <img
      :src="req?.tracks[0].al.picUrl"
      alt=""
      class="w-[18vw] h-[18vw] rounded-lg"
    />
  </div>
</template>
<script setup lang="ts">
import { rangkInfor } from "@/service";
import { useRequest } from "vue-request";
interface Props {
  picId: number;
}
const props = withDefaults(defineProps<Props>(), {
  picId: 4455,
});
console.log(props.picId);
const a = props.picId;
const { data: req } = useRequest(() => rangkInfor({ id: a }), {});
console.log(req);
</script>
<style></style>
