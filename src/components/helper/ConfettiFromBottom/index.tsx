import  { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiFromBottom = () => {
  useEffect(() => {
    // Check if the user is new by checking localStorage
    const isNewUser = localStorage.getItem("isNewUser");

    if (!isNewUser) {
      const end = Date.now() + 2 * 1000; // 2 seconds duration for the confetti
      const colors = ["#2323FF", "#fe019a"];

      // Trigger the confetti animation only if the user is new
      setTimeout(() => {
        const frame = () => {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
          });

          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame); // Continue the animation
          }
        };

        frame(); // Start the animation
      }, 1000); // Add a delay before starting the confetti animation

      // Set isNewUser flag in localStorage to indicate the user has visited
      localStorage.setItem("isNewUser", "false");
    }

    // Cleanup confetti when component unmounts
    return () => {
      confetti.reset();
    };
  }, []);

  return <div></div>;
};

export default ConfettiFromBottom;
