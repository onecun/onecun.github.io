## 毛玻璃效果
::: tip
`blur(px)` 给图像设置高斯模糊。`radius` 一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；如果没有设定值，则默认是 0；这个参数可设置  css 长度值，但不接受百分比值。
:::
[参考](https://qishaoxuan.github.io/css_tricks/glass/)

**效果**
<template>
<div>
    <div class="wrap">
        <div class="bg-img">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558552962217&di=12dffd3936067d193c78fc59f5b1396f&imgtype=0&src=http%3A%2F%2Fp3.ifengimg.com%2Fa%2F2017_28%2F7ba41cb3e9e604c_size42_w886_h492.jpg">
        </div>
        <div class="blur"></div>
    </div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    position: relative;
    .bg-img {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: 100%;
            /* 高斯模糊 */
            filter: blur(6px);
        }
    }
}
</style>
``` css
img {
    /* 高斯模糊 */
    filter: blur(6px);
}
```
