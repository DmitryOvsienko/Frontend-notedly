import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

import Note from "../components/Note";

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author{
        username
        id
        avatar
      }
    }
  }
`

const NotePage = props => {
  /**props.match.params.id тут можно достать айди параметр из строки урла */
  const id = props.match.params.id
  // Запрашиваем хук, передавая значение id в качестве переменной
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } })
  if (loading) return <p>Loading...</p>
  if(error) return <p>Error! Note not found</p>
  return <Note note={data.note}/>
}

export default NotePage;