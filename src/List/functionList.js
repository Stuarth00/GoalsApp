import { goalMock } from "../List/goalMock";

export async function getData(){

    return new Promise(( resolve) => {
        setTimoeout(() => {
            resolve(goalMock);
        }, 5000);
    });
}