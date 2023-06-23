- JavaScript
  - HTML DOM Methods

- Vue.js
  - The difference between Vue2.x and Vue3.x to initialize a Vue application.
  - Data's properties will be automatically merged as global variables by Vue. Hence methods can access data's properties by `this`.
  - Each application instance will be rendered only after `.mount()` method is called. `mount()` accept a container as parameter such as a DOM element or a selector.
  - Text interpolation
  - v-bind
  - v-html



- Udemy Assignment1
- 回顾了一下对于 `v-bind`的用法，将数据绑定到 HTML 元素的属性上，比如 value、href、src
  - 不应该用 interpolation，用`<div v-bind:[attribute]="[Vue data]"></div>`

- JavaScript
  - event 传参，也可以用 `$event` 隐式传参？但是好像会出问题
    - ![image-20230621000719801](/Users/hengmii/Library/Application Support/typora-user-images/image-20230621000719801.png)
    - event.target.value
    - event.preventDefault()
- Vue.js
  - Event Handling
    - v-on
    - Inline Handlers
      - 直接在 tag 里写一些简单的 js，不被推荐
    - Method Handlers
  - Event Modifiers
    - `<form v-on:submit.prevent="submitForm">` 代替 `event.preventDefault()`
    - ` @click.right`
    - `v-on:keyup.enter`



- Vue.js

  - Computed Properties

    > 为什么不建议使用 methods 输出动态变量的值？

    - 每当页面上的任何内容发生变化时，html 中调用的方法都会被重新执行，因为 Vue 不知道用户行为是否会对这个方法的结果产生影响

  - computed

    - vue 会先检查 data properties 中是否有这个变量，如果没有，则去 computed properties 检查是否有这个计算方法；vue 会判断 computed properties 里面的 dependencies（变量）是否发生改变，如果有的话，才会重新执行 computed 方法。

  - methods vs. computed

  - Watchers

    - 摸了

    

    

    

​		