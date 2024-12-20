// import { useMouseMove, useValue, animate, withEase } from "react-ui-animate";

// const CURSOR_SIZE = 40;

// export default function App() {
//   const x = useValue(20);
//   const y = useValue(0);

//   useMouseMove(({ mouseX, mouseY }) => {
//     x.value = withEase(mouseX - CURSOR_SIZE / 2);
//     y.value = withEase(mouseY - CURSOR_SIZE / 2);
//   });

//   return (
//     <animate.div
//       style={{
//         width: CURSOR_SIZE,
//         height: CURSOR_SIZE,
//         backgroundColor: "#2323FF",
//         borderRadius: "50%",
//         // backgroundColor: "transparent",
//         // position: "absolute",
//         translateX: x.value,
//         pointerEvents: "none",
//         translateY: y.value,
//         // boxShadow: "0 0 40px 10px #2323FF"
//       }}
//     />
//   );
// }
