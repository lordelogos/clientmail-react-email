import * as React from "react";
import { render } from "@react-email/render";

export class ReactEmailPlugin {
  convertReactEmailToHtml(component: React.ReactElement): string {
    const html = render(component);
    return html;
  }
}
