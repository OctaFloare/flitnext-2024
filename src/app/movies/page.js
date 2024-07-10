import { Content } from "../containers/movies/content";
import { ReactQueryProvider } from "../providers/reactQueryProvider";

const MoviesPage = () => {
  return (
    <div className="w">
      <ReactQueryProvider>
        <Content />
      </ReactQueryProvider>
    </div>
  );
};

export default MoviesPage;
