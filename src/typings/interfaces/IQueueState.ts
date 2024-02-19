export interface IQueueState {
    queueResponse: null | IQueue,
    queueResponseLoading: boolean,
    queueResponseError: undefined | any,

    reserveQueueResponse: null |  string,
    reserveQueueLoading: boolean,
    reserveQueueError:  undefined | any,

    currentReserveResponse: null | number | string,
    currentReserveLoading: boolean,
    currentReserveError:  undefined | any

    allCusReserveResponse: null | any,
    allCusReserveLoading: boolean,
    allCusReserveError:  undefined | any
}

export interface IQueue {
    next: number
    active: IActiveQueue | undefined
}

export interface IActiveQueue {
    id: number,
    vendor_user_id : number
    cus_user_id: number
    queueno: number
    status: number
}