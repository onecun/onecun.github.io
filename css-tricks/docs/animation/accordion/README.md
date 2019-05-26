# 手风琴动画
:::tip
主要利用 `transition` 在`宽/高`发生改变时，实现动画效果
:::
## 横的

```html
<div class="wrap">
    <li class="accordion-item" v-for="i in 5">
        <span>item {{ i }}</span>
    </li>
</div>
```

<template>
    <div class="wrap">
        <li class="accordion-item" v-for="i in 5">
            <span>item {{ i }}</span>
        </li>
    </div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    display: flex;
    align-items: center;
    height: 200px;
    width: 100%;
    overflow: hidden;
    .accordion-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 90%;
        background-color: #ccc;
        border: 1px solid #333;
        transition: width 0.3s;
        &:hover {
            width: 70%;
        }
    }
}
</style>

```scss
.wrap {
    display: flex;
    align-items: center;
    height: 200px;
    width: 100%;
    overflow: hidden;
    .accordion-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 90%;
        background-color: #ccc;
        border: 1px solid #333;
        transition: width 0.3s;
        &:hover {
            width: 70%;
        }
    }
}
```

## 竖的

<template>
    <div class="wrap-2">
        <li class="accordion-item" v-for="i in 5">
            <span>item {{ i }}</span>
        </li>
    </div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-2 {
    display: flex;
    align-items: center;
    height: 400px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    .accordion-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        background-color: #ccc;
        border: 1px solid #333;
        transition: height 0.3s;
        &:hover {
            height: 70%;
        }
    }
}
</style>
```scss
.wrap-2 {
    display: flex;
    align-items: center;
    height: 400px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    .accordion-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        background-color: #ccc;
        border: 1px solid #333;
        transition: height 0.3s;
        &:hover {
            height: 70%;
        }
    }
}
```