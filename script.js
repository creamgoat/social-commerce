document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      const postId = button.getAttribute('data-post-id');
      const likeCountElement = document.getElementById(`like-count-${postId}`);
      const likeAnimationElement = document.getElementById(`like-animation-${postId}`);
      let currentCount = parseInt(likeCountElement.textContent);
      
      // 增加点赞计数
      likeCountElement.textContent = currentCount + 1;

      // 显示点赞动画
      likeAnimationElement.style.opacity = 1;
      likeAnimationElement.style.transform = 'translateY(-40px)';
      setTimeout(() => {
        likeAnimationElement.style.opacity = 0;
        likeAnimationElement.style.transform = 'translateY(0)';
      }, 500);
    });
  });
});