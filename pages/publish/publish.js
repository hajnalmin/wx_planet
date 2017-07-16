// pages/publish/publish.js
Page({
  data:{
    firsrCart:"发布类目",
    firsrArea:"发布区域",
    showCart:true,
    showArea:false,
    selectCart:true,
    cartChoice:false,
    selectArea:false
  },
  //点击选择类目
 clickCart:function(){
  var showCart = this.data.showCart;
  if(showCart == true){
   this.setData({
   cartChoice:true,
   selectCart:true,
   showCart:false,
 })
  }else{
   this.setData({
   cartChoice:false,
   selectCart:false,
   showCart:true,
   showArea:false
 })
  }
 } ,
 //点击切换类目
 cartSelect:function(e){
  this.setData({
   firsrCart:e.target.dataset.cart,
   showCart:false,
   showArea:true
  })
 },
 //点击选择区域
 clickArea:function(){
  var showArea = this.data.showArea;
  if(showArea == true){
   this.setData({
   areaChoice:true,
   selectArea:true,
   showArea:false
 })
  }else{
   this.setData({
   areaChoice:false,
   selectArea:false,
   showCart:false,
   showArea:true,
 })
  }
 } ,
 //点击切换区域
 areaSelect:function(e){
  this.setData({
   firsrArea:e.target.dataset.area,
   showArea:false
   //----------显示面板
   
  })
 },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})