import User from './user.interface'
import BoardListItem from './board-list-item.interface';
import FavoriteListItem from './favorite-list-item.interface';
import CommentListItem from './comment-list-item.interface';
export type { //인터페이스를 export 할때에는 이와같이 type키워드를 사용한다. 
    BoardListItem, FavoriteListItem, CommentListItem, User};
    