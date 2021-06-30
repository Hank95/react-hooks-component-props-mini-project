import Article from "./Article";

function ArticleList(props) {
  const container = props.array.map((item) => {
    return (
      <Article
        key={item.id}
        title={item.title}
        date={item.date}
        preview={item.preview}
      />
    );
  });

  return <main>{container}</main>;
}

export default ArticleList;
