import TodoList from '@/components/common/TodoList';
import TabMenu from '@/components/common/TabMenu';
import TabContents from '@/components/common/TabContents';

const Homepage = () => {
    return (
        <TodoList >
            <TabMenu />
            <TabContents 
                placeholder = "할 일을 추가해주세요"
                btntxt = "추가"
            />
        </TodoList>
    )
}

export default Homepage;