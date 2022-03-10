import { ReactElement } from "react";

export interface RouteData {
    routeProps: RouteProps;
    name: string;
}

export interface RouteProps {
    path: string;
    element: ReactElement<any, any>
}

export interface Action<T> {
    type: string,
    payload: T
}

export interface KeyValuePayload {
    key: string,
    value: any
}

export interface AuthModel {
    username: string,
    password: string,
}

export interface ValidatorResponse {
    isValidated: boolean,
    message: string
}
