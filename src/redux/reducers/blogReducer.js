const initialState = [
  { id: 0, title: "What Is a Blog?", description: "A blog (short for “weblog”) is an online journal or informational website run by an individual, group, or corporation that offers regularly updated content (blog post) about a topic. It presents information in reverse chronological order and it’s written in an informal or conversational style.", image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.webp" },
  { id: 1, title: "What Is the Difference Between a Blog and a Website?", description: "Blogs work to present fresh content – content that is updated frequently. Meanwhile, traditional websites provide static information about a person, group, or subject.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7CEYNiCgb6HxnJCicKdfentCRY5p83LH8g&usqp=CAU" },
];

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      state = [...state, action.payload];
      return state;
    case "DELETE_BLOG":
      const blogFilter = state.filter((blog) =>
        blog.id === action.payload ? null : blog
      );
      state = blogFilter;
      return state;
    case "UPDATE_BLOG":
      const blogUpdate = state.filter((blog) =>
        blog.id === action.payload.id
          ? Object.assign(blog, action.payload)
          : blog
      );
      state = blogUpdate;
      return state;
    case "RESET_BLOG":
      state = [{ title: null, description: null, image: null }];
      return state;
    default:
      return state;
  }
};
