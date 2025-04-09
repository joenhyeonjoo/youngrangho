document.addEventListener(`DOMContentLoaded`, function () {
  const submenuTab = document.querySelectorAll(`.in_menu li`);
  const submenuBox = document.querySelector(`.sub_menu_box`);
  const subMenus = document.querySelectorAll(`.sub_menu`);

  submenuTab.forEach((li) => {
    li.addEventListener(`mouseenter`, () => {
      submenuBox.classList.add(`active`);
      subMenus.forEach((tab) => tab.classList.remove(`active`));

      const target = li.dataset.tab;
      const changeTab = document.getElementById(target);
      changeTab.classList.add(`active`);
    });

    submenuBox.addEventListener(`mouseleave`, function () {
      this.classList.remove(`active`);
    });
  });

  window.addEventListener(`scroll`, () => {
    const scrollHight = window.scrollY;
    const cardBox = document.querySelectorAll(`.sec_3 .list `);
    console.log(scrollHight);

    // 2400~2900
    // 1 = a * 2400 + b
    // 0 = a * 2900 + b
    // 0.9 = a * 2900 + b

    const opacityData = (-1 / 500) * scrollHight + 29 / 5;
    cardBox[0].style.opacity = opacityData;

    const scaleData = (-1 / 5000) * scrollHight + 37 / 25;
    cardBox[0].style.transform = `scale(${scaleData})`;

    // 3000~3500
    // 1 = a * 3000 + b
    // 0 = a * 3500 + b
    // 0.9 = a * 3500 + b

    const secondOpacityData = (-1 / 500) * scrollHight + 7;
    const secondScaleData = (-1 / 5000) * scrollHight + 8 / 5;

    cardBox[1].style.opacity = secondOpacityData;
    cardBox[1].style.transform = `scale(${secondScaleData})`;

    // 3600~4100
    // 1 = a * 3600 + b
    // 0 = a * 4100 + b
    // 0.9 = a * 4100 + b

    const thirdOpacityData = (-1 / 500) * scrollHight + 41 / 5;
    const thirdScaleData = (-1 / 5000) * scrollHight + 43 / 25;

    cardBox[2].style.opacity = thirdOpacityData;
    cardBox[2].style.transform = `scale(${thirdScaleData})`;
  });
});
