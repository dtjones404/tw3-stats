export default function Index({ posts }) {
  return (
    <div>
      {posts.map(({ message, created_at, created_by }) => (
        <div>
          <div>{message}</div>
          <div>{created_at}</div>
          <div>{created_by}</div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `http://codesmith-chat-server.herokuapp.com:80/catpics`
  );
  const posts = await res.json();
  return {
    props: { posts },
    revalidate: 10, // in seconds.
  };
}
