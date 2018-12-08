import gql from 'graphql-tag'
export default gql`mutation AddLyricToSong($songId:ID!, $content:String) {
  addLyricToSong(content: $content, songId: $songId) {
    id,
    lyrics {
      id
      content
      likes
    }
  }
}`
