import { useEffect, useState, useRef } from "react"

export function UseOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOnScreen(true)
          observerRef.current.disconnect()
        }
      }
    )
    observerRef.current.observe(ref.current)
    return () => {
      observerRef.current.disconnect()
    }
  }, [])

  return isOnScreen
}






// import { useEffect, useState, useRef } from 'react';

// export function UseOnScreen(ref) {
//   const [isOnScreen, setIsOnScreen] = useState(false);
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(([entry]) =>
//       setIsOnScreen(entry.isIntersecting)
//     );
//   }, []);

//   useEffect(() => {
//     observerRef.current.observe(ref.current);

//     return () => {
//       observerRef.current.disconnect();
//     };
//   }, [ref]);

//   return isOnScreen;
// }
