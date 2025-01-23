import React, { useEffect } from "react";
import anime from "animejs";

const LetterByLetterAnimation = ({ texts }) => {
  useEffect(() => {
    const animateText = () => {
      const textWrapper = document.querySelector(".ml7 .letters");
      let currentIndex = 0;

      const updateText = () => {
        if (currentIndex < texts.length) {
          textWrapper.innerHTML = texts[currentIndex].replace(/\S/g, "<span class='letter'>$&</span>");
          anime.timeline({ loop: false })
            .add({
              targets: ".ml7 .letter",
              translateY: ["1.1em", 0],
              translateX: ["0.55em", 0],
              translateZ: 0,
              rotateZ: [180, 0],
              duration: 750,
              easing: "easeOutExpo",
              delay: (el, i) => 50 * i
            })
            .add({
              targets: ".ml7",
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000,
              complete: () => {
                currentIndex++;
                updateText();
              }
            });
        }
      };

      updateText();
    };

    animateText();
  }, [texts]);

  return (
    <h1 className="ml7 relative font-extrabold text-4xl">
      <span className="text-wrapper inline-block pt-1 pb-0.5 pr-0.5 overflow-hidden">
        <span className="letters"></span>
      </span>
    </h1>
  );
};

export default LetterByLetterAnimation;
