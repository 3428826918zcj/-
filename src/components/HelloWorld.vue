<template>
  <h1>hello,world</h1>
  <button @click="emit('abc', 123, '123')">触发abc</button>
  <button @click="emit('def')">触发def</button>
</template>
<script setup lang="ts">
// import { ref } from "vue";
interface Props {
  count: number[];
  type: "a" | "b" | "c";
  index?: number;
}
// 使用interface定义组件的props并给定默认值！
// withDefaults是给props提供默认值的
const props = withDefaults(defineProps<Props>(), {
  count: () => [1, 2, 3],
  index: 1,
  type: "a",
});
console.log(props.count, props.type);
// 如何为组件的自定义事件标注类型？
const emit = defineEmits<{
  // 定义了一个abc的自定义事件 并且不用给abc事件的回调函数传递参数
  // key表示自定义事件名称 对应的值必须是类数组 通过位置约束参数类型
  (event: "abc", id: number, title: string): void;
  (event: "def"): void;
  // abc: [id: number, title: string];
  // def: [];
}>();

const count = ref();
console.log(count.value);
</script>
<style scoped></style>
