import React from "react";
import { styled } from "goober";
import { OverlayLayer } from "./Layers";

export interface PopupProps {
  onClose(event: React.MouseEvent<HTMLElement, MouseEvent>): any;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  children: JSX.Element;
  attributes?: any;
  className?: string;
}

export const Popup = (props: PopupProps) => {
  const { onClose, top, left, children, attributes, className } = props;
  const style = { top, left };
  return (
    <Overlay onClick={onClose}>
      <div style={style} {...attributes} className={className}>
        {children}
      </div>
    </Overlay>
  );
};

type DivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Overlay = styled<DivType>("div")`
  position: fixed;
  z-index: ${OverlayLayer};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
`;
