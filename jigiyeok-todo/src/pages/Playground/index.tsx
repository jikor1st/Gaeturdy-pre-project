import useTodoListPagination from "@/hooks/Todo/useTodoListPagination";
import { useState } from "react";
import useCreateTodo from "@/hooks/Todo/useCreateTodo";
import TextField from "@/components/common/TextField";
import Button from "@/components/common/Button";
import useIntersectionObserver from "@/hooks/common/useIntersectionObserver";
import useDeleteTodo from "@/hooks/Todo/useDeleteTodo";
// query
// https://kyounghwan01.github.io/blog/etc/firebase/#firestore-database-crud
// peruser
// https://stackoverflow.com/questions/37317542/how-to-store-data-per-user-and-prevent-others-to-see-them

// database
// https://www.youtube.com/watch?v=2ciHixbc4HE

const PlaygroundPage = () => {
  const {
    data: todoListPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useTodoListPagination();

  const createTodo = useCreateTodo();
  const deleteTodo = useDeleteTodo();
  const [todo, setTodo] = useState("");

  const visibleRegister = hasNextPage && !isFetching && !isLoading;
  const register = useIntersectionObserver(() => {
    if (visibleRegister) fetchNextPage();
  });

  return (
    <>
      <div style={{ display: "flex", gap: 12, padding: 16 }}>
        <TextField
          placeholder="할 일 추가"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            createTodo.mutate(todo, {
              onSuccess() {
                setTodo("");
              },
            });
          }}
          size="large"
        >
          작성
        </Button>
      </div>

      {todoListPage?.pages.map((page) =>
        page.map(({ title, checked, createdAt, updatedAt, id }) => {
          return (
            <div key={id}>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: "column",
                }}
              >
                <p>checked: {String(checked)}</p>
                <p>title: {title}</p>
                <p>createdAt: {createdAt}</p>
                <p>updatedAt: {updatedAt}</p>
                <button onClick={() => deleteTodo.mutate(id)}>삭제</button>
              </div>
              <hr />
            </div>
          );
        })
      )}
      {visibleRegister && <div ref={register} />}
    </>
  );
};

export default PlaygroundPage;

// const Auth = () => {
//   const [registerFormValue, setRegisterFormValue] = useState({
//     email: "",
//     password: "",
//   });
//   const [signInFormValue, setSignInFormValue] = useState({
//     email: "",
//     password: "",
//   });

//   const { data: userData } = useUserState();
//   const registerUser = useRegisterUser();
//   const signIn = useSignIn();
//   const signOut = useSignOut();

//   return (
//     <>
//       {!!userData ? (
//         <div style={{ padding: 16 }}>
//           <Button
//             onClick={() => {
//               signOut.mutate();
//             }}
//             fullWidth
//           >
//             로그아웃
//           </Button>
//         </div>
//       ) : (
//         <>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 12,
//               padding: 16,
//             }}
//           >
//             <h1>회원가입</h1>
//             <TextField
//               placeholder="email"
//               value={registerFormValue.email}
//               onChange={(event) => {
//                 setRegisterFormValue((prev) => ({
//                   ...prev,
//                   email: event.target.value,
//                 }));
//               }}
//             />
//             <TextField
//               placeholder="password"
//               value={registerFormValue.password}
//               onChange={(event) => {
//                 setRegisterFormValue((prev) => ({
//                   ...prev,
//                   password: event.target.value,
//                 }));
//               }}
//             />
//             <Button
//               size="large"
//               onClick={() => {
//                 registerUser.mutate(registerFormValue);
//               }}
//             >
//               회원가입
//             </Button>
//           </div>
//           <hr />
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 12,
//               padding: 16,
//             }}
//           >
//             <h1>로그인</h1>
//             <TextField
//               placeholder="email"
//               onChange={(event) => {
//                 setSignInFormValue((prev) => ({
//                   ...prev,
//                   email: event.target.value,
//                 }));
//               }}
//             />
//             <TextField
//               placeholder="password"
//               onChange={(event) => {
//                 setSignInFormValue((prev) => ({
//                   ...prev,
//                   password: event.target.value,
//                 }));
//               }}
//             />
//             <Button
//               size="large"
//               onClick={() => {
//                 signIn.mutate(signInFormValue);
//               }}
//             >
//               로그인
//             </Button>
//           </div>
//         </>
//       )}
//     </>
//   );
// };
