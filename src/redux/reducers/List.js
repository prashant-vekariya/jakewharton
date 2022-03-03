const Emp = {
  List: [],
  hasMore: 1
};

const List = (state = Emp, action) => {
  switch (action.type) {
    case "LIST":
      return {...state, List: state.List.concat(action.payload)};
    break;

    case "FETCH_MORE_DATA":
      return {...state, hasMore: action.payload};
      break;

    default:
      return {...state};
  }
};

export default List;
