export const GET_USER = 'GET_USER';




export const getUser = (payload: any) => {
    return {
        type: GET_USER,
        payload
    }
}
