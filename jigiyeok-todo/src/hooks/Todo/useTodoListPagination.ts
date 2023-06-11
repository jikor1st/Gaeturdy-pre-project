import { getTodoList } from "@/firebase/api/todo";
import { useInfiniteQuery } from "@tanstack/react-query";

// https://wonsss.github.io/library/tanstack-query-v5/
// https://stackoverflow.com/questions/54201787/what-is-the-best-way-to-get-server-timestamp-using-firebase-cloud-firestore-io
const useTodoListPagination = () => {
  // return useQuery(queryFactory.todos.list);
  const limitParam = 2;
  return useInfiniteQuery({
    defaultPageParam: "",
    queryKey: ["todo", "list"],
    queryFn: ({ pageParam }) => {
      return getTodoList({
        lastCreatedAt: pageParam,
        limitParam,
        // filter: "complete",
      });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage) return;
      if (lastPage.length < limitParam) return;
      const lastItem = lastPage[lastPage.length - 1];
      return lastItem?.id;
    },
    refetchOnWindowFocus: false,
    retry: 0,
  });
};

export default useTodoListPagination;
