import { createTodo } from "@/firebase/api/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["todo", "list"],
      });
    },
  });
};

export default useCreateTodo;
