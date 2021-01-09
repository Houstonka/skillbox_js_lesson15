import React from 'react';

const comment = (params) => {
  return (
    <div  className='comment card  mb-3'>
      <div className="card-body">
        <h5 className="card-title" id='author'>{params.author}</h5>
        <p className="card-text" id='text' dangerouslySetInnerHTML={{__html: params.text}}></p>
        <small>{params.date} {params.time}</small><br></br>

        <button type="button" className="btn btn-danger" onClick = {params.delete}>Удалить</button>
      </div>
    </div>
  );
}
export default comment
