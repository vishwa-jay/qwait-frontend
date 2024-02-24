export interface ICatState {
    catResponse: null | ICat[],
    catResponseLoading: boolean,
    catResponseError: undefined | any
}

export interface ICat {
    id: number,
    category_name : string,
    description : string,
    img: string
}