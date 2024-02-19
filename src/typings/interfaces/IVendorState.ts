export interface IVendorBranchState {
    venResponse: null | IVendorBranch[],
    venResponseLoading: boolean,
    venResponseError: undefined | any
}

export interface IVendorBranch {
    id: number,
    branch_name : string,
    description : string,
    image: string,
    duration: number,
    vendor: IVendor
}

export interface IVendor {
    id: number,
    vendor_name : string
}