# 水平居中
::: tip
大部分情况下: flex 一把梭！
:::
## 行内元素
```scss
.parentElement {
    text-align: center;
    .childElement {
        // child 是行内元素
        display: inline;
    }
}
```
## 块级元素
```scss
.parentElement {
    .childElement {
        // child 是块级元素
        display: block;
        margin: 0 auto;
    }
}
```
## 绝对定位
```scss
.parentElement {
    position: relative;
    .childElement {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
}
```
## display: flex
```scss
.parentElement {
    display: flex;
    justify-content: center;
    .childElement {
    }
}
```
## 子元素包含 float:left 属性
```scss
.parentElement {
    width:fit-content;
    margin:0 auto;
    .childElement {
        // child 浮动
        float: left;
    }
}
```