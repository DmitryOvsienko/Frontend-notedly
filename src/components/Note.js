import React from 'react';
import ReactMarkdown from 'react-markdown';
// Импортируем утилиту форматирования из 'date-fns` 
import { format } from 'date-fns';
import styled from 'styled-components';

// Ограничиваем расширение заметок до 800 пикселей
const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`
 // Стилизуем метаданные заметки
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`
// Добавляем пространство между аватаром и метаданными
const MetaInfo = styled.div`
  padding-right: 1em;
`

const UserActions = styled.div`
  margin-left: auto;
`

const Note = ({ note }) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
          src={ note.author.avatar }
          alt={`${ note.author.username } avatar`}
          height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> { note.author.username } <br/>
          { format(note.createdAt, 'MMM Do YYYY') }
        </MetaInfo>
        <UserActions>
          <em>Favorites:</em> { note.favoriteCount }
        </UserActions>
      </MetaData>
      <ReactMarkdown source={ note.content } />
    </StyledNote>
  )
}

export default Note;