// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 添加图片加载错误处理
    const playerImage = document.querySelector('.player-image');
    playerImage.onerror = function() {
        this.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="%23f0f0f0" width="100" height="100"/><text fill="%23999" font-family="Arial" font-size="14" x="50%" y="50%" text-anchor="middle">图片加载失败</text></svg>';
    };
});