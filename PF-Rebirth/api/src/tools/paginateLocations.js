
const SERVER = "http://localhost:3000/"

const getPagination = (page, size) => {
    const limit = size ? +size : 6;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: locations } = data;
    let localidades = [];
    locations.filter(p => localidades.push(p.location));
    let result = localidades.filter((item,index)=>{
        return localidades.indexOf(item) === index;
    })
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, result, totalPages, currentPage };
  };

module.exports = {
    getPagination,
    getPagingData
}