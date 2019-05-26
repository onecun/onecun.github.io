# tab-栏 追随动画
:::tip
核心是利用 `~` 选择器，用法 `A ~ B`,表示 `A` 元素后面的兄弟元素 `B`
:::

```html
<div class="wrap">
    <li class="tab">tab1</li>
    ...
</div>
```
**hover 动画 :**
<template>
    <div class="wrap">
        <li class="tab" v-for="i in 5">tab{{ i }}</li>
    </div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    .tab {
        display: block;
        padding: 0 15px;
        font-size: 18px;
        position: relative;
        color: #6c757d;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            background: #333;
            left: 100%;
            bottom: 0;
            width: 0;
            height: 2px;
            transition: all 0.4s;
            background: #17a2b8;
        }
        &:hover {
            color: #17a2b8;
            &::after {
                width: 100%;
                left: 0;
                transition-delay: 0.2s;
            }
            & ~ .tab::after {
                left: 0;
            }
        }
    }
}
.tab:hover ~ .tab::after {
    left: 0;
}
</style>

```scss
.wrap {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    .tab {
        display: block;
        padding: 0 15px;
        font-size: 18px;
        position: relative;
        color: #6c757d;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            left: 100%;
            bottom: 0;
            width: 0;
            height: 2px;
            transition: all 0.4s;
            background: #17a2b8;
        }
        &:hover {
            color: #17a2b8;
            &::after {
                width: 100%;
                left: 0;
                transition-delay: 0.2s;
            }
        }
    }
}
// 实现动画的核心
.tab:hover ~ .tab::after {
    left: 0;
}
```

**click 动画 :**
<template>
    <div class="wrap-2">
        <li v-on:click="active(i)" class="tab" v-bind:class="{active: i == show}" v-for="i in 5">tab{{ i }}</li>
    </div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap-2 {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    .tab {
        display: block;
        padding: 0 15px;
        font-size: 18px;
        position: relative;
        color: #6c757d;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            background: #333;
            left: 100%;
            bottom: 0;
            width: 0;
            height: 2px;
            transition: all 0.3s;
            background: #17a2b8;
        }
        &.active {
            color: #17a2b8;
            &::after {
                width: 100%;
                left: 0;
                transition-delay: 0.2s;
            }
            & ~ .tab::after {
                left: 0;
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            show: 1,
        }
    },
    methods: {
        active(index) {
            console.log(index, typeof index) 
            this.show = index
        },
    }
}
</script>

```scss
.wrap-2 {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    .tab {
        display: block;
        padding: 0 15px;
        font-size: 18px;
        position: relative;
        color: #6c757d;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            background: #333;
            left: 100%;
            bottom: 0;
            width: 0;
            height: 2px;
            transition: all 0.3s;
            background: #17a2b8;
        }
        &.active {
            color: #17a2b8;
            &::after {
                width: 100%;
                left: 0;
                transition-delay: 0.2s;
            }
            & ~ .tab::after {
                left: 0;
            }
        }
    }
}
```
---
[更多参考](https://juejin.im/post/5ab9e9056fb9a028be360292)