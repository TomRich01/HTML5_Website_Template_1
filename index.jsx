function Comment() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">
                    Hello World
      </h1>

                <p className="subtitle">
                    My first website with <strong>Bulma</strong>!
      </p>
            </div>
        </section>
    );
}

ReactDOM.render(
    <Comment/>,
    document.getElementById('like_button')
);