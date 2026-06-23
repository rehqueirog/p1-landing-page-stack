import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          color?: string;
          size?: string;
          type?: string;
          class?: string;
        },
        HTMLElement
      >;
    }
  }
}