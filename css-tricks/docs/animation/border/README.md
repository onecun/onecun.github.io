# 边框动画
:::tip
主要是利用 `transform: scale();` 完成此动画。`input` 被 `focus`时， `scale(0)` -> `scale(1)`,  通过 `transform-origin` 设置起点 `center top bottom left right` 等。
:::

<template>
<div class="wrap">
<div class="wrap-input">
    <input type="text" class="text" placeholder="Input Outline">
    <span class="input-span bottom"></span>
    <span class="input-span right"></span>
    <span class="input-span top"></span>
    <span class="input-span left"></span>
</div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    width: 100%;
    height: 100px;
    background-color: #090821;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrap-input {
    position: relative;
    background-color: #090821;
    width: 200px;
    .text {
        width: 100%;
        color: white;
        font-size: inherit;
        font-family: inherit;
        background-color: hsl(236, 32%, 26%);
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid transparent;
        transition: background-color 0.3s ease-in-out;
        &:focus {
        outline: none;
        }
        &::placeholder {
        color: hsla(0, 0%, 100%, 0.6);
        }
    }

    .input-span {
        position: absolute;
        background-color: #3cefff;
        transition: transform 0.5s ease;
    }

    .bottom,
    .top {
        height: 1px;
        left: 0;
        right: 0;
        transform: scaleX(0);
    }

    .left,
    .right {
        width: 1px;
        top: 0;
        bottom: 0;
        transform: scaleY(0);
    }

    .bottom {
        bottom: 0;
        transform-origin: bottom right;
    }

    .text:focus ~ .bottom {
        transform-origin: bottom left;
        transform: scaleX(1);
    }

    .right {
        right: 0;
        transform-origin: top right;
    }

    .text:focus ~ .right {
        transform-origin: bottom right;
        transform: scaleY(1);
    }

    .top {
        top: 0;
        transform-origin: top left;
    }

    .text:focus ~ .top {
        transform-origin: top right;
        transform: scaleX(1);
    }

    .left {
        left: 0;
        transform-origin: bottom left;
    }

    .text:focus ~ .left {
        transform-origin: top left;
        transform: scaleY(1);
    }
}
</style>

```html
<div class="wrap">
    <input type="text" placeholder=".text Outline">
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
</div>
```

```scss
<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    position: relative;
    background-color: #090821;
    width: 100px;
    .text {
        width: 100%;
        color: white;
        font-size: inherit;
        font-family: inherit;
        background-color: hsl(236, 32%, 26%);
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid transparent;
        transition: background-color 0.3s ease-in-out;
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: hsla(0, 0%, 100%, 0.6);
        }
    }

    .input-span {
        position: absolute;
        background-color: #3cefff;
        transition: transform 0.5s ease;
    }

    .bottom,
    .top {
        height: 1px;
        left: 0;
        right: 0;
        transform: scaleX(0);
    }

    .left,
    .right {
        width: 1px;
        top: 0;
        bottom: 0;
        transform: scaleY(0);
    }

    .bottom {
        bottom: 0;
        transform-origin: bottom right;
    }

    .text:focus ~ .bottom {
        transform-origin: bottom left;
        transform: scaleX(1);
    }

    .right {
        right: 0;
        transform-origin: top right;
    }

    .text:focus ~ .right {
        transform-origin: bottom right;
        transform: scaleY(1);
    }

    .top {
        top: 0;
        transform-origin: top left;
    }

    .text:focus ~ .top {
        transform-origin: top right;
        transform: scaleX(1);
    }

    .left {
        left: 0;
        transform-origin: bottom left;
    }

    .text:focus ~ .left {
        transform-origin: top left;
        transform: scaleY(1);
    }
}
</style>
```



