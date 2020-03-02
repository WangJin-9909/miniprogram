// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "world",
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'james',age: 28},
      {id: 112, name: 'curry',age: 32},
      {id: 113, name: 'why',  age: 18} 
      ],
      counter:0
  },
  handlerBtnClick(){
    console.log("按钮发送点击事件");
    //1.下面的方法不会改变解密界面变化
    //设置变量自增
    this.data.counter++;
    console.log("counter = " + this.data.counter);
    //2.使用下面的方法设置界面改变
    this.setData({
      counter: this.data.counter++
    })
  }


})