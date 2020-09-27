/**
 * rem 初始化设置
 * @screenRatioByDesign 设计稿比例
 */
export function remInit(screenRatioByDesign) {
    const docEle = document.documentElement;
    function setRemUnit() {
      const minWidth = Math.min(docEle.clientWidth, window.innerWidth || 0);
      const minHeight = Math.min(docEle.clientHeight, window.innerHeight || 0);
      const screenRatio = minWidth / minHeight;
  
      const rem = (
        screenRatio > screenRatioByDesign
          ? (screenRatioByDesign / screenRatio)
          : 1
      ) * (minWidth / 19.2);
      docEle.style.fontSize = `${rem.toFixed(2)}px`;
    }
    setRemUnit();
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        setRemUnit();
      }
    });
  }