const dateBtn = document.querySelectorAll('.datepicker__btn');
const togleBtn = document.querySelectorAll('.order-btn');


for (let item of dateBtn) {
    item.addEventListener('click', () => {
        item.style.borderBottom = '2px solid #7cb8e9';
        for (let btn of dateBtn) {
            if (btn !== item) {
                btn.style.borderBottom = 'none';
            }
        }
    });
};

for (let item of togleBtn) {
    item.addEventListener('click', () => {
        item.style.border = '2px solid #7cb8e9';
        for (let btn of togleBtn) {
            if (btn !== item) {
                btn.style.border = '1px solid #9c9c9c';
            }
        }
    });
};

