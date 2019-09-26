<template>
  <div class="body">
    <div class="search">
      <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    </div>
    <div class="slideshow">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="grid">
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="grid1">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid>
    </div>
    <div class="grid2">
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                images: [
                    'https://img.alicdn.com/tfs/TB1ECqoghz1gK0jSZSgXXavwpXa-520-280.jpg_q90_.webp',
                    'https://img.alicdn.com/simba/img/TB1jWt1bEH1gK0jSZSySuttlpXa.jpg',
                    'https://img.alicdn.com/simba/img/TB1DM0rC7voK1RjSZFDSutY3pXa.jpg'
                ]
            }
        }
    }
</script>

<style scoped>

</style>
