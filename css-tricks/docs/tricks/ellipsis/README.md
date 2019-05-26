# 文字超出显示省略号

## 单行文字

<template>
<div class="ellipsis">
    愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光。就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.ellipsis {
    margin-top: 30px;
    /* width: 100%; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #333;
    padding: 15px;
    box-sizing: border-box;
}
</style>

```scss
.article {
    margin-top: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

## 多行文字
> 好复杂啊

[css高级应用三种方法实现多行省略](https://juejin.im/post/5caeef8be51d456e3b70185d)