import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withLayout } from '../../components/Main/Main';
import { fetchDeletePost, fetchPosts } from '../../share/api/posts.api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { VscTrash } from 'react-icons/vsc';
import { IoCreateOutline } from 'react-icons/io5';
import { fetchGetPostData } from '../../share/api/post.api';
import { useNavigate } from 'react-router-dom';

function Home() {
  //const [post, setPost] = useState(null);
  const post = useSelector((state) => state.post);
  const posts = useSelector((state) => state.posts.posts);
  const id = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handlerGetPostData = async (slug) => {
    await dispatch(fetchGetPostData(slug));
    if (post) {
      navigate('/create-post/true');
    }
  };

  return (
    <section>
      <div className='container'>
        {posts.length === 0 && <h1>Постів ще немає</h1>}
        {posts.length > 0 && (
          <>
            <h1>Пости</h1>
            <div className='grid'>
              {posts.map((item) => {
                return (
                  <Card key={item.id}>
                    {item.author.id === Number(id) && (
                      <div className='d-flex'>
                        <div
                          onClick={async () => {
                            await dispatch(
                              fetchDeletePost({ slug: item.slug })
                            );
                            await dispatch(fetchPosts());
                          }}
                        >
                          <VscTrash />
                        </div>
                        <div onClick={() => handlerGetPostData(item.slug)}>
                          <IoCreateOutline />
                        </div>
                      </div>
                    )}
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant='primary'>Див. пост</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default withLayout(Home);
