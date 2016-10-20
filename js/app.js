var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

var Article = React.createClass({
  render: function() {
    
    return (
      <div className="article">
        <p className="news__author">{this.props.pnews.author}:</p>
        <p className="news__text">{this.props.pnews.text}</p>
      </div>
    )
  }
});

var News = React.createClass({
  render: function() {
    var data = this.props.pnews;
    var newsTemplate;
    var newsNumText;
    
    if (data.length> 0) {
      var generate_item_box_lambda = function(item, i) {
        return (
          <div key={i}>
            <Article pnews={item} />
          </div>
        )
      }
      newsTemplate = data.map(generate_item_box_lambda)
      newsNumText = <p>Всего новостей: {data.length}</p>

    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        {newsNumText}
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h3>Новости</h3>
        <News pnews={my_news} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));