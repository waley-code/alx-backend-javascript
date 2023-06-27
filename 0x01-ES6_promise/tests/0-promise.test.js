import getResponseFromAPI from "../0-promise.js";
test(`function getResponseFromAPI() return promise`, ()=>{
    const response = getResponseFromAPI();
    expect(response instanceof Promise).toEqual(true);
})
