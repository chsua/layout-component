import React from "react";
interface GridProps extends React.PropsWithChildren {
    rows: number;
    columns: number;
    gap: number;
}
export default function Grid({ rows, columns, gap, children }: GridProps): import("react/jsx-runtime").JSX.Element;
export {};