import * as kaiju from "./kaiju.json"

/** I'm just simulating a fetch call. Don't think too hard about me. */
export const getKaiju = () => Promise.resolve(new Response(JSON.stringify(kaiju)));