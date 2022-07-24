import { useEffect, useRef } from "react";

export default function useDidMount(fn: Function, arg: any) {
    const stMount = useRef(false);

      useEffect(() => { 
        if(!stMount.current) {
          stMount.current = true
          return
        }
        fn();
      }, arg);
  }