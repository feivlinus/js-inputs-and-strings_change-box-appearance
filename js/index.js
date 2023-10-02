/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const borderRadiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const randomButton = document.querySelector('[data-js="random-button"]');

colorInput.addEventListener("input", () => {
  const newColorValue = colorInput.value;
  box.style.background = `hsl(${newColorValue} , 100%, 50%)`;
});

borderRadiusInput.addEventListener("input", () => {
  const newBorderRadiusValue = borderRadiusInput.value;
  box.style.borderRadius = `${newBorderRadiusValue}%`;
});

rotationInput.addEventListener("input", () => {
  const newRotationValue = rotationInput.value;
  box.style.transform = `rotate(${newRotationValue}deg)`;
});

randomButton.addEventListener("click", () => {
  const randomColorValue = Math.floor(Math.random() * 361);
  const randomBorderRadiusValue = Math.floor(Math.random() * 51);
  const randomRotationValue = Math.floor(Math.random() * 181);
  box.style = `
      background: hsl(${randomColorValue} , 100%, 50%);
      border-radius: ${randomBorderRadiusValue}%;
      transform: rotate(${randomRotationValue}deg);
    `;
  colorInput.value = randomColorValue;
  borderRadiusInput.value = randomBorderRadiusValue;
  rotationInput.value = randomRotationValue;
});
