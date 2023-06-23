import axios from "axios";

export const getCards = async () => {
    // try {
        // const res = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid`) // api form FakerApi
        const res = await axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/product`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}
export const getCard = async (id) => {
        const res = await axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/product/${id}`)
        return res.data.rows;

}
export const getAdmins = async () => {
    // try {
        // const res = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid`) // api form FakerApi
        const res = await axios.get(`https://sympatheticgrowlingservice.danpamag.repl.co/api/user/`)

        return res.data.rows;
    // } catch (e) {
    //     console.log("ERROR")
    // }
}