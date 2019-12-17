export const PING = 'PING';
export const PONG = 'PONG';

export const getPing = () => {
    return {
        type : PING,
    }
}

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PONG });