import { getTodoList } from "@/firebase/api/todo";
import {
  createQueryKeys,
  inferQueryKeyStore,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";

const todoFactory = createQueryKeys("todo", {
  list: {
    queryKey: ["list"],
    // queryFn: ({ pageParam }) => getTodoList({ pageParam, limitParam: 3 }),
  },
});

const queryFactory = mergeQueryKeys(todoFactory);
// type QueryKeysType = inferQueryKeyStore<typeof queryFactory>;

export default queryFactory;
