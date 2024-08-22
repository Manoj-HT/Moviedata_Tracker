import { useRef, useEffect } from "react";
import { KeyFrameType } from "../types/types";

export const useAnimation = <HTMLElementType>(
  cssEffects: KeyFrameType[],
  timingOptions: KeyframeAnimationOptions
) => {
  const ref = useRef<HTMLElementType>(null);
  useEffect(() => {
    if (ref.current) {
      (ref.current as unknown as HTMLElement).animate(
        cssEffects,
        timingOptions
      );
    }
  }, [ref]);
  return ref;
};
