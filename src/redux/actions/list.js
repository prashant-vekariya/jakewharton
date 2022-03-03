const List = (data = "") => {
    return {
        type: "LIST",
        payload: data
    }
}
const fetchMoreData = (data = "") => {
    return {
        type: "FETCH_MORE_DATA",
        payload: parseInt(data + 1)
    }
}


export {
    List,
    fetchMoreData
}