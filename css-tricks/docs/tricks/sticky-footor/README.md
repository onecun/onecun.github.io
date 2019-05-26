# 底部自适应 
::: tip
如果页面内容不够长时，页脚固定在浏览器窗口的底部；如果内容足够长时，页脚固定在页面的最底部。总而言之，就是页脚一直处于最底。
:::
<template>
<div>
    <div>
        <input type="checkbox" v-model="value1">
        隐藏内容
    </div>
    <div class="wrap">
        <div class="main">
            <div :class='{none: value1}'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos unde incidunt maxime quasi ut adipisci consequatur labore corrupti at porro, esse voluptas, velit maiores ipsam nesciunt, ex iusto consectetur in.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos unde incidunt maxime quasi ut adipisci consequatur labore corrupti at porro, esse voluptas, velit maiores ipsam nesciunt, ex iusto consectetur inLorem ipsum dolor sit amet consecnde incidunt maxime quasi ut adipisci consequatur labore corrupti at porro, esse voluptas, velit maiores ipsam nesciunt, ex iusto consectetur x iusto consectetur .
            </div>
        </div>
        <div class="footer">底部</div>
    </div>
</div>
</template>

<style lang='scss' rel='stylesheet/scss' scoped>
.wrap {
    height: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
    overflow: auto;
    .main {
        flex: 1;
        padding: 10px;
    }
    .footer {
        min-height: 50px;
        background-color: orange;
        color: #fff;
    }
    .none {
        display: none;
    }
}
</style>

<script>
export default {
    data() {
        return {
            value1: false,
        }
    },
}
</script>

**html 结构:**
```html
<div class="wrap">
    <div class="main">
        ...
    </div>
    <div class="footer">底部</div>
</div>
```

## flex
> 不说了, 用就完事了

``` scss
wrap {
    height: 250px;
    display: flex;
    flex-direction: column;
    .main {
        flex: 1;
    }
    .footer {
        min-height: 50px;
        ...
    }
}
```

## absolute
> 通过绝对定位处理应该是常见的方案，只要使得页脚一直定位在主容器预留占位位置。

```scss
.wrap {
    height: 100%;
    .main {
        position: relative;
        min-height: 100%;
        padding-bottom: 50px;
        box-sizing: border-box;
    }
    .footer {
        position: absolute;
        bottom: 0;
        height: 50px;
    }
}
```

## calc()
> 通过计算函数 calc 计算（视窗高度 - 页脚高度）赋予内容区最小高度，不需要任何额外样式处理，代码量最少、最简单。

```scss
.wrap {
    min-height: 100%;
    overflow: auto;
    .main {
        min-height: calc(100% - 50px);
    }
    .footer {
        height: 50px;
        background-color: orange;
    }
}
```
[参考](https://aotu.io/notes/2017/04/13/Sticky-footer/)
