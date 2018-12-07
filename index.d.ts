// Type definitions for styled-css-grid
// Project: https://github.com/azz/styled-css-grid
// Definitions by: protocol114 <https://github.com/protocol114>

declare module 'styled-css-grid' {
    import * as React from "react";
    import {StyledComponent} from "styled-components";

    export interface ICellProps extends React.ComponentPropsWithRef<'div'> {
        className?: string,
        width?: number,
        height?: number,
        top?: number | string,
        left?: number | string,
        middle?: boolean,
        center?: boolean,
        area?: string
    }

    export interface IGridProps extends React.ComponentPropsWithRef<'div'> {
        className?: string,
        columns?: number | string,
        gap?: string,
        columnGap?: string,
        rowGap?: string,
        height?: string,
        minRowHeight?: string,
        flow?: string,
        rows?: number | string,
        areas?: string[],
        justifyContent?: string,
        alignContent?: string
    }

    export type GridComponent = StyledComponent<
        React.ForwardRefExoticComponent<Partial<IGridProps>>,
        any
    >;

    export type CellComponent = StyledComponent<
        React.ForwardRefExoticComponent<Partial<ICellProps>>,
        any
    >;

    export const Grid: GridComponent;
    export const Cell: CellComponent;
}
