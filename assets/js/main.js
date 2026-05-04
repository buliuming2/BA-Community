// 等待页面加载完成再执行
document.addEventListener('DOMContentLoaded', function() {
  // 获取轮播元素
  const imgBox = document.querySelector('.banner-img-box');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // 当前是第几张图
  let index = 0;

  // 下一张
  nextBtn.addEventListener('click', function() {
    index++;
    if (index > 2) index = 0;
    imgBox.style.transform = `translateX(-${index * 100}%)`;
  });

  // 上一张
  prevBtn.addEventListener('click', function() {
    index--;
    if (index < 0) index = 2;
    imgBox.style.transform = `translateX(-${index * 100}%)`;
  });
});