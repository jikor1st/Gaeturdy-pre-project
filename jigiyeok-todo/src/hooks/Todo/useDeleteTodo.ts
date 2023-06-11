import { deleteTodo } from "@/firebase/api/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["todo", "list"],
      });
    },
  });
};

export default useDeleteTodo;
