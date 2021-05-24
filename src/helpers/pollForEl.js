/**
 * See how to use here:
 * https://dev.to/meghsohor/2-useful-polling-functions-in-javascript-2735
 * 
 */

export default (query) => {
    if (typeof query !== 'string') return

    return new Promise((resolve) => {
        const wfelem = () => {
            (null != document.querySelector(query))
                ? resolve(document.querySelector(query))
                : window.requestAnimationFrame(wfelem);
        };

        wfelem();
    });

}