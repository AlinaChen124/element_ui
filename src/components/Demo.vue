<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="demo">
    <div class="demo-source">
      <slot name="source"></slot>
    </div>
    <div class="demo-control">
      <span @click="isShow = !isShow">{{isShow ? '隐藏' : '显示'}}</span>
    </div>
    <Transition>
    <div class="demo-code" v-show="isShow">
      <div class="code-description">
        <slot name="description"></slot>
      </div>
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    </Transition>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Demo',
  setup() {
    const isShow = ref(false);
    return {
      isShow
    }
  }
})
</script>

<style lang="scss">
$border-color: #ececec;
$primary-color: #409eff;
$padding: 10px;
.demo {
  border: 1px solid $border-color;
  border-radius: 4px;
  box-shadow: 0 0 10px #eee;

  &-source {
    padding: $padding;
    border-bottom: 1px solid $border-color;
  }

  &-control {
    padding: $padding 0;
    text-align: center;
    font-size: 12px;
    span {
      cursor: pointer;
    }

    span:hover {
      color: $primary-color;
    }
    
  }

  &-code {
    padding: $padding;
    background: #fafafa;
    .code-description {
      border: 1px solid $border-color;
      padding: 0 $padding;
      border-radius: 2px;
      background: #fff;
      code {
        color: #444;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 3px 7px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        font-size: 14px;
      }
    }
    .code-content code{
      background-color: #f7f7f7;
      font-family: Consolas, Menlo, Courier, monospace;
      border: none;
      display: block;
      font-size: 14px;
      padding: 16px 32px;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>


