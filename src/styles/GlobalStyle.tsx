import { css, Global } from "@emotion/react";

import Variables from "./Variables";

const style = css`
    * {
        margin: 0;
        padding: 0;
        font: inherit;
        color: inherit;
    }
    *,
    :after,
    :before {
        box-sizing: border-box;
        flex-shrink: 0;
    }
    :root {
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        cursor: default;
        line-height: normal;
        overflow-wrap: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
    }
    html,
    body {
        height: 100%;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    ul,
    ol {
        list-style-type: none;
    }
    html {
        font-size: ${Variables.fontSize.md};
        overflow-y: scroll;
    }
    body {
        font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
