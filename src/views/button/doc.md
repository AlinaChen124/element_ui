# button

## 基础用法

通过`type`、`width`属性设置不同类型的按钮，按钮支持 `default`、`primary`、`success`、`warning`、`danger`、`text` 六种类型，默认为 `default`
::: demo 

```html
    <my-row gutter="20" style="margin:10px">
        <Button text>默认按钮</Button>
        <Button type="primary" text>主要按钮</Button>
        <Button type="success" text>成功按钮</Button>
        <Button type="info" text>文本按钮</Button>
        <Button type="warning" text>警告按钮</Button>
        <Button type="danger" text>危险按钮</Button>
    </my-row>
    <my-row :gutter="20" style="margin:10px" >
        <Button >默认</Button>
        <Button type="primary" >保存</Button>
        <Button type="success" >保存</Button>
        <Button type="info" >保存</Button>
        <Button type="warning" >保存</Button>
        <Button type="danger" >保存</Button>
    </my-row>
    <my-row :gutter="20" style="margin:10px">
        <Button round>默认</Button>
        <Button type="primary" round>保存</Button>
        <Button type="success" round>保存</Button>
        <Button type="info" round>保存</Button>
        <Button type="warning" round>保存</Button>
        <Button type="danger" round>保存</Button>
    </my-row>
```
:::

## 禁用状态

使用`disable`禁用

::: demo 

```html
    <my-row gutter="20" style="margin:10px">
        <Button disabled>默认按钮</Button>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="info" disabled>文本按钮</Button>
        <Button type="warning" disabled>警告按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
    </my-row>
```
:::

## 带 Icon 图标

使用`icon`添加Icon图标

::: demo 

```html
    <my-row gutter="20" style="margin:10px">
        <Button icon="success">默认按钮</Button>
        <Button type="primary" icon="success">主要按钮</Button>
        <Button type="success" icon="success">成功按钮</Button>
        <Button type="info" icon="success">文本按钮</Button>
        <Button type="warning" icon="success">警告按钮</Button>
        <Button type="danger" icon="success">危险按钮</Button>
    </my-row>
```
:::

## API

### Button Props

| 参数       | 类型          | 说明         |
| ---------- | ------------- | ----------------------------------------------------------------- |
| type       | String        | 类型，实际是给按钮添加类名，支持`default`、`primary`、`success`、`warning`、`danger`、`text` |
| round      | boolean/false | 是否圆角按钮  |
| text       | boolean/false | 是否为文本按钮  |
| disabled   | boolean/false | 是否禁用状态                                                      |
| icon       | String        | 前缀 icon                                                         |
| -          | -             | 其它原生属性                                                      |

### Button Event

|a|b|c|
|:-:|:-:|:-:|
|a1|b1|c1|
