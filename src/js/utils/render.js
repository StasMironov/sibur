export default {
    // Рендер пагинации для swiper
    // @see src/include/@atoms/nav-count
    renderFraction: (swiper, current, total) => `
        <span class="nav-count__current">0${current.toString().length === 1 ? `${current}` : current}</span>
        —
        <span class="nav-count__total">0${total.toString().length === 1 ? `${total}` : total}</span>
    `,

    // @see src/include/@atoms/nav-arrows
    renderArrows: (color) => `
        <div class="nav-arrows ${color ? `nav-arrows--${color}` : ''}">
            <button type="button" class="nav-arrows__button" data-nav-arrow-prev title="Назад" aria-label="Назад">
                <svg aria-hidden="true" class="icon-symbol icon-symbol--default">
                    <use xlink:href="#icon-arrow-1-left"></use>
                </svg>
            </button>
            <button type="button" class="nav-arrows__button" data-nav-arrow-next title="Вперёд" aria-label="Вперёд">
                <svg aria-hidden="true" class="icon-symbol icon-symbol--default">
                    <use xlink:href="#icon-arrow-1-right"></use>
                </svg>
            </button>
        </div>
    `,
};
