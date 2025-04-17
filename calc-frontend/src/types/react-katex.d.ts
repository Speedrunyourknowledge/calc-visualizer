declare module "react-katex" {
    import * as React from "react";
  
    interface KatexProps {
      children?: string;
      math?: string;
      errorColor?: string;
      renderError?: (error: Error) => React.ReactNode;
    }
  
    const InlineMath: React.FC<KatexProps>;
    const BlockMath: React.FC<KatexProps>;
  
    export { InlineMath, BlockMath };
    export default InlineMath;
  }