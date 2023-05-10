import React, { HTMLAttributes } from "react";
import * as icons from "./svgr";
import { CSSProperties } from "styled-components";
import styled, { css } from "styled-components";
export const IconNames = Object.keys(icons) as IconType[];

export type IconType = keyof typeof icons;

type IconProps = HTMLAttributes<SVGElement> & {
  icon: IconType;
  css?: CSSProperties;
  className?: string;
};

function Icon({ icon, ...props }: IconProps) {
  const IconComp = icons[icon];

  if (!IconComp) {
    throw new TypeError(`Not found icon [${icon}]`);
  }

  return <IconComp {...props} />;
}

export default Icon;

const theme = {
  typography: {
    body1: {
      lineHeight: 12,
      fontSize: 12,
    },
  },
};
