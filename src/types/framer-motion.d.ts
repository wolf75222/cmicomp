declare module "framer-motion" {
  export interface InViewOptions {
    rootMargin?: string;
    once?: boolean;
    margin?: string;
  }

  export const AnimatePresence: any;
  export const motion: any;
  export type Variants = any;
  export function useInView(ref: any, options?: InViewOptions): boolean;
  export function useMotionValue(initialValue: number): any;
  export function useSpring(value: any, springConfig?: any): any;
  
  // Support both overloads of useTransform
  export function useTransform(value: any, input: any[], output: any[]): any;
  export function useTransform(value: any, transformer: (value: any) => any): any;
} 