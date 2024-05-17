<template>
  <!-- 头部索引部分 -->
  <div class="px-[4vw] bg-[#f6f8fc]">
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft" />
    <!-- 标签页 -->
    <van-tabs v-model:active="active">
      <van-tab v-for="item in title" :title="item">
        <div class="flex flex-start">
          <span class="text-[5vw]">榜单推荐</span>
        </div>
        <!-- 三个方块 -->
        <div class="flex justify-between mb-[10vw]">
          <div
            class="w-[28vw] h-[28vw] rounded-lg bg-[#ccc] flex justify-center items-center relative"
            v-for="item in res"
            :key="item.id"
          >
            <img
              :src="item?.coverImgUrl"
              alt=""
              class="w-[28vw] h-[28vw] rounded-lg"
            />
            <div class="absolute bottom-[2vw] right-[2vw] text-[#fff]">
              <Icon icon="bx:right-arrow" />
            </div>
          </div>
        </div>
        <!-- 官方榜 -->
        <div>
          <div class="text-[5vw] flex items-center mb-[3vw]">
            <Icon icon="ri:netease-cloud-music-fill" class="text-[red]" />
            <span>官方榜</span>
          </div>
          <!-- 各个榜单 -->
          <div class="mb-[9vw]">
            <div
              class="w-[90vw] h-[35vw] rounded-lg bg-[#fff] px-[4vw] mb-[4vw]"
              v-for="item in AllRanking"
              :key="item.id"
            >
              <div class="h-[12vw] flex justify-between items-center">
                <span>{{ item.name }}</span>
                <span class="text-[#999da7]">{{ item.updateFrequency }}</span>
              </div>
              <div class="flex justify-between">
                <pic :picId="item.id"></pic>
                <div class="flex flex-col">
                  <div
                    class="flex justify-between w-[55vw] ml-[8vw]"
                    v-for="(itemes, index) in item.tracks"
                    :key="index"
                  >
                    <span>{{ index + 1 }}</span>
                    <div class="flex w-[40vw] overflow-hidden">
                      <p class="flex flex-start text-[3vw] text-nowrap">
                        {{ itemes.first }}-
                      </p>
                      <p class="text-[#aaabd4] text-[3vw] text-nowrap">
                        {{ itemes.second }}
                      </p>
                    </div>
                    <span class="text-[#68bc95]">新</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 各个榜单的方块 -->
          <div class="bg-[#f2f4fb]">
            <!-- 精选榜 -->
            <div class="text-[5vw] mb-[3vw] flex flex-start">
              <span>精选榜</span>
            </div>
            <div class="flex flex-wrap justify-between">
              <div
                class="w-[30vw] h-[30vw] rounded-lg mt-[3vw]"
                v-for="item in RankAll?.slice(0, 11)"
                :key="item.id"
              >
                <img
                  :src="item?.coverImgUrl"
                  alt=""
                  class="w-[30vw] h-[30vw] rounded-lg"
                />
              </div>
            </div>
            <!-- 曲风榜 -->
            <div>
              <div
                class="text-[5vw] mb-[3vw] flex flex-start mt-[10vw] items-center"
              >
                <span>曲风榜</span>
              </div>
              <div class="flex flex-wrap justify-between">
                <div
                  class="w-[30vw] h-[30vw] rounded-lg mt-[3vw]"
                  v-for="item in RankAll?.slice(11, 19)"
                  :key="item.id"
                >
                  <img
                    :src="item?.coverImgUrl"
                    alt=""
                    class="w-[30vw] h-[30vw] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <!-- 全国榜 -->
            <div>
              <div
                class="text-[5vw] mb-[3vw] flex flex-start mt-[10vw] items-center"
              >
                <span>全球榜</span>
              </div>
              <div class="flex flex-wrap justify-between">
                <div
                  class="w-[30vw] h-[30vw] rounded-lg mt-[3vw]"
                  v-for="item in RankAll?.slice(19, 25)"
                  :key="item.id"
                >
                  <img
                    :src="item?.coverImgUrl"
                    alt=""
                    class="w-[30vw] h-[30vw] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <!-- 语种榜 -->
            <div>
              <div
                class="text-[5vw] mb-[3vw] flex flex-start mt-[10vw] items-center"
              >
                <span>语种榜</span>
              </div>
              <div class="flex flex-wrap justify-between">
                <div
                  class="w-[30vw] h-[30vw] rounded-lg mt-[3vw]"
                  v-for="item in RankAll?.slice(25, 32)"
                  :key="item.id"
                >
                  <img
                    :src="item?.coverImgUrl"
                    alt=""
                    class="w-[30vw] h-[30vw] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <!-- 特色榜 -->
            <div>
              <div
                class="text-[5vw] mb-[3vw] flex flex-start mt-[10vw] items-center"
              >
                <span>特色榜</span>
              </div>
              <div class="flex flex-wrap justify-between">
                <div
                  class="w-[30vw] h-[30vw] rounded-lg mt-[3vw]"
                  v-for="item in RankAll?.slice(33, 39)"
                  :key="item.id"
                >
                  <img
                    :src="item?.coverImgUrl"
                    alt=""
                    class="w-[30vw] h-[30vw] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { allRanking, rangk, rangkInfor, rangkAll } from "@/service";
import { useRequest } from "vue-request";
import pic from "@/components/pic.vue";
//所有榜单
const { data: AllRanking } = useRequest(allRanking, {});
console.log(AllRanking);
const { data: res } = useRequest(rangk);
console.log(res);

const { data: RankAll } = useRequest(rangkAll);
console.log(RankAll);
const onClickLeft = () => history.back();
const active = ref(0);
//获取榜单详细数据的图片
const { data: req } = useRequest(() => rangkInfor({ id: 19723756 }), {});
console.log(req);

const title = ref();
title.value = ["官方", "精选", "曲风", "全球", "语种", "特色"];
</script>
<style></style>
