import React from 'react';
import ReactDOM from 'react-dom';
import CommentBlock from './comment-block';

function stringNumber(data) {
  return (data<10)?('0'+data):data
}

class CommentsPanelApp extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: (localStorage.comments)? JSON.parse(localStorage.comments) : [
        {author: 'Анастасия', text: 'Причиненный ущерб, как принято считать, вызывает обязательственный экспрессионизм. Рефинансирование позитивно продолжает канон биографии. Рекламное сообщество готично поручает коносамент. Его экзистенциальная тоска выступает как побудительный мотив творчества, однако криволинейный интеграл вызывает статус художника, что-то подобное можно встретить в работах Ауэрбаха и Тандлера.', date: '31.12.2020', time: '12:00:00'},
        {author: 'Иван', text: 'Творческая доминанта, на первый взгляд, обеспечена залогом. Пленум Высшего Арбитражного Суда неоднократно разъяснял, как повторный контакт перманентно продуцирует имущественный интеграл от функции, обращающейся в бесконечность в изолированной точке. Филогенез позиционирует субсидиарный целевой сегмент рынка. Рассмотрим непрерывную функцию y = f ( x ), заданную на отрезке [ a, b ], реклама характерна. Матожидание, как следует из вышесказанного, формирует непосредственный суд, осознавая социальную ответственность бизнеса. Элегия консолидирует интеграл Дирихле.', date: '10.11.2020', time: '13:10:55'},
        {author: 'Александра', text: 'Муниципальная собственность, согласно Ф.Котлеру, латентно диссонирует межличностный аккредитив. Стимулирование коммьюнити иллюстрирует стремящийся обычай делового оборота, даже с учетом публичного характера данных правоотношений. Эпсилон окрестность, так или иначе, инновационна. Теорема Гаусса - Остроградского, как того требуют нормы международного частного права, традиционно программирует акцепт.', date: '01.11.2020', time: '20:13:41'}
      ],
      newComment_author: '',
      newComment_text: ''
    };
  }

  delete(key) {
    const comments = this.state.comments.map((comment, i) => {
      if (key == i) {
        return;
      }
     else {
      return comment;
    }
  })
    this.setState({comments});
  }

  addComment() {
    const comments = this.state.comments;
    let date = new Date;

    comments.push({
      author: this.state.newComment_author,
      text: this.state.newComment_text,
      date: stringNumber(date.getDate())+'.'+stringNumber(date.getMonth()+1)+'.'+date.getFullYear(),
      time: stringNumber(date.getHours())+':'+stringNumber(date.getMinutes())+':'+stringNumber(date.getSeconds())
    });
    this.setState({comments});
  }

  render() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
    return (
      <div>
      {
        this.state.comments.map((comment, i) => {
          if (comment) {
            return (
              <CommentBlock
                key = {i}
                author = {comment.author}
                text = {comment.text}
                date = {comment.date}
                time = {comment.time}
                delete = {this.delete.bind(this, i)}
              />
            )
          }
        })
      }
      <h5>Добавить новый комментарий: </h5>
        <div  className='comment card bg-light mb-3'>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" onKeyUp = {
                  ev => {this.setState({ newComment_author: ev.target.value })}
                } />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Комментарий</label>
                <textarea className="form-control" id="comment" onKeyUp = {
                  ev => {this.setState({ newComment_text: ev.target.value })}} />
              </div>
              <button type="submit" className="btn btn-primary" onClick = {
                ev => {this.addComment()}
              }>Опубликовать</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <CommentsPanelApp />,
  document.querySelector('#commentsPanel')
);
