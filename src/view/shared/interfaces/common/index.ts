export interface User {
    id: String;
    name: String;
    email: String;
    phone: Number;
    img: String;
}


export interface IActionParams {
    sectionId?: string;
    isAppend?: boolean;
    canLoadMore?: boolean;
    [key: string]: any;
}

export interface IAction<T> {
    type: string;
    payload?: T;
    error?: any;
    params?: IActionParams;

    [key: string]: any;
}