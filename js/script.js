const accordions = document.querySelectorAll('.js-accordion');

const onAccordionClick = (evt) => {
    const accordionContent = evt.target.nextElementSibling;

    if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
    } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }
};
const onWindowResize = () => {
    const accordeonBlocks = document.querySelectorAll('.js-grid-content.is-visible');
    if (accordeonBlocks) {
        accordeonBlocks.forEach((block) => block.style.maxHeight = block.scrollHeight + 'px');
    }
};

accordions.forEach((accordion) => accordion.addEventListener('click', onAccordionClick));

window.addEventListener('resize', onWindowResize);


